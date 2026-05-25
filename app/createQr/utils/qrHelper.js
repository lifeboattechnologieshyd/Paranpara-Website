/**
 * Utility functions for QR Code operations: downloading and printing.
 * Scoped for Next.js browser executions inside isolated app/createQr.
 */

export const downloadQRCode = (svgId, size = 1024, fgColor = '#000000', bgColor = '#FFFFFF', logoSrc = null, fileName = 'qr-code.png') => {
  if (typeof window === 'undefined') return Promise.reject('Not running in browser');
  
  const svg = document.getElementById(svgId);
  if (!svg) return Promise.reject('QR SVG element not found');

  return new Promise((resolve, reject) => {
    try {
      const svgClone = svg.cloneNode(true);
      svgClone.setAttribute('width', size.toString());
      svgClone.setAttribute('height', size.toString());

      const svgString = new XMLSerializer().serializeToString(svgClone);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const URL = window.URL || window.webkitURL || window;
      const blobURL = URL.createObjectURL(svgBlob);
      
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        
        context.fillStyle = bgColor;
        context.fillRect(0, 0, size, size);
        context.drawImage(image, 0, 0, size, size);
        
        if (logoSrc) {
          const logo = new Image();
          logo.crossOrigin = 'anonymous';
          logo.onload = () => {
            const logoSize = Math.round(size * 0.22);
            const logoPos = (size - logoSize) / 2;
            const padding = Math.round(size * 0.02);
            const cardSize = logoSize + padding * 2;
            const cardPos = (size - cardSize) / 2;
            const cornerRadius = Math.round(cardSize * 0.2);
            
            context.beginPath();
            context.moveTo(cardPos + cornerRadius, cardPos);
            context.lineTo(cardPos + cardSize - cornerRadius, cardPos);
            context.quadraticCurveTo(cardPos + cardSize, cardPos, cardPos + cardSize, cardPos + cornerRadius);
            context.lineTo(cardPos + cardSize, cardPos + cardSize - cornerRadius);
            context.quadraticCurveTo(cardPos + cardSize, cardPos + cardSize, cardPos + cardSize - cornerRadius, cardPos + cardSize);
            context.lineTo(cardPos + cornerRadius, cardPos + cardSize);
            context.quadraticCurveTo(cardPos, cardPos + cardSize, cardPos, cardPos + cardSize - cornerRadius);
            context.lineTo(cardPos, cardPos + cornerRadius);
            context.quadraticCurveTo(cardPos, cardPos, cardPos + cornerRadius, cardPos);
            context.closePath();
            
            context.fillStyle = bgColor;
            context.fill();

            context.strokeStyle = fgColor;
            context.lineWidth = Math.max(1, Math.round(size * 0.003));
            context.stroke();
            
            context.save();
            context.beginPath();
            context.arc(size / 2, size / 2, logoSize / 2, 0, Math.PI * 2);
            context.clip();
            
            context.drawImage(logo, logoPos, logoPos, logoSize, logoSize);
            context.restore();
            
            triggerDownload();
          };
          logo.onerror = () => {
            triggerDownload();
          };
          logo.src = logoSrc;
        } else {
          triggerDownload();
        }

        function triggerDownload() {
          const pngURL = canvas.toDataURL('image/png');
          const downloadLink = document.createElement('a');
          downloadLink.href = pngURL;
          downloadLink.download = fileName;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(blobURL);
          resolve();
        }
      };
      image.onerror = (err) => reject(err);
      image.src = blobURL;
    } catch (e) {
      reject(e);
    }
  });
};

export const printQRCode = (svgId, title = 'Ebook QR Code', description = '') => {
  if (typeof window === 'undefined') return;
  const svg = document.getElementById(svgId);
  if (!svg) return;
  
  const svgClone = svg.cloneNode(true);
  svgClone.setAttribute('width', '350');
  svgClone.setAttribute('height', '350');
  svgClone.style.maxWidth = '100%';

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to print the QR Code.');
    return;
  }
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print QR Code - ${title}</title>
        <style>
          body {
            margin: 0;
            padding: 40px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            color: #0f172a;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
          }
          .card {
            border: 2px solid #e2e8f0;
            padding: 40px;
            border-radius: 24px;
            text-align: center;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
          }
          h1 {
            font-size: 26px;
            font-weight: 700;
            margin: 0 0 12px 0;
            color: #1e1b4b;
          }
          p {
            font-size: 14px;
            line-height: 1.5;
            color: #475569;
            margin: 0 0 24px 0;
            word-break: break-all;
          }
          .qr-wrapper {
            background: #f8fafc;
            padding: 20px;
            border-radius: 16px;
            border: 1px dashed #cbd5e1;
            margin-bottom: 24px;
            display: inline-block;
          }
          .footer-note {
            font-size: 11px;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
            padding-top: 16px;
            width: 100%;
          }
          @media print {
            body {
              padding: 0;
              min-height: auto;
            }
            .card {
              border: none;
              box-shadow: none;
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>${title}</h1>
          <p>${description}</p>
          <div class="qr-wrapper">
            ${svgClone.outerHTML}
          </div>
          <div class="footer-note">
            Generated via Paranpara QR Portal
          </div>
        </div>
        <script>
          window.onload = () => {
            setTimeout(() => {
              window.print();
              window.close();
            }, 500);
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
};

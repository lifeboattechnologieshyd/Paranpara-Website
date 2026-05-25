// Curriculum Data Service for Paranpara Ebook QR Generator
// Simplified to represent Grade 1-5, standard Subjects, Lessons 1-15, Concepts 1-5, and Format Types.

const grades = ["1", "2", "3", "4", "5"];
const subjects = ["English", "Science", "Social", "Maths"];
const lessons = Array.from({ length: 15 }, (_, i) => (i + 1).toString());
const concepts = ["1", "2", "3", "4", "5"];
const resourceTypes = ["General", "Parent Hub"];

export const dataService = {
  getGrades() {
    return grades;
  },

  getSubjects(grade) {
    if (!grade) return [];
    return subjects;
  },

  getLessons(grade, subject) {
    if (!grade || !subject) return [];
    return lessons;
  },

  getConcepts(grade, subject, lesson) {
    if (!grade || !subject || !lesson) return [];
    return concepts;
  },

  getTypes() {
    return resourceTypes;
  }
};

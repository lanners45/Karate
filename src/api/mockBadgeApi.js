import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const badges = [
  {
    BadgeId: 1,
    BadgeType: "Kata",
    BadgeDescription: "8th Kyu" 
  },
  {
    BadgeId: 2,
    BadgeType: "Kata",
    BadgeDescription: "7th Kyu" 
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (classObj) => {
  return replaceAll(classObj.className, ' ', '-');
};

class ClassApi {
  static getAllBadges() {
    console.log("get all badges called");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], badges));
      }, delay);
    });
  }

  static saveClass(classObj) {
    classObj = Object.assign({}, classObj); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minClassTitleLength = 1;
        if (classObj.className.length < minClassTitleLength) {
          reject(`Title must be at least ${minClassTitleLength} characters.`);
        }

        if (classObj.classId) {
          const existingClassIndex = badges.findIndex(a => a.classId == classObj.classId);
          badges.splice(existingClassIndex, 1, classObj);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          classObj.classId = generateId(classObj);
          badges.push(classObj);
        }

        resolve(classObj);
      }, delay);
    });
  }

  static deleteClass(classId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfClassToDelete = badges.findIndex(a => a.classId == classId);
        if (indexOfClassToDelete == -1) {
          return;
        }
        badges.splice(indexOfClassToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ClassApi;

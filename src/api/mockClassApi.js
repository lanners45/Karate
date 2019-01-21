import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const classes = [
  {
    classId: 1,
    className: "Main"
  },
  {
    classId: 2,
    className: "Peewee"
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
  static getAllClasses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], classes));
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
          const existingClassIndex = classes.findIndex(a => a.classId == classObj.classId);
          classes.splice(existingClassIndex, 1, classObj);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          classObj.classId = generateId(classObj);
          classes.push(classObj);
        }

        resolve(classObj);
      }, delay);
    });
  }

  static deleteClass(classId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfClassToDelete = classes.findIndex(a => a.classId == classId);
        if (indexOfClassToDelete == -1) {
          return;
        }
        classes.splice(indexOfClassToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ClassApi;

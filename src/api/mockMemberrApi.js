import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const members = [
  {
    MemberId: 1,
    Forenames: 'John',
    Surname: 'Wilson',
    Address: "9 Topcliffe Mews, Morley, Leeds, LS27 8UL",
    TelephoneNumber: "01133075092",
    MobileNumber: "N/A",
    EmailAddress: "john@lanners.plus.com",
    StartDate: '03/06/2017',
    DateOfBirth: '10/08/1971',
    Notes: "None",
    ClassId: 1,
    Age:47,
    Status:1
  },
  {
    MemberId: 2,
    Forenames: 'Abigail',
    Surname: 'Wilson',
    Address: "9 Topcliffe Mews, Morley, Leeds, LS27 8UL",
    TelephoneNumber: "01133075092",
    MobileNumber: "N/A",
    EmailAddress: "john@lanners.plus.com",
    StartDate: '03/11/2015',
    DateOfBirth: '25/08/2007',
    Notes: "None",
    ClassId: 1,
    Age:11,
    Status:1
  },
  {
    MemberId: 3,
    Forenames: 'Ben',
    Surname: 'Wilson',
    Address: "9 Topcliffe Mews, Morley, Leeds, LS27 8UL",
    TelephoneNumber: "01133075092",
    MobileNumber: "N/A",
    EmailAddress: "john@lanners.plus.com",
    StartDate: '03/11/2015',
    DateOfBirth: '29/10/2011',
    Notes: "None",
    ClassId: 2,
    Age:7,
    Status:1
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (member) => {
  return member.Forenames.toLowerCase() + '-' + member.Surname.toLowerCase();
};

class MembersApi {
  static getAllMembers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], members));
      }, delay);
    });
  }

  static saveMember(member) {
	member = Object.assign({}, member); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minMemberNameLength = 3;
        if (member.Forenames.length < minMemberNameLength) {
          reject(`First Name must be at least ${minMemberNameLength} characters.`);
        }

        if (member.Surname.length < minMemberNameLength) {
          reject(`Last Name must be at least ${minMemberNameLength} characters.`);
        }

        if (member.id) {
          const existingMemberIndex = members.findIndex(a => a.id == member.id);
          members.splice(existingMemberIndex, 1, member);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new members in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          member.id = generateId(member);
          members.push(member);
        }

        resolve(member);
      }, delay);
    });
  }

  static deleteMember(memberId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMemberToDelete = members.findIndex(member => {
          member.id == memberId;
        });
        members.splice(indexOfMemberToDelete, 1);
        resolve();
      }, delay);
    });
  }
  static GetActiveMemberCount(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(members.length(member => member.Status == 1));
      }, delay);
    });
  }

  static GetAllMemberCount(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(members.length);
      }, delay);
    });
  }
}

export default MembersApi;

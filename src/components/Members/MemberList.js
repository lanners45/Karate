import React from 'react';
import PropTypes from 'prop-types';
import MemberCourseRow from './MemberListRow';

const MemberList = ({members =[]}) => {
  return (
          <table className="table">
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Start date</th>
                <th>Age</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {members.map(member =>
                <MemberCourseRow key={member.MemberId} member={member}/>
              )}
            </tbody>
          </table>
      );
};

MemberList.propTypes = {
  members: PropTypes.array.isRequired
};

export default MemberList;

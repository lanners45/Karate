import React from 'react';
import { Link } from 'react-router';
import propTypes from 'prop-types';

const  MemberListRow  = ({member}) => {
     const editUrl = "member/"+ member.MemberId;
     const summaryUrl = "summary/"+ member.MemberId;
     return (
       <tr key={member.MemberId.toString()}>
          <td>{member.Forenames}</td>
          <td>{member.Surname}</td>
          <td>{member.StartDate}</td>
          <td>{member.Age}</td>
          <td>{member.ClassId}</td>
          <td>
          <Link className="btn btn-primary"  to= {editUrl}>Edit</Link>
          <Link className="btn btn-primary"  to= {summaryUrl}>Summary</Link>
              <input
                type="submit"
                value="delete"
                className="btn btn-primary"
                id={member.id}
                 />
            </td>
        </tr>
    );
};


MemberListRow.propTypes = {
  member: propTypes.object.isRequired
};

export default MemberListRow;

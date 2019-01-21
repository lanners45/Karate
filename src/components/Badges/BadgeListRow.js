import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const  BadgeListRow  = ({badge, onDelete}) => {
     return (
       <tr key={badge.BadgeId.toString()}>
          <td>{badge.BadgeType}</td>
          <td>{badge.BadgeDescription}</td>
          <td>
              <button type="button" className="btn btn-primary" onClick={onDelete} id={badge.BadgeId}>Delete</button>
          </td>
        </tr>
    );
};


BadgeListRow.propTypes = {
  classObj: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default BadgeListRow;

import React from 'react';
import PropTypes from 'prop-types';
import BadgeListRow from './BadgeListRow';

const BadgeList = ({badges =[], onDelete}) => {
  return (
          <table className="table">
            <thead>
              <tr>
                <th>Badge Type</th>
                <th>Badge Description</th>
              </tr>
            </thead>
            <tbody>
              {badges.map(badge =>
                <BadgeListRow key={badge.BadgeId} badge={badge} onDelete={onDelete}/>
              )}
            </tbody>
          </table>
      );
};

BadgeList.propTypes = {
  badges: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default BadgeList;

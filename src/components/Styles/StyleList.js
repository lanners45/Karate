import React from 'react';
import PropTypes from 'prop-types';
import StyleListRow from './StyleListRow';

const StyleList = ({styles =[], onDelete}) => {
  return (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {styles.map(style =>
                <StyleListRow key={style.StyleId} style={style} onDelete={onDelete}/>
              )}
            </tbody>
          </table>
      );
};

StyleList.propTypes = {
  classes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default StyleList;

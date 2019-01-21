import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const  StyleListRow  = ({style, onDelete}) => {
     return (
       <tr key={style.StyleId.toString()}>
          <td>{style.Name}</td>
          <td>
              <button type="button" className="btn btn-primary" onClick={onDelete} id={style.StyleId}>Delete</button>
          </td>
        </tr>
    );
};


StyleListRow.propTypes = {
  classObj: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default StyleListRow;

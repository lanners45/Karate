import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading, classesCount, membersCount, badgesCount}) => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
     <Link to="/" className="navbar-brand">Iruka Karate Club</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Members
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link  className="dropdown-item" to="/activeMembers">Active Members({membersCount})</Link>
            <a className="dropdown-item" href="#">Inactive Members</a>
            <a className="dropdown-item" href="#">Lisense Expired</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Maintenance
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link  className="dropdown-item" to="/classes">Classes ({classesCount})</Link>
            <Link  className="dropdown-item" to="/styles">Styles and Grades</Link>
            <Link  className="dropdown-item" to="/badges">Badges({badgesCount})</Link>
            </div>
        </li>
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  classesCount: PropTypes.number.isRequired,
  membersCount: PropTypes.number.isRequired
};

export default Header;

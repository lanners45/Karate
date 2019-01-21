import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
          classesCount={this.props.classesCount}
          membersCount={this.props.membersCount}
          badgesCount={this.props.badgesCount}
           />
        {this.props.children}
      </div>
    );
  }

}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  classesCount: PropTypes.number.isRequired,
  membersCount: PropTypes.number.isRequired,
  badgesCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    classesCount: state.classes.length,
    membersCount: state.members.length,
    badgesCount: state.badges.length
  };
}

export default connect(mapStateToProps)(App);

import React from 'react';
import{Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../actions/memberActions';
import PropTypes from 'prop-types';

class HomePage extends React.Component {
  render() {
    let allMembers = this.props.members; 
    let activeMembers = allMembers.filter(member => member.Status === 1);
    let InactiveMembers = allMembers.filter(member => member.Status === 2);
    let expiredMembers = allMembers.filter(member => member.Status === 3);

    return (
      <div>
        <div className="border">
          <div className="form-group">
            <div className="row">
            <div className="col">
            </div>
              <div className="col">
                <h3>
                  <div className="form-group">
                    <label>Members : </label>
                    <label>{allMembers.length}</label>
                  </div>
                  <div className="form-group">
                    <label>Active : </label>
                    <label>{activeMembers.length}</label>
                  </div>
                  <div className="form-group">
                    <label>Inactive : </label>
                    <label>{InactiveMembers.length}</label>
                  </div>
                  <div className="form-group">
                    <label>Expired Licenses : </label>
                    <label>{expiredMembers.length}</label>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  members: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
      members: state.members // See: reducers/index.js
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


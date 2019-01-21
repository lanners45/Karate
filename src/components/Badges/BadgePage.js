import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as badgeActions from '../../actions/badgeActions';
import BadgeList from './BadgeList';
import toastr from 'toastr';

class BadgePage extends React.Component {
  constructor(props){
     super(props);
     this.state = { classes: [] };
     this.redirectToAddBadgePage = this.redirectToAddBadgePage.bind(this);
     this.deleteBadge = this.deleteBadge.bind(this);
   }

   redirectToAddBadgePage() {
    browserHistory.push('/ManageBadgesPage');
   }

   deleteBadge(e) {
    e.preventDefault();
    let classId = e.target.id;
     this.props.actions.deleteBadge(classId)
       .then(() => this.redirect())
       .catch(error => {
         toastr.error(error);
       });
   }

   redirect(){
     toastr.success('Class deleted');
     //browserHistory.push('/manageClassPage');
   }

  render() {
    const badgeList = this.props.badges;
    return (
        <div>
          <h3>Badges</h3>
          <button type="button" className="btn btn-primary"  onClick={this.redirectToAddBadgePage}>Add</button>
          <BadgeList onDelete = {this.deleteBadge} badges={badgeList}/>
        </div>
      );
    }
}

BadgePage.propTypes = {
  badges: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

BadgePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return {
    badges: state.badges
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(badgeActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BadgePage);

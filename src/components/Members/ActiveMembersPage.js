import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../actions/memberActions';
import MemberList from './MemberList';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class ActiveMembersPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.redirectToAddMemberPage = this.redirectToAddMemberPage.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddMemberPage() {
    browserHistory.push('/member');
  }

  deleteMember(event){
    event.preventDefault();
    let courseId = event.target.id;
    this.props.actions.deleteCourse(courseId)
      .then(() => toastr.success('member deleted'))
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    const { members } = this.props;
    return (
      <div>
        <h1>Active Members</h1>
        <input
          type="submit"
          value="Add Member"
          className="btn btn-primary"
          onClick={this.redirectToAddMemberPage} />
        <MemberList members={members} onDelete={this.deleteMember} />
      </div>
    );
  }

}

ActiveMembersPage.propTypes = {
  members: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  if (state.members.length>0)
  {
    let tmp = state.members.sort(function(a, b){return a.Surname - b.Surname; });
    return {
      members: tmp
    };
  }
  else {
    return {
      members: state.members // See: reducers/index.js
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveMembersPage);

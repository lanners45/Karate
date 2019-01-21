import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as memberActions from '../../actions/memberActions';
import MemberForm from './MemberForm';
import toastr from 'toastr';

class ManageMemberPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      member: Object.assign({}, this.props.member),
      classList:  [],
      errors:{},
      saving:false
    };
    this.updateMemberState = this.updateMemberState.bind(this);
    this.SaveMember = this.SaveMember.bind(this);
  }

updateMemberState(event) {
  const field = event.target.name;
  let member = Object.assign({}, this.state.member);
  member[field] = event.target.value;
  return this.setState({member: member});
}

classFormIsValid() {
  let formIsValid = true;
  let errors = {};

  if (this.state.member.Forenames.length < 2){
    errors.className = 'Forenames must be at least 2 characters';
    formIsValid = false;
  }

  if (this.state.member.Surname.length < 2){
    errors.className = 'Surname must be at least 2 characters';
    formIsValid = false;
  }

  this.setState({errors: errors});
  return formIsValid;
}

SaveMember(event) {
  event.preventDefault();
  if (!this.classFormIsValid()) {
    return;
  }
  this.setState({saving  : true});
  this.props.actions.saveMember(this.state.member)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving : false});
    });
}

redirect(){
  this.setState({saving  : false});
  toastr.success('member saved');
  this.context.router.push('/activeMembers');
}

render() {
  let classes = this.props.classList;
  let emberDetails = this.props.member;
  return (
      <MemberForm
        member={emberDetails}
        classList={classes}
        onSave={this.SaveMember}
        onChange={this.updateMemberState}
        errors={this.state.errors}
        saving={this.state.saving}
      />
  );
  }
}

ManageMemberPage.propTypes = {
  member: PropTypes.object.isRequired,
  classList: PropTypes.array.isRequired
/*
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  saving: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object*/
};

ManageMemberPage.contextTypes = {
  router: PropTypes.object
};

function SetMemberDetails(memberId, members) {
  if (memberId >0)
  {
    return  members
      .find(e => e.MemberId == memberId);
  }
  else
  {
    return  {MemberId: '',Forenames: '', Surname: '', Address: '', TelephoneNumber: '',  MobileNumber: '', EmailAddress: '', StartDate: '', DateOfBirth: '', Notes: '', ClassId: '' };
  }
}

function mapStateToProps(state, ownProps) {
  let memberDetails = SetMemberDetails(ownProps.params.id, state.members);

  const classesFormattedForDrowndown =  state.classes.map(classObj => {
    return {
        value: classObj.classId,
        text: classObj.className
      };
    });

  return {
    member: memberDetails,
    classList: classesFormattedForDrowndown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(memberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ManageMemberPage);

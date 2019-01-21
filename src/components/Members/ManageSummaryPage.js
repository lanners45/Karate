import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as memberActions from '../../actions/memberActions';
import SummaryForm from './SummaryForm';
import toastr from 'toastr';

class ManageSummaryPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      member: Object.assign({}, this.props.member),
      classList:  []};
    this.OnClose = this.OnClose.bind(this);
  }

OnClose() {
  this.redirect();
}

redirect(){
  this.context.router.push('/activeMembers');
}

render() {
  let classes = this.props.classList;
  let emberDetails = this.props.member;
  return (
      <SummaryForm
        member={emberDetails}
        classList={classes}
        onClose={this.OnClose}
      />
  );
  }
}

ManageSummaryPage.propTypes = {
  member: PropTypes.object.isRequired,
  classList: PropTypes.array.isRequired
};

ManageSummaryPage.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps) (ManageSummaryPage);

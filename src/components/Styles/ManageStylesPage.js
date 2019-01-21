import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/classActions';
import StyleForm from './StyleForm';
import toastr from 'toastr';

class ManageStylesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      class: Object.assign({}, this.props.class),
      errors:{},
      saving:false
    };
    this.updateClassState = this.updateClassState.bind(this);
    this.saveClass = this.saveClass.bind(this);
  }

updateClassState(event) {
  const field = event.target.name;
  let classobj = Object.assign({}, this.state.class);
  classobj[field] = event.target.value;
  return this.setState({class: classobj});
}

classFormIsValid() {
  let formIsValid = true;
  let errors = {};

  if (this.state.class.className.length < 3){
    errors.className = 'Class name must be at least 3 characters';
    formIsValid = false;
  }

  this.setState({errors: errors});
  return formIsValid;
}
saveClass(event) {
  event.preventDefault();
  if (!this.classFormIsValid()) {
    return;
  }
  this.setState({saving  : true});
  this.props.actions.saveClass(this.state.class)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
      this.setState({saving : false});
    });
}

redirect(){
  this.setState({saving  : false});
  toastr.success('Class saved');
  this.context.router.push('/classPage');
}

render() {
  return (
    <StyleForm
      classObj={this.state.class}
      onChange={this.updateClassState}
      onSave={this.saveClass}
      errors={this.state.errors}
      saving={this.state.saving}
    />
  );
  }
}

ManageStylesPage.propTypes = {
  class: PropTypes.object,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object
};

ManageStylesPage.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  let classobj = {classId:'', className:''};

    return {
      class: classobj
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (ManageStylesPage);

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as classActions from '../../actions/classActions';
import ClassList from './ClassList';
import toastr from 'toastr';

class ClassPage extends React.Component {
  constructor(props){
     super(props);
     this.state = { classes: [] };
     this.redirectoAddClassPage = this.redirectoAddClassPage.bind(this);
     this.deleteClass = this.deleteClass.bind(this);
   }

   redirectoAddClassPage() {
    browserHistory.push('/manageClassPage');
   }

   deleteClass(e) {
    e.preventDefault();
    let classId = e.target.id;
     this.props.actions.deleteClass(classId)
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
    const classList = this.props.classes;
    return (
        <div>
          <h3>Classes</h3>
          <button type="button" className="btn btn-primary"  onClick={this.redirectoAddClassPage}>Add</button>
          <ClassList onDelete = {this.deleteClass} classes={classList}/>
        </div>
      );
    }
}

ClassPage.propTypes = {
  classes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ClassPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return {
    classes: state.classes
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassPage);

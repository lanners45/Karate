import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as classActions from '../../actions/classActions';
import StyleList from './StyleList';
import toastr from 'toastr';

class StylePage extends React.Component {
  constructor(props){
     super(props);
     this.state = { classes: [] };
     this.redirectToAddCStylePage = this.redirectToAddCStylePage.bind(this);
     this.deleteStyle = this.deleteStyle.bind(this);
   }

   redirectToAddCStylePage() {
    browserHistory.push('/ManageStylesPage');
   }

   deleteStyle(e) {
    e.preventDefault();
    let classId = e.target.id;
     this.props.actions.deleteClass(classId)
       .then(() => this.redirect())
       .catch(error => {
         toastr.error(error);
       });
   }

   redirect(){
     toastr.success('style deleted');
     //browserHistory.push('/manageClassPage');
   }

  render() {
    const styleList = this.props.styles;
    return (
        <div>
          <h3>Styles</h3>
          <button type="button" className="btn btn-primary"  onClick={this.redirectToAddCStylePage}>Add</button>
          <StyleList onDelete = {this.deleteClass} styles={styleList}/>
        </div>
      );
    }
}

StylePage.propTypes = {
  styles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

StylePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  console.log(state.styles);
  return {
    styles: state.styles
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StylePage);

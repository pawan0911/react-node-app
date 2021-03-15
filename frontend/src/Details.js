import { Component } from 'react';
import { connect } from 'react-redux';

import { setUser } from './reducer';
import './App.css';

class Details extends Component {
 onClickUser() {
  const { setUser, history } = this.props;
  setUser();
  history.push('/');
 }

 render() {
  const { user } = this.props;
  return (
   <>
    <button className="container p-1 m-1" onClick={() => this.onClickUser()}>
     Back
    </button>
    {Object.keys(user).length > 0 && (
     <>
      <div className="container p-1 m-1">
       <div className="row">
        <span className="col-sm">{user.id}</span>
        <span className="col-sm">{user.name}</span>
        <span className="col-sm">{user.email}</span>
        <span className="col-sm">{user.phone}</span>
        <span className="col-sm">{user.username}</span>
        <span className="col-sm">{user.website}</span>
       </div>
      </div>
     </>
    )}
   </>
  );
 }
}

const mapStateToProps = (state) => ({
 ...state,
});

const mapDispatchToProps = (dispatch) => {
 return {
  setUser: (user) => dispatch(setUser(user)),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

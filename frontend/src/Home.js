import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { getLanguages, setLanguage } from './reducer';
import './App.css';

class Home extends Component {
 async componentDidMount() {
  const { getLanguages } = this.props;
  await getLanguages();
 }

 onClickCard(langDetails) {
  const { setLanguage, history } = this.props;
  setLanguage(langDetails);
  history.push('/details');
 }

 render() {
  const { languages } = this.props;
  return (
   <div className="App m-2 p-2">
    {languages.data &&
     languages.data.length > 0 &&
     languages.data.map((lang, i) => {
      return (
       <div className="container p-1 m-1" key={lang.id}>
        <div className="row">
         <span className=".col- pr-1 mr-2">{i + 1}</span>
         <div
          className="col-sm clickAbleDiv"
          onClick={() => this.onClickCard(lang)}
         >
          <img
           src={lang.image}
           className="rounded-circle"
           alt="langImage"
           width="304"
           height="236"
          />
          {lang.languageNameNative}
         </div>
        </div>
       </div>
      );
     })}
   </div>
  );
 }
}

const mapStateToProps = (state) => ({
 ...state,
});

const mapDispatchToProps = (dispatch) => {
 return {
  getLanguages: () => dispatch(getLanguages()),
  setLanguage: (lang) => dispatch(setLanguage(lang)),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

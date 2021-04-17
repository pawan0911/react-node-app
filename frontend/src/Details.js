import { Component } from 'react';
import { connect } from 'react-redux';

import { setLanguage } from './reducer';
import './App.css';

class Details extends Component {
 onClickLanguage() {
  const { setLanguage, history } = this.props;
  setLanguage();
  history.push('/');
 }

 render() {
  const { language } = this.props;

  return (
   <>
    <button
     className="container p-1 m-1"
     onClick={() => this.onClickLanguage()}
    >
     Back
    </button>
    {Object.keys(language).length > 0 && (
     <>
      <div className="container p-1 m-1">
       <img
        src={language.image}
        className="img-rounded col"
        alt="langImage"
        width="304"
        height="236"
       />
       <div className="row">
        <span className="col-sm">
         Native Name: {language.languageNameNative}
        </span>
        <span className="col-sm">
         EngLish Name: {language.languageNameEnglish}
        </span>
        <span className="col-sm">State: {language.statae}</span>
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
  setLanguage: (lang) => dispatch(setLanguage(lang)),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

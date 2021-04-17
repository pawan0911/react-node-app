import axios from 'axios';

export const SET_LANGUAGES = 'SET_LANGUAGES';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export function setLanguages(langs) {
 return {
  type: SET_LANGUAGES,
  payload: langs,
 };
}

export function setLanguage(lang = {}) {
 return {
  type: SET_LANGUAGE,
  payload: lang,
 };
}

export const getLanguages = () => {
 return (dispatch) => {
  return axios({
   url: `http://localhost:9000/`,
   headers: {
    'Content-Type': 'application/json',
   },
   method: 'get',
   responseType: 'json',
  })
   .then((response) => {
    dispatch(setLanguages(response.data));
   })
   .catch((err) => {});
 };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { languages: [], language: {} }, action) => {
 switch (action.type) {
  case SET_LANGUAGES:
   return {
    ...state,
    languages: action.payload,
   };
  case SET_LANGUAGE:
   return {
    ...state,
    language: action.payload,
   };
  default:
   return state;
 }
};

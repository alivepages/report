import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import register from './Register';
import modal from './Modal';
import tabs from './Tabs';
import multiselect from './Multiselect';
import imageUpload from './ImageUpload';
import recaptcha from './Recaptcha';
import globals from './Globals';
import loadCandidate from './Candidate';
import jobType from './Vacant'

const rootReducer = combineReducers({
    form: formReducer,
    globals,
    register,
    modal,
    tabs,
    multiselect,
    imageUpload,
    recaptcha,
    loadCandidate,
    jobType
});

export default rootReducer;
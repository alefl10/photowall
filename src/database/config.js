import * as firebase from 'firebase';
import config from './private';

firebase.initializeApp(config);

const database = firebase.database();

export default database;

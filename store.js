import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

// Firebaseの初期化
let donfig = {
   
}

let fireapp;
try {
    firebase.initializeApp(config);
}catch(error){
    console.log(error.message)
}
export default firebase;

// ステート初期化
const initial = {
}

// レデユーサー（ダミー）
function fireReducer(state = initial,action){
    switch(action.type){
          // 計算実行
        case'TESTACTION':
            return state;
        default:
            return state;
    }
}

// iniStore関数
export function initStore(state = initial){
    return createStore(fireReducer,state,
        applyMiddleware(thunkMiddleware))
}
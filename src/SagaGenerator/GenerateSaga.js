const GenerateSaga = (entityName) =>
{
    return `
        import { put,call } from 'redux-saga/effects'
        import getBaseURL from '../selectors.js'
        import {getUserDetails,putUserDetails}  from '../endPoints/userDetails'

        export function* onAdd({payload}) {
        // use the call Effect
        // yield call(delay, 1000)
        try {
          console.log("in saga onADD");
          //console.log(getBaseURL);
          //const baseUrl = yield select(getBaseURL)
          let reqBody = {
            ...payload.data,
          }
          // const res = yield call (fetch,"http://localhost:3000/employee-data/",
          // {method : "POST",body : JSON.stringify(payload.data),
          // headers : {'Content-Type' : 'application/json'}});

          const res = yield call(getUserDetails,getBaseURL,reqBody);
          // console.log("res..",res);
          
          // const result = yield res.json();
          // yield put({ type: 'INSERT_EMPLOYEE' ,value : result})
        }
        catch (error) {
          console.log(error);
        }
        };
        
        export function* onEdit({payload}) {
            // use the call Effect
            // yield call(delay, 1000)
            try {
             let reqBody = {
                ...payload.data,
              }
              const res = yield call(putUserDetails,getBaseURL,reqBody);
            }
            catch (error) {
            console.log(error);
            }
        };
        
        export function* onGet() {
            // use the call Effect
            // yield call(delay, 1000)
            try{
            yield put({ type: 'GET_${entityName.toUpperCase()}' ,value : 1})
            }
            catch (error) {
            console.log(error);
            }
        };`
}

const GenerateSagaIndex = (entityName) =>
{
    return `import { takeLatest} from 'redux-saga/effects'
    // Imports: Redux Sagas
    import { onAdd, onEdit ,onGet} from './${entityName.toLowerCase()}Saga';
    import * as actionTypes from "../actions/actionTypes";

    // Redux Saga: Root Saga
    export function* rootSaga () {
        console.log("im in saga root function..");
    
    yield takeLatest(actionTypes.ADD_${entityName.toUpperCase()}, onAdd)
    yield takeLatest(actionTypes.EDIT_${entityName.toUpperCase()}, onEdit)
    yield takeLatest(actionTypes.GET_${entityName.toUpperCase()}, onGet)

    // yield all([
    //     fork(onAdd),
    //     fork(onEdit),
    //     fork(onGet)
    // ]);
    };`
}

module.exports = {GenerateSaga,GenerateSagaIndex};
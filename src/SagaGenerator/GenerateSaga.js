const GenerateSaga = (entityName) =>
{
    return `
        import { put,call } from 'redux-saga/effects'

        export function* onAdd({payload}) {
        // use the call Effect
        // yield call(delay, 1000)
        try {
          console.log("in saga onADD");
          const res = yield call (fetch,"https://jsonplaceholder.typicode.com/posts1/");
          const result = yield res.json();
          yield put({ type: 'INSERT_${entityName.toUpperCase()}' ,value : result})
        }
        catch (error) {
          console.log(error);
        }
        };
        
        export function* onEdit() {
            // use the call Effect
            // yield call(delay, 1000)
            try {
            yield put({ type: 'EDIT_${entityName.toUpperCase()}' ,value : 1 })
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
const GenerateSaga = (entityName) =>
{
    return `
        import { put } from 'redux-saga/effects'

        export function* onAdd() {
        // use the call Effect
        // yield call(delay, 1000)
        try {
          console.log("in saga onADD");
          
          yield put({ type: 'ADD_${entityName.toUpperCase()}' ,value : 1})
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
    return `import { all, fork} from 'redux-saga/effects'
    // Imports: Redux Sagas
    import { onAdd, onEdit ,onGet} from './saga';
    // Redux Saga: Root Saga
    export function* rootSaga () {
        console.log("im in saga root function..");
        
    yield all([
        fork(onAdd),
        fork(onEdit),
        fork(onGet)
    ]);
    };`
}

module.exports = {GenerateSaga,GenerateSagaIndex};
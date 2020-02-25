const GenerateCombineReducerIndex = () => {
return ``

}
const GenerateReducerIndex = (reducerNames) => {
return `
import { combineReducers } from 'redux'
import ${reducerNames} from './${reducerNames}' \n;

const rootReducer = combineReducers({
    ${reducerNames},
});

export default rootReducer;


`
}


const GenerateReducer = (entityName) =>{

    return `
    import * as actionTypes from './actionTypes'
    export const add${entityName} = (data) => {
    return {
        type: actionTypes.ADD_${entityName.toUpperCase()},
        data
    }
}

export const edit${entityName} = (data) => {
    return {
        type: actionTypes.EDIT_${entityName.toUpperCase()},
        data
    }
}   

export const get${entityName} = (data) => {
    return {
        type: actionTypes.GET_${entityName.toUpperCase()},
        data
    }
}
    `
}




    module.exports = {GenerateReducerIndex,GenerateReducer};
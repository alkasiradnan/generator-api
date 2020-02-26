const GenerateActionsIndex = (actionNames,entityName) => {
return `export {add${entityName},edit${entityName},get${entityName}} from "./${actionNames}" \n`
}


const GenerateActions = (entityName) =>{

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
export default {add${entityName},edit${entityName},get${entityName}};  `
}


const GenerateConstantFile = (entityName) =>{
    return `
        export const ADD_${entityName.toUpperCase()} = "ADD_${entityName.toUpperCase()}" 
        export const EDIT_${entityName.toUpperCase()} = "EDIT_${entityName.toUpperCase()}" 
        export const GET_${entityName.toUpperCase()} = "GET_${entityName.toUpperCase()}" 
    `
    
    }


    module.exports = {GenerateActionsIndex,GenerateActions,GenerateConstantFile};
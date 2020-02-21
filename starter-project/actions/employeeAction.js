
    import * as actionTypes from './actionTypes'
    export const addEmployee = (data) => {
    return {
        type: actionTypes.ADD_EMPLOYEE,
        data
    }
}

export const editEmployee = (data) => {
    return {
        type: actionTypes.EDIT_EMPLOYEE,
        data
    }
}   

export const getEmployee = (data) => {
    return {
        type: actionTypes.GET_EMPLOYEE,
        data
    }
}
    

const GenerateReducers = (entityName) =>{

        return `
        import * as actionTypes from '../actions/actionTypes'

        export default (state, action) => {      
            switch (action.type) {
                case actionTypes.ADD_${entityName.toUpperCase()}:
                    return {
                        ...state,
                        errors: action.error ? action.payload.errors : null,
                        add${entityName}: action.payload
                    };
                case actionTypes.EDIT_${entityName.toUpperCase()}:
                    return {
                        ...state,
                        errors: action.error ? action.payload.errors : null,
                        edit${entityName}: action.payload
                    };
                case actionTypes.GET_${entityName.toUpperCase()}:
                    return {
                        ...state,
                        errors: action.error ? action.payload.errors : null,
                        get${entityName}:: action.payload
                    };
                           
                default:
                    return state;
            }
          };`
}

module.exports = {GenerateReducers};
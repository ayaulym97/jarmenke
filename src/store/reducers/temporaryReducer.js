const initialState = {
 
};
const temporaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEMPORARY':
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    default:
      return state;
  }
};
export default temporaryReducer;

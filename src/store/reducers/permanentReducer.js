const initialState = {
  user: {},
  token: '',
  isLaunched: false,
  city: 'Алматы',
  cities: [
    {label: 'Алматы', value: 'almaty'},
    {label: 'Нур-Султан', value: 'nursultan'},
  ],
};
const permanentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PERMANENT': //user,token
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case 'ALREADY_LAUNCHED':
      return {
        ...state,
        isLaunched: true,
      };
    case 'PROFILE_SAVED':
      return {
        ...state,
        token: action.token,
        user: action.user,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        token: '',
      };

    default:
      return state;
  }
};
export default permanentReducer;

const initialState = {
  login: ''
};

const setLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_LOGIN': {
      const newLogin = action.payload;

      return {
        login: newLogin
      };
    }

    default:
      return state;
  }
};

export default setLoginReducer;

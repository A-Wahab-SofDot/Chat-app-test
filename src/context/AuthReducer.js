function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "FAILL":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      sessionStorage.removeItem("user");
      return { ...state, user: null };
    default:
      return state;
  }
}

export default AuthReducer;

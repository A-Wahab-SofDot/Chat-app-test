export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN" });
  dispatch({ type: "SUCCESS", payload: userCredential });
};
export const logoutCall = async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

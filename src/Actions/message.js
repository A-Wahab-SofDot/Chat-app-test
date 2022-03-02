import {
  GET_MESSAGES,
  MESSAGES_LOADING,
  SET_NEW_MESSAGE,
  SET_PAGE,
} from "../ActionTypes/message";

const paginationSize = 25;
export const getMessages = (payload) => async (dispatch) => {
  dispatch({
    type: MESSAGES_LOADING,
  });
  const allMessages = JSON.parse(localStorage.getItem("messages")) || [];
  const messages = allMessages.slice(-payload.pageIndex * paginationSize) || [];
  dispatch({
    type: GET_MESSAGES,
    payload: messages,
    totalMessages: allMessages.length,
    totalPages: Math.ceil(allMessages.length / paginationSize),
  });
};
export const setPage = (page) => async (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: page,
  });
};

export const setNewMessage = (message) => async (dispatch) => {
  const allMessages = JSON.parse(localStorage.getItem("messages")) || [];
  allMessages.push(message);
  localStorage.setItem("messages", JSON.stringify(allMessages));
  dispatch({
    type: SET_NEW_MESSAGE,
    payload: message,
    totalMessages: allMessages.length,
    totalPages: Math.ceil(allMessages.length / paginationSize),
  });
};

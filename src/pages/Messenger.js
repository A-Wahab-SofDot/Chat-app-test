import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { getMessages, setNewMessage, setPage } from "../Actions/message";
import Chat from "../components/Chat";
import MessageForm from "../components/MessageForm";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  messenger: {
    height: "calc(80vh)",
    display: "flex",
  },

  chatBox: {
    flex: "1",
  },

  chatBoxWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    padding: "10px",
    height: "100%",
  },

  chatBoxTop: {
    height: "100%",
    overflowY: "scroll",
    paddingRight: "10px",
  },

  chatBoxBottom: {
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  chatMenuWrapper: {
    padding: "10px",
    height: "100%",
  },

  noConversationText: {
    position: "absolute",
    top: "10%",
    fontSize: "20px",
  },
});

function MessengerPage({
  messages,
  loading,
  getAllMessages,
  pageIndex,
  totalPages,
  setMessagesPage,
  setArrivingMessage,
}) {
  const classes = useStyles();
  const scrollRef = useRef(null);
  const { user } = useContext(AuthContext);
  const channel = new BroadcastChannel("app-data");
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMore = () => {
    setLoadingMore(true);
    setMessagesPage(pageIndex + 1);
  };
  useEffect(() => {
    channel.onmessage = (event) => {
      setArrivingMessage(event.data);
    };
  }, []);
  useEffect(() => {
    const payload = {
      pageIndex,
    };
    getAllMessages(payload);
  }, [getAllMessages, pageIndex]);

  return (
    <div>
      {loading && user ? (
        <p>Loading</p>
      ) : (
        <div className={classes.messenger}>
          <div className={classes.chatBox}>
            <div className={classes.chatBoxWrapper}>
              <div className={classes.chatBoxTop}>
                {pageIndex < totalPages ? (
                  <Button onClick={loadMore}>Show More</Button>
                ) : (
                  ""
                )}
                {messages.length ? (
                  messages.map((m, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index} ref={scrollRef}>
                      <Chat message={m} own={m.author === user.name} />
                    </div>
                  ))
                ) : (
                  <span className={classes.noConversationText}>
                    Start New Converstation
                  </span>
                )}
              </div>
              <div className={classes.chatBoxBottom}>
                <MessageForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  loading: state.messages.loading,
  pageIndex: state.messages.pageIndex,
  totalMessages: state.messages.totalMessages,
  totalPages: state.messages.totalPages,
});
const mapDispatchToProps = (dispatch) => ({
  getAllMessages: (payload) => dispatch(getMessages(payload)),
  postNewMessage: (message) => dispatch(postMessage(message)),
  setMessagesPage: (page) => dispatch(setPage(page)),
  setArrivingMessage: (message) => dispatch(setNewMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessengerPage);

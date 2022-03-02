import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import UserAddModal from "./components/UserAddModal";
import { AuthContext } from "./context/AuthContext";
import MessengerPage from "./pages/Messenger";

function App() {
  const { user } = React.useContext(AuthContext);
  return (
    <>
      <Header />
      <div className="contentContainer">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Container>
                {user ? <MessengerPage /> : <UserAddModal />}
              </Container>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

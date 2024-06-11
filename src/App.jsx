import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import SignUp from "./Pages/SignUp";
import withAuth from "./middleware";

const AuthenticatedChat = withAuth(Chat);
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<AuthenticatedChat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

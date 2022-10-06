import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import UserProvider from './hooks/userProvider'
function App() {
  return (
    <div className="container">
     <UserProvider >
      <Router>
        <Routes>
          
          <Route path="/" element={ <Login/>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          
        </Routes>
      </Router>
     </UserProvider>
    </div>
  );
}
export default App;

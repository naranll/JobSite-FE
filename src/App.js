import './styles/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import JobBoard from "./applicant/JobBoard";
import Dashboard from "./employer/Dashboard";
import ErrorPage from './pages/ErrorPage';
import Register from "./pages/Register";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={ <Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/applicant" element={<JobBoard />}/>
        <Route path="/employer" element={<Dashboard />}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

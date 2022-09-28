import { ref, child, get } from "firebase/database";
import { db } from "./firebase/firebaseConfig";
import { AuthContextProvider } from './context/AuthContext';

import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home/home";
// import Booking from "./components/Booking/booking";
// import About from "./components/About/about";
// import Contact from "./components/Contact/contact";
import Login from './components/Login/login';
import Register from './components/Register/register';
import ForgotPwd from './components/ForgotPwd/forgotPwd';

function App() {
  
  return (
    <div className="App">
    <AuthContextProvider>       
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/Booking" element={<Booking />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPwd" element={<ForgotPwd />} />
      </Routes>
    </AuthContextProvider> 
    </div>            
  );
}
export default App;
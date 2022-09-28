import { ref, child, get } from "firebase/database";
import { db } from "./firebase/firebaseConfig";
import { AuthContextProvider } from './context/AuthContext';

import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home/home";
import Booking from "./components/Booking/booking";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Login from './components/Login/login';
import Register from './components/Register/register';
import ForgotPwd from './components/ForgotPwd/forgotPwd';
import ResetPwd from './components/ResetPwd/resetPwd';

function App() {
  // const dbRef = ref(database);
  // get(child(dbRef, `places`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });
  
  return (
    <div className="App">
    <AuthContextProvider>       
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPwd" element={<ForgotPwd />} />
        <Route path="/ResetPwd" element={<ResetPwd />} />
      </Routes>
    </AuthContextProvider> 
    </div>            
  );
}
export default App;
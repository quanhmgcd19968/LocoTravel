import { ref, child, get } from "firebase/database";
import { db } from "./firebase/firebaseConfig";
import { AuthContextProvider } from './context/AuthContext';

import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home/home";
import Login from './components/Login/login';
import Register from './components/Register/register';
import ForgotPwd from './components/ForgotPwd/forgotPwd';
import Products from './components/Admin/products';
import Users from './components/Admin/users';
import UpdateUser from './components/Admin/updateUser';
import UpdateProd from './components/Admin/updateProd';

function App() {
  
  return (
    <div className="App">
    <AuthContextProvider>       
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPwd" element={<ForgotPwd />} />
        {/* admin routes */}
        <Route path="/Admin/products" element={<Products />} />
        <Route path="/Admin/products/updateProduct" element={<UpdateProd />} />
        <Route path="/Admin/users" element={<Users />} />
        <Route path="/Admin/users/updateUser" element={<UpdateUser />} />

      </Routes>
    </AuthContextProvider> 
    </div>            
  );
}
export default App;
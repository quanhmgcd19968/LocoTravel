import { ref, child, get } from "firebase/database";
import { database } from "./firebase/config";
// import Login from './components/Login/login';

function App() {
  const dbRef = ref(database);
  get(child(dbRef, `places`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  
  return (
    <App />
  )
}
export default App;
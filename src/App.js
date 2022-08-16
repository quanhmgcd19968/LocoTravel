import { getDatabase, ref, child, get, set } from "firebase/database";
import { database} from "firebase/firebase-app";
import './App.css';
import Login from './components/Login/login';

function App() {
  const dbRef = ref(database);
  get(child(dbRef, `places/1`)).then((snapshot) => {
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
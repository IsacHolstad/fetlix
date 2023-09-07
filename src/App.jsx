import './index.css'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import AdminProfilesBtn from "./components/not-shared/AdminProfilesBtn.jsx";
import {Link, Router} from "react-router-dom";


function App() {

  return (
    <>
      <Router/>
        <Link to="/home">home</Link>
    </>
  )
}

export default App

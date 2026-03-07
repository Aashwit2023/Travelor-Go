import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Trekking from './components/Trekking'
import Expeditions from './components/Expeditions'
import UserDataForm from './components/UserDataForm'
// import Trekking_info1 from './components/Trekking_cards/Trekking_info1'

export default function App() {
  return (
    <> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/enquire" element={<UserDataForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trekking" element={<Trekking />} />
        <Route path="/expeditions" element={<Expeditions />} />

        {/* <Route path="/trekking_info1" element={<Trekking_info1 />} /> */}
      </Routes>
    </> 
  )
}

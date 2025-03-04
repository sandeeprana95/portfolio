import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout';
import Works from './components/Works';
import Resume from './components/Resume';
import Contact from "./components/Contact"

const App=()=>{
  return(
   <BrowserRouter>
   <Routes element={<Layout/>}>
    <Route path='/' element={<Resume/>} />
    <Route path="/contact" element={<Contact/>}  />
    <Route path="/works" element={<Layout><Works/></Layout>}  />
   </Routes>
   
   </BrowserRouter>
   

  )
}

export default App
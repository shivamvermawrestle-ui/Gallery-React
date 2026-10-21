import { Link, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Nature from "../Pages/Nature"
import Travel from "../Pages/Travel"
import Urban from "../Pages/Urban"
import Architecture from "../Pages/Architecture"
import Gallery from "../Pages/Gallery"

const Navbar = () => {
  return (
    
        <>

      <nav className="flex  items-center justify-between py-4 px-8 z-100 sticky top-0 bg-white/20 shadow-lg backdrop-blur-md">
        <h1 className="text-xl font-bold" >Gallery</h1>
<ul className="flex items-center gap-4 ">
    <Link to="/" className="list-none text-md text-gray-600">Home</Link>
    <Link to="/gallery/nature"className="list-none text-md text-gray-600">Nature</Link>
    <Link to="/gallery/urban" className="list-none text-md text-gray-600">Urban</Link>
    <Link to="/gallery/travel" className="list-none text-md text-gray-600">Travel</Link>
    <Link to="/gallery/architecture"  className="list-none text-md text-gray-600">Architecture</Link>
</ul>
      </nav>
<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/nature" element={<Nature/>}/>
  <Route path="/travel" element={<Travel/>}/>
  <Route path="/urban" element={<Urban/>}/>
  <Route path="/architecture" element={<Architecture/>}/>
  <Route path="/gallery/:category" element={<Gallery />}
      />


</Routes>
   


       
    </>

  )
}

export default Navbar

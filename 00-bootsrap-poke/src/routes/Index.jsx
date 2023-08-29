import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import PockemonDetails from '../Pages/PockemonDetails'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Pokemon'  element= {<PockemonDetails />}/>
    </Routes>
  )
}

export default RoutesIndex
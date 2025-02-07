import {Box} from '@chakra-ui/react'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NavBar from './components/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Box minH={'100vh'}>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App

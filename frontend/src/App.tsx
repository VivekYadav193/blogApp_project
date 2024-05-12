import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'



import './App.css'
import AppBar from './components/AppBar'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import PublishBlog from './pages/Publish'


function App() {

  return (
    <div>


      <BrowserRouter>

        <AppBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blogs/:id' element={<BlogPage />} />
          <Route path='/publish' element={<PublishBlog />} />


        </Routes>


      </BrowserRouter>

    </div>
  )
}

export default App

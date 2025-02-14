import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/home/HomePage'
import AboutProgramPage from './pages/about-program/AboutProgramPage'
import AboutUsPage from './pages/about-us/AboutUsPage'
import ContactUsPage from './pages/contact-us/ContactUsPage'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='about-program' element={<AboutProgramPage />} />
      <Route path='about-us' element={<AboutUsPage />} />
      <Route path='contact-us' element={<ContactUsPage />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

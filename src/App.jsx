import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/router'
import 'swiper/css';
import 'swiper/css/pagination';
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

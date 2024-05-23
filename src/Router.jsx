import { Routes, Route } from 'react-router-dom'
import Adm from './page/Adm'
import Audio from './page/Audio'
import Video from './page/Video'
import App from './App'
import StoreFile from './adm/StoreFile'
import Login from './page/Login'
import Meditacao from './page/Meditacao'
import Hipinose from './page/Hipinose'
import Respiracao from './page/Respiracao'

function AllRouter() {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="/audio" element={<Audio />} />
      <Route path="/video" element={<Video />} />
      <Route path="/adm" element={<Adm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/meditacao" element={<Meditacao />} />
      <Route path="/hipinose" element={<Hipinose />} />
      <Route path="/respiracao" element={<Respiracao />} />

      <Route path='/store' element={<StoreFile />} />
    </Routes>
  )
}

export default AllRouter
import { Routes, Route } from "react-router-dom"
import 'reactjs-popup/dist/index.css'
import Header from './components/Header/Header'
import Movies from './pages/Movies/Movies'
import Starred from './pages/Starred/Starred'
import WatchLater from "./pages/WatchLater/WatchLater"
import './app.scss'
import { VideoTrailer } from './components/VideoTrailer'

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <VideoTrailer />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App

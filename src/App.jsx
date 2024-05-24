import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import './App.css'
import NowPlaying from './component/NowPlaying';
import Popular from './component/Popular';
import TopRated from './component/TopRated';
import Upcoming from './component/Upcoming';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Detailpage from './component/Detailpage';
import NotFoundPage from './component/NotFoundPage';



function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/nowplaying" element={<NowPlaying/>}></Route>
        <Route path="/popular" element={<Popular/>}></Route>
        <Route path="/toprated" element={<TopRated/>}></Route>
        <Route path="/upcoming" element={<Upcoming/>}></Route>
        <Route path='/detail/:title' element={<Detailpage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

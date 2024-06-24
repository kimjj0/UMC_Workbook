import { Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import './App.css'
import NowPlaying from './component/NowPlaying';
import Popular from './component/Popular';
import TopRated from './component/TopRated';
import Upcoming from './component/Upcoming';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Detailpage from './component/Detailpage';
import SignUpPage from './component/SignUpPage';
import NotFoundPage from './component/NotFoundPage';
import styled from 'styled-components';
import LoginPage from './component/LoginPage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

function App() {

  return (
    <AppContainer>
      <Header/>
      <MainContent>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/nowplaying" element={<NowPlaying/>}></Route>
          <Route path="/popular" element={<Popular/>}></Route>
          <Route path="/toprated" element={<TopRated/>}></Route>
          <Route path="/upcoming" element={<Upcoming/>}></Route>
          <Route path='/movie/:id' element={<Detailpage/>}></Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
      </MainContent>
      <Footer/>
    </AppContainer>
  )
}

export default App

import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 10vh;
  padding: 0 20px;
  align-items: center;
  background-color: #171B39;
  position: fixed;
  z-index: 999;
  color: white;
  box-shadow: 0px 15px 40px #171B39;
`
const Title = styled.div`
  font-size: large;
  font-weight: bold;
`

const Menu = styled.div`
  display: flex;
  > div {
    margin-left: 20px;
    cursor: pointer;
    &:hover {
      font-size: large;
      font-weight: bold;
    }
  }
`

const Header = () => {

  const navigate = useNavigate();
  const goSignUpPage = () => {
    // if(document.getElementsByClassName('signin')[0].textContent == "로그인"){
    //   document.getElementsByClassName('signin')[0].textContent = '로그아웃'
    // }else{
    //   document.getElementsByClassName('signin')[0].textContent = '로그인'
    // }
    navigate('/signup');
  }
  const handleNavigation = (path) => {
    navigate(path);
  }

  const menuItems = [
    { name: 'Login', path: '/login' },
    { name: 'Popular', path: '/popular' },
    { name: 'Top Rated', path: '/toprated' },
    { name: 'Now Playing', path: '/nowplaying' },
    { name: 'Upcoming', path: '/upcoming' }
  ]  

  return (

      <HeaderContainer>
        <Title className='' onClick={()=>handleNavigation('/')}>UMC Movie</Title>
        <Menu>
          {menuItems.map((item) => (
            <div key={item.name} onClick={() => handleNavigation(item.path)}>
              {item.name}
            </div>
          ))}
        </Menu>
      </HeaderContainer>

  )
}

export default Header
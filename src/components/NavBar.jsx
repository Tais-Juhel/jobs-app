import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NavBar() {
  return (
    <NavWrapper>
      <div>
        <NavLink to="/">Échanges</NavLink>
        <NavLink to="/statistics">Statistiques</NavLink>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 10px lightgray;
`

const NavLink = styled(Link)`
  margin-right: 30px;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
`

export default NavBar

import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NavBar() {
  return (
    <StyledNavWrapper>
      <div>
        <StyledLink to="/">Échanges</StyledLink>
        <StyledLink to="/statistics">Statistiques</StyledLink>
      </div>
    </StyledNavWrapper>
  )
}

const StyledNavWrapper = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 10px lightgray;
`

const StyledLink = styled(Link)`
  margin-right: 30px;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
`

export default NavBar

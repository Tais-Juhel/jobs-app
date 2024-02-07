import styled from 'styled-components'
import ExchangeCard from '../../components/ExchangeCard'
import { Link } from 'react-router-dom'

function Exchanges() {
  return (
    <div>
      <StyledAddLink to="/exchange/form">Ajouter +</StyledAddLink>
      <ExchangeCard />
    </div>
  )
}

const StyledAddLink = styled(Link)`
  padding: 10px 10px;
  color: white;
  background-color: black;
  font-weight: bold;
`

export default Exchanges

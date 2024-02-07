import styled from 'styled-components'

function ExchangeCard() {
  return (
    <StyledWrapper>
      <StyledFrame></StyledFrame>
      <StyledInfo>
        <h5>Entreprise</h5>
        <span>
          <strong>Étape:</strong> 1er contact
        </span>
        <span>
          <strong>Date:</strong> 01/01/2024
        </span>
      </StyledInfo>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  border: 1px solid black;
`

const StyledFrame = styled.div`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  border-radius: 40px;
  background-color: black;
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  height: 80px;

  h5 {
    font-size: 16px;
    font-weight: bold;
  }
  span {
    font-size: 12px;
    margin-top: 5px;
    color: #767676;
  }
`

export default ExchangeCard

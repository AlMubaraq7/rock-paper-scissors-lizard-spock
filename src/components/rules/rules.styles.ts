import styled from "styled-components"

export const Button = styled.button`
  color: whitesmoke;
  background-color: transparent;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  letter-spacing: 2px;
  border: 1px solid whitesmoke;
  border-radius: 7px;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    bottom: 0.5rem;
    right: 50%;
    transform: translate(50%);
  }
`
export const RulesOverlay = styled.div<{ $active?: boolean }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(20, 21, 57, 0.8);
  display: ${props => (props.$active ? "block" : "none")};
  @media only screen and (max-width: 768px) {
    height: 10vh;
  }
`
export const RulesContainer = styled.div`
  width: 350px;
  height: 400px;
  border-radius: 7px;
  padding: 0.5rem 1.5rem;
  margin: 6rem auto;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
`
export const RulesTextBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const RulesText = styled.span`
  font-size: 30px;
  color: var(--dark-text);
  font-weight: 700;
  text-transform: uppercase;
`
export const RulesCloseContainer = styled.div`
  width: 30px;
  cursor: pointer;
`
export const RulesClose = styled.img`
  object-fit: cover;
`
export const RulesImgBox = styled.div`
  flex: 4;
`

export const RulesImg = styled.img`
  object-fit: cover;
`

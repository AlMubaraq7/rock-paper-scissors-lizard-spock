import styled from "styled-components"
export const Container = styled.div`
  width: 55%;
  height: min-content;
  border-radius: 20px;
  border: 2px solid var(--header);
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
  @media only screen and (max-width: 640px) {
    width: 400px;
  }
  @media only screen and (max-width: 480px) {
    width: 300px;
  }
`
export const FlexBox = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 0.75rem 1.25rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 0.5rem 1rem;
  }
`
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Title = styled.span`
  color: whitesmoke;
  text-transform: uppercase;
  line-height: 0.85;
  font-weight: 400;
  font-size: 30px;
  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 22px;
  }
`
export const ScoreBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ScoreContainer = styled.div`
  width: 50%;
  height: min-content;
  background-color: whitesmoke;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`
export const ScoreTitle = styled.span`
  color: var(--score-text);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 400;
  flex: 2;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`
export const ScoreValue = styled.span`
  display: inline;
  color: var(--dark-text);
  font-size: 60px;
  font-weight: 700;
  flex: 1;
  @media only screen and (max-width: 768px) {
    font-size: 55px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 52px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 40px;
  }
`

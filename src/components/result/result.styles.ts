import { styled, keyframes } from "styled-components"
import { Link } from "react-router-dom"
export const Container = styled.div`
  display: flex;
  gap: 5rem;
  width: 65%;
  @media only screen and (max-width: 768px) {
    gap: 2rem;
    width: 100%;
  }
  @media only screen and (max-width: 640px) {
    gap: 0.75rem;
    width: 115%;
  }
  @media only screen and (max-width: 480px) {
    gap: 0rem;
    width: 335px;
  }
`
export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    gap: 1.25rem;
  }
  @media only screen and (max-width: 640px) {
    gap: 1rem;
  }
  @media only screen and (max-width: 480px) {
    gap: 1.25rem;
  }
`
export const fadeInOut = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
  `

export const Empty = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(20, 23, 58, 0.4);
  align-self: center;
  animation: ${fadeInOut} infinite 1s alternate;
  @media only screen and (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
  @media only screen and (max-width: 640px) {
    width: 150px;
    height: 150px;
  }
  @media only screen and (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`

export const Text = styled.span`
  text-align: center;
  letter-spacing: 3px;
  font-size: 22px;
  text-transform: uppercase;
  color: whitesmoke;
  font-weight: 600;
  white-space: nowrap;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 11px;
    letter-spacing: 2px;
  }
`
export const StatusBox = styled(Box)`
  flex: 2;
  gap: 0.5rem;
  @media only screen and (max-width: 768px) {
    flex: 1;
  }
  @media only screen and (max-width: 480px) {
    flex: 1;
  }
`
export const Status = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  color: whitesmoke;
  letter-spacing: 1px;
  font-size: 50px;
  text-align: center;
  margin-top: 6rem;
  white-space: nowrap;
  @media only screen and (max-width: 768px) {
    margin-top: 4rem;
    font-size: 45px;
  }
  @media only screen and (max-width: 640px) {
    margin-top: 3rem;
    font-size: 40px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 10rem;
    font-size: 35px;
  }
`
export const StatusLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  background-color: whitesmoke;
  color: var(--dark-text);
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  border-radius: 7px;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0.5rem 0.75rem;
  }
  @media only screen and (max-width: 640px) {
    font-size: 14px;
    padding: 0.5rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    padding: 0.5rem 0.75rem;
    white-space: nowrap;
  }
`
export const PickContainer = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  padding: 50px;
  border: 30px solid transparent;
  box-shadow: inset 0px 4px 1px hsl(0, 0%, 72%);
  align-self: center;
  @media only screen and (max-width: 768px) {
    width: 180px;
    height: 180px;
    border: 25px solid transparent;
    padding: 35px;
  }
  @media only screen and (max-width: 640px) {
    width: 150px;
    height: 150px;
    border: 20px solid transparent;
    padding: 35px;
  }
  @media only screen and (max-width: 480px) {
    width: 110px;
    height: 110px;
    border: 15px solid transparent;
    padding: 28px;
  }
`
export const PickImg = styled.img`
  object-fit: cover;
  transform: scale(1.5);
`
export const ScissorsGrad = styled(PickContainer)`
  background: linear-gradient(to bottom, lightgray, white), var(--scissors);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`
export const PaperGrad = styled(PickContainer)`
  background: linear-gradient(to bottom, lightgray, white), var(--paper);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`

export const RockGrad = styled(PickContainer)`
  background: linear-gradient(to bottom, lightgray, white), var(--rock);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 60px;
  @media only screen and (max-width: 768px) {
    padding: 40px;
  }
  @media only screen and (max-width: 480px) {
    padding: 30px;
  }
`
export const LizardGrad = styled(PickContainer)`
  background: linear-gradient(to bottom, lightgray, white), var(--lizard);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`
export const SpockGrad = styled(PickContainer)`
  background: linear-gradient(to bottom, lightgray, white), var(--spock);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 50px 60px;
  @media only screen and (max-width: 768px) {
    padding: 35px 45px;
  }
  @media only screen and (max-width: 640px) {
    padding: 35px 40px;
  }
  @media only screen and (max-width: 480px) {
    padding: 23px 28px;
  }
`

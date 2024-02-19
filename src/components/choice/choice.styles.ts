import styled from "styled-components"
import { Link } from "react-router-dom"
export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`
export const PentagonImg = styled.img`
  position: absolute;
  align-self: center;
  @media only screen and (max-width: 768px) {
    max-width: 50%;
  }
  @media only screen and (max-width: 640px) {
    max-width: 280px;
  }
  @media only screen and (max-width: 480px) {
    max-width: 250px;
  }
`
export const ResultLink = styled(Link)`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  padding: 20px;
  border: 20px solid transparent;
  box-shadow: inset 0px 4px 1px hsl(0, 0%, 72%);
  position: absolute;
  left: 50%;
  cursor: pointer;
  transition: transform 200ms linear;
  @media only screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
    border: 15px solid transparent;
    padding: 18px;
  }
  @media only screen and (max-width: 640px) {
    width: 110px;
    height: 110px;
    border: 13px solid transparent;
    padding: 14px;
  }
  @media only screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
    padding: 20px;
    border: 12px solid transparent;
  }
`
export const PickImg = styled.img`
  object-fit: cover;
`
export const ScissorsGrad = styled(ResultLink)`
  background: linear-gradient(to bottom, lightgray, white), var(--scissors);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  transform: translate(-45%, -30%);
  &:hover {
    transform: translate(-45%, -35%);
  }
`
export const PaperGrad = styled(ResultLink)`
  background: linear-gradient(to bottom, lightgray, white), var(--paper);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  transform: translate(50%, 45%);
  &:hover {
    transform: translate(45%, 40%);
  }
`

export const RockGrad = styled(ResultLink)`
  background: linear-gradient(to bottom, lightgray, white), var(--rock);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 30px;
  transform: translate(25%, 165%);
  &:hover {
    transform: translate(30%, 160%);
  }
  @media only screen and (max-width: 768px) {
    padding: 25px;
  }
  @media only screen and (max-width: 640px) {
    padding: 22px;
  }
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`
export const LizardGrad = styled(ResultLink)`
  background: linear-gradient(to bottom, lightgray, white), var(--lizard);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  transform: translate(-125%, 165%);
  &:hover {
    transform: translate(-130%, 160%);
  }
`
export const SpockGrad = styled(ResultLink)`
  background: linear-gradient(to bottom, lightgray, white), var(--spock);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 20px 30px;
  transform: translate(-145%, 45%);
  &:hover {
    transform: translate(-140%, 40%);
  }
  @media only screen and (max-width: 768px) {
    padding: 18px 25px;
  }
  @media only screen and (max-width: 640px) {
    padding: 14px 22px;
  }
  @media only screen and (max-width: 480px) {
    padding: 16px 22px;
  }
`

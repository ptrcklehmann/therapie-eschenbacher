import React from "react"
import styled from "styled-components"
import "@fontsource/cormorant/500.css"

const Button = props => {
  return (
    <>
      {props.anchor ? (
        <ButtonWrapper
          aria-label={props.label}
          className="anchor"
          as="a"
          href={props.href}
        >
          <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          {props.cta}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper aria-label={props.label} type={props.type}>
          {props.cta}
        </ButtonWrapper>
      )}
    </>
  )
}

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #242426;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
 // background: linear-gradient(90deg, #291701, #AC9B79, #E8C99D, #291701);
  background-size: 400%;
  border-radius: 30px;
  border: none;
  z-index: 1;
  background: transparent;
  border: 1px solid #242426;
  outline: none;
  transition: 1s ease-in-out;

  &:hover {
    /* cursor: pointer;
    animation: animate 8s linear infinite; */
    transition: 1s ease-in-out;
    background: #D9C99A;

    &::before {
      filter: blur(20px);
      opacity: 1;
      animation: animate 8s linear;
    }
  }
  svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
  //  background: linear-gradient(90deg, #291701, #AC9B79, #E8C99D, #5A3A14);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
    background: transparent;
    border: 1px solid #91C9FF;
    outline: none;
    transition: 1s ease-in-out;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
`

export default Button

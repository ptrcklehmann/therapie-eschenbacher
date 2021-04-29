import styled from "styled-components"
import "@fontsource/cormorant/300.css"
import "@fontsource/cormorant"

export const BannerStyles = styled.section`
  .gatsby-image-wrapper {
    height: 100vh;
    color: #242426;
    position: relative;
  }

  .hero-content {
    font-weight: 300;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    text-align: right;
    height: 100%;
    width: 100%;
    max-width: 400px;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      max-width: 850px;
    }

    h1 {
      font-size: 1.5rem;
      line-height: 1.2;
      background: -webkit-linear-gradient(45deg, #242426, #252e33);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

      span {
        background: -webkit-linear-gradient(45deg, #242426, #252e33);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      margin-top: 0;
      margin-bottom: 2rem;
      line-height: 1.2;
      font-size: 0.50rem;
      background: -webkit-linear-gradient(45deg, #242426, #252e33);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

      @media (min-width: 768px) {
        font-size: 1.35rem;
      }

      @media (min-width: 1200px) {
        font-size: 1.5rem;
      }
    }

    button,
    .anchor {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      max-width: 1060px;

      h1 {
        font-size: 1.5rem;
        font-weight: 400;
      }
    }

    @media (min-width: 1200px) {
      h1 {
        font-size: 2rem;
        font-weight: 400;
      }
    }
  }
`

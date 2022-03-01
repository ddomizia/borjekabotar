import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
a {
  color: rgb(60, 116, 190);
  text-decoration: none;
}
  .col img {
    max-width: 850px !important;
  }
  .bg-image {
    position: relative;
    margin: auto;

    h2 {
      font-family: "Cinzel Decorative";
      position: absolute;
      text-align: center;
      font-size: 1.5rem;
      color: white;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      @media (min-width: 576px) {
        font-size: 2.8rem;
      }

      @media (min-width: 768px) {
        font-size: 2rem;
      }

      @media (min-width: 992px) {
        font-size: 2rem;
      }

      @media (min-width: 1200px) {
        font-size: 2.8rem;
      }
    }
  }
  h5 {
    text-align: center !important;
    font-style: italic;
    font-weight: 200;
    font-size: 1rem;
    padding-bottom: 2rem;
    color: gray;
  }
`;

export default Layout;

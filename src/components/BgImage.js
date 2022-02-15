import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const BgImage = (props) => {
  return (
    <Wrapper>
      <div className="bg-image">
        <StaticImage
          src={props.image}
          alt={props.alt}
          objectFit="cover"
        />
        <h2>{props.title}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .bg-image img {
    height: calc(50vh);
    width: calc(300vh);
  }
  .col img {
    max-width: 850px !important;
  }
  .bg-image {
    position: relative;
    margin: auto;

    h2 {
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
`;

export default BgImage
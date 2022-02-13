import React from "react";
import "./Layout.scss";
import { withPrefix } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Favicon_32 from "../../static/favicon/favicon-32x32.png";
import Favicon_ico from "../../static/favicon/favicon-32x32.png";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/x-icon" href={Favicon_32} />
        <link rel="shortcut icon" type="image/x-icon" href={Favicon_ico} />

        <title>
          Borj-e Kabotar | Home
        </title>

        <meta name="description" content="Borj-e Kabotar" />
        <link rel="canonical" href="https://borjekabotar.com" />

        <meta property="og:title" content="Borj-e Kabotar" />
        <meta
          property="og:description"
          content="The towers for pigeons are widespread in the areas around **Isfahan** and **Golpayegan** and even today these buildings characterise the landscape. They are often imposing structures that can sometimes be mistaken for a defensive system. The earliest **towers** in the province of Isfahan date back to the 16th-17th centuries."
        />
        <meta property="og:url" content="https://borjekabotar.com" />
        <meta
          property="og:image"
          content={withPrefix(`static/logos/logo_bn.png`)}
        />

        <meta
          property="twitter:title"
          content="The towers for pigeons are widespread in the areas around **Isfahan** and **Golpayegan** and even today these buildings characterise the landscape. They are often imposing structures that can sometimes be mistaken for a defensive system. The earliest **towers** in the province of Isfahan date back to the 16th-17th centuries."
        />
        <meta
          property="twitter:description"
          content="The towers for pigeons are widespread in the areas around **Isfahan** and **Golpayegan** and even today these buildings characterise the landscape. They are often imposing structures that can sometimes be mistaken for a defensive system. The earliest **towers** in the province of Isfahan date back to the 16th-17th centuries."
        />
        <meta property="twitter:url" content="https://lad.saras.uniroma1.it" />
        <meta
          property="twitter:image"
          content={withPrefix(`static/logos/logo_bn.png`)}
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

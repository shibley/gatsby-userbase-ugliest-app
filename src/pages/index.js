import React from "react";
import { Link } from "gatsby";

import Layout from "../components/common/Layout/Layout"
import SEO from "../components/common/Layout/seo"
import Navigation from "../components/common/Navigation/Navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Features />
    <GetStarted />
    {/* <p>
      <Link to="/app/login">Log In</Link> /{" "}
      <Link to="/app/signup">Sign Up</Link>
    </p> */}
    <Footer />

    </Layout>
);

export default IndexPage;

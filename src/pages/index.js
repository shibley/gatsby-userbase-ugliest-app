import React from "react";
import { Link } from "gatsby";

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

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
    <p>
      <Link to="/app/login">Log In</Link> /{" "}
      <Link to="/app/signup">Sign Up</Link>
    </p>
    <Footer />

    </Layout>
);

export default IndexPage;

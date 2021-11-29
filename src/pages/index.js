import * as React from "react"
import parse from 'html-react-parser'
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/hero"
import AboutSection from "../components/about"
import ServicesSection from '../components/services';
import PricingSection from "../components/pricing"
import CtaSection from '../components/cta';
import NewsSection from "../components/news"
import ClientsSection from "../components/clients"
import ContactSection from "../components/contact"
import MapSection from "../components/map"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <CtaSection />
      <NewsSection />
      <ClientsSection />
      <ContactSection />
      <MapSection />
  
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

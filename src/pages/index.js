import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Installation from '../components/Installation'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Verdana, Arial, sans-serif;
  }
`

export default () => (
  <Layout>
    <GlobalStyle />
    <Header />
    <Navbar />
    <Features />
    <Installation />
    <Footer />
  </Layout>
)
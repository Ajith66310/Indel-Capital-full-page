import Layout from '@/components/layout/Layout'
import StrategyListing from '@/components/sections/strategies-section/StrategyListing'
import React from 'react'

const Home = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="strategies" breadcrumbImg='assets/images/background/page-title.jpg'>
      <StrategyListing/>
      </Layout>
    </>
  )
}

export default Home
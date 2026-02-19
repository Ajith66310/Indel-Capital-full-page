import Layout from '@/components/layout/Layout'
import ApproachOverview from '@/components/sections/investmentapproach/ApproachOverview'
import RiskManagment from '@/components/sections/investmentapproach/RiskManagement'
import ValueCreation from '@/components/sections/investmentapproach/ValueCreation'
import React from 'react'

const Home = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Investment Approach" breadcrumbImg='assets/images/background/page-title.jpg'>
      <ApproachOverview/>
      <RiskManagment/>
      <ValueCreation/>
      </Layout>
    </>
  )
}

export default Home
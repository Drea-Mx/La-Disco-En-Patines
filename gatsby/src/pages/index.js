import React from 'react'
import Home from '../components/home/Home';
import Layout from "../components/layout/layout";
import { Seo } from '../components/layout/seo';


const IndexPage = () => {

  return(
    <Layout>
      <Home />
      
    </Layout>
  )
}

export const Head = () => (
  <Seo title='La Disco En Patines' description='Setting the scene, below the line.' image='image.png' />
)


export default IndexPage

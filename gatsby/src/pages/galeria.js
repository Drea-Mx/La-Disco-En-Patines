import React from 'react'
import Galeria from '../components/galeria/Galeria';
import Layout from "../components/layout/layout";
import { Seo } from '../components/layout/seo';


const GaleriaPage = () => {

  return(
    <Layout>
      <Galeria />
      
    </Layout>
  )
}

export const Head = () => (
  <Seo title='La Disco En Patines | Galeria' description='Setting the scene, below the line.' image='image.png' />
)


export default GaleriaPage

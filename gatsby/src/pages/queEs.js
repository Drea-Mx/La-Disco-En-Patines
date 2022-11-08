import React from 'react'
import Layout from "../components/layout/layout";
import { Seo } from '../components/layout/seo';
import QueEs from '../components/queEs/QueEs';


const QueEsPage = () => {

  return(
    <Layout>
      <QueEs />
      
    </Layout>
  )
}

export const Head = () => (
  <Seo title='La Disco En Patines | ¿QUE ES LA DISCO EN PATINES?' description='Setting the scene, below the line.' image='image.png' />
)


export default QueEsPage

import React from 'react'
import CapituloMonterrey from '../components/capituloMonterrey/CapituloMonterrey';
import Layout from "../components/layout/layout";
import { Seo } from '../components/layout/seo';


const CapituloMonterreyPage = () => {

  return(
    <Layout>
      <CapituloMonterrey />
      
    </Layout>
  )
}

export const Head = () => (
  <Seo title='La Disco En Patines | Capítulo Monterrey' description='Dirección General, Dirección General & Producción' image='image.png' />
)


export default CapituloMonterreyPage

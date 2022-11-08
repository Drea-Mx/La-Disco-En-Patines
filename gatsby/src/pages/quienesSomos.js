import React from 'react'
import Layout from "../components/layout/layout";
import { Seo } from '../components/layout/seo';
import QuienesSomos from '../components/quienesSomos/QuienesSomos';


const QuienesSomosPage = () => {

  return(
    <Layout>
      <QuienesSomos />
      
    </Layout>
  )
}

export const Head = () => (
  <Seo title='La Disco En Patines | ¿Quiénes Somos?' description='Dirección General, Dirección General & Producción' image='image.png' />
)


export default QuienesSomosPage

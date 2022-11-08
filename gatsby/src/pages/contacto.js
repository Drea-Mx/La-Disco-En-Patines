import React from 'react'
import Contacto from '../components/contacto/Contacto';
import Layout from "../components/layout/layout";
import { Seo } from '../components/layout/seo';


const ContactoPage = () => {

  return(
    <Layout>
      <Contacto />
      
    </Layout>
  )
}

export const Head = () => (
  <Seo title='La Disco En Patines | Contacto' description='Setting the scene, below the line.' image='image.png' />
)


export default ContactoPage

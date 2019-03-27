import React from 'react';
import Layout from '../components/layout';
import Header1 from '../components/header1';
import AboutCard from '../components/about/AboutCard';
// import CardList from '../components/CardList';

const AboutPage = () => {
  return (
    <Layout>
      <Header1 
        title="Who We Are"
        image={require('../images/about_LG.jpg')}
      />
      <AboutCard />
      {/* Use CardList Component when LG team gives green light */}
      {/* <CardList /> */}
    </Layout>
  )
}

export default AboutPage

import React from 'react'
import Header1 from '../components/Header1';
import AboutCard from '../components/About/AboutCard';
// import CardList from '../components/CardList';

const AboutPage = () => {
  return (
    <div>
      <Header1 
        title="Who We Are"
        image={require('../images/about_LG.jpg')}
      />
      <AboutCard />
      {/* Use CardList Component when LG team gives green light */}
      {/* <CardList /> */}
    </div>
  )
}

export default AboutPage

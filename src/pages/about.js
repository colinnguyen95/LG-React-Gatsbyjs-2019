import React from 'react'
import Header1 from '../components/Header1';
import AboutList from '../components/AboutList';
// import CardList from '../components/CardList';

const AboutPage = () => {
  return (
    <div>
      <Header1 
        title="Who We Are"
        image={require('../images/contact_lg.jpg')}
      />
      <AboutList />
      {/* Use CardList Component when LG team gives green light */}
      {/* <CardList /> */}
    </div>
  )
}

export default AboutPage

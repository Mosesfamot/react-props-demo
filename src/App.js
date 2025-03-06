import React from "react";
import Contact from './components/Contact';
import Joke from './components/Joke';
import jokesData from './components/jokesData';
import './styles.css';

export default function App() {
  
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })


  return (
    <section>
      <article>
        {jokeElements}
      </article>
      
      <Contact 
        img={require('./images/contact-img.png')}
        name="Mr. Samson"
        phone="(234) 555-1234"
        email="mr.samsonjames@contact.com"
      />
      <Contact 
        img={require('./images/contact-img.png')}
        name="Mr. Sam"
        phone="(234) 434-4352"
        email="mr.samjames@contact.com"
      />
      <Contact 
        img={require('./images/contact-img.png')}
        name="Mr. Jackson"
        phone="(234) 511-0000"
        email="mr.jackrobinson@contact.com"
      />
    </section>
  )
}
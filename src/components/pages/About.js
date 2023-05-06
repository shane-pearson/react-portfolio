import React from 'react';

var imageName = require('../../737977_10151663423539148_1189357060_o.jpg')


const styles = {
  h1: {
    padding: 20,
  }, 
  p: {
    padding: 30,
    display: 'inline-block',
    float: 'left',
    width: '75%',
  },
  image: {
    maxWidth: '20%',
    height: 'auto',
    float: 'right',
    display: 'inline-block',
    marginRight: 50,
    border: '.5rem solid',
  }

};



export default function About() {
  return (
    <div>
      <h1 style={styles.h1}>About Me</h1>
      <p style={styles.p}>
      I have been working in the IT field for over 7 years and am passionate about helping people being able to use their technology 
      properly, and make sure they are able to without any interruptions. Working in 2 school district now I realize the importance of 
      technology and how it can be utilized to make instruction more effective. Working firsthand with users I take great pride in being 
      a representative of the IT department, and to always leave the user with a positive experience. I recognize that troubleshooting, 
      documenting, and resolving issues is an important part of technology. After seven years in the technology field, I feel a strength 
      of mine is being able to test theories, document results, and find creative solutions to resolve issues. I also have created teaching 
      and training materials for users to empower them to resolve issues on their own. I feel that my ability to quickly learn and integrate 
      new technologies is another strength I can bring to any role. After working in multiple organizations, I recognize their unique 
      strategies for how they utilize and leverage their technology to serve their users. While moving into new opportunities I have been 
      able to quickly transition between companies to learn and gain mastery of their systems. I am confident that I could utilize this 
      skillset to transition into this role, and integrate my knowledge and experience to be an asset to any team.
      </p>

      <img src={imageName} alt='headshot' style={styles.image}/>

    </div>
  );
}
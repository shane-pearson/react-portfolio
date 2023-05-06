import React from 'react';

var wowConnect = require('../../Screenshot 2023-03-05 174629.png')
var friedGreen = require('../../tophalfofwebsite.jpg')

const styles = {
  h1: {
    padding: 20,
  }, 
  image1: {
    flex: '1 1 auto',
    display: 'inline-block',
    width: 500,
    height: 300,
    border: '.2rem solid',
    marginLeft: 150,
  },
  image2: {
    flex: '1 1 auto',
    display: 'inline-block',
    width: 500,
    height: 300,
    border: '.2rem solid',
    marginLeft: 150,
  },
 
};

export default function Contact() {
  return (
    <div>
      <h1 style={styles.h1}>Portfolio</h1>
     
     <a href="https://github.com/jerrybeau89/fried-green-tomatoes">
      <img src={friedGreen} alt='fried green tomato project' style={styles.image1}/>
      </a>

      <a href="https://github.com/jperalta24/WoW-Connect">
        <img src={wowConnect} alt='wow connect project' style={styles.image2}/>
      </a>

    </div>
  );
}
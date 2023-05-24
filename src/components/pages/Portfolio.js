import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

var wowConnect = require("../../Screenshot 2023-03-05 174629.png");
var friedGreen = require("../../tophalfofwebsite.jpg");
var weatherApp = require("../../weather-app.jpg");
var scheduleApp = require("../../schedule-app.jpg");


const styles = {
  h1: {
    padding: 10,
    color: 'rgb(58, 69, 102)',
    textAlign: 'center',
    backgroundColor: '#a6a09f',
    fontStyle: 'Arial',
    fontWeight: 'bold',
  },

  card: {
    border: ".2rem solid",
    width: "20rem",
    borderColor: '#a6a09f',
    margin: '.5rem',
    backgroundColor: '#6fa758',
   
  },
  cardimage: {
    height: '10rem',
  },
};

export default function Portfolio() {
  return (
    <Container>
      <h1 style={styles.h1} className='col-sm-5'>Some of my work!</h1>

    <Row>
      <Card style={styles.card}>
      <a href="https://jerrybeau89.github.io/fried-green-tomatoes/" class="stretched-link text-danger">
        <Card.Img style={styles.cardimage} variant="top" src={friedGreen} />
        </a>
        <Card.Body>
          <Card.Title>Fried Green Tomatoes</Card.Title>
          <Card.Text>
          Fried Green Tomatoes is the name of our application. The purpose of this app is to see 
          randomized movie ratings and be able to search for movies as well.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
      <a href="https://github.com/shane-pearson/WoW-Connect" class="stretched-link text-danger">
        <Card.Img style={styles.cardimage} variant="top" src={wowConnect} />
        </a>
        <Card.Body>
          <Card.Title>Wow Connect</Card.Title>
          <Card.Text>
          Wow connect was built around the idea of community. We wanted to build a 
          platform where you could interact with other players of World of Warcraft.
          </Card.Text>
        </Card.Body>
      </Card>

  
      <Card style={styles.card}>
      <a href="https://shane-pearson.github.io/weather-app/" class="stretched-link text-danger">
        <Card.Img style={styles.cardimage} variant="top" src={weatherApp} />
        </a>
        <Card.Body>
          <Card.Title>Weather App</Card.Title>
          <Card.Text>
          The weather app was built to be a beneficial way to search for the weather 
          forecast in various cities. Secondly to demonstrate my ability to call api data and return it in an 
          organized and useful way.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card}>
      <a href="https://shane-pearson.github.io/interactive-calendar/" class="stretched-link text-danger">
        <Card.Img style={styles.cardimage} variant="top" src={scheduleApp} />
        </a>
        <Card.Body>
          <Card.Title>Work Day Scheduler</Card.Title>
          <Card.Text>
          This projects goal was to build an interactive daily scheduler app.
          </Card.Text>
        </Card.Body>
      </Card>
      </Row>

    </Container>
  );
}

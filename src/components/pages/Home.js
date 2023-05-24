import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "../../style.module.css";

const styles = {
  h1: {
    fontSize: 60,
    padding: 10,
    color: "#6fa758",
    fontFamily: "helvetica",
    fontWeight: "bold",
  },
  h2: {
    fontSize: 70,
    padding: 10,
    color: "rgb(58, 69, 102)",
    textAlign: "center",
    backgroundColor: "#a6a09f",
  },
  p: {
    padding: 30,
    display: "inline-block",
    float: "left",
    width: "75%",
    color: "rgb(58, 69, 102)",
    fontFamily: "arial",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#a6a09f",
  },
  image: {
    width: 250,
    height: 250,
    display: "inline-block",
    border: ".3rem solid",
  },
};

export default function Home() {
  return (
    <Container>
      <h1 style={styles.h1}>My name is</h1>
      <h2 style={styles.h2} className="col-sm-6">
        Shane Pearson
      </h2>
      <Stack gap={2} className="col-lg-12">
        <p style={styles.p}>
          I have been working in the IT field for over 7 years and am passionate
          about helping people being able to use their technology properly, and
          make sure they are able to without any interruptions. Working in 2
          school district now I realize the importance of technology and how it
          can be utilized to make instruction more effective. Working firsthand
          with users I take great pride in being a representative of the IT
          department, and to always leave the user with a positive experience. I
          recognize that troubleshooting, documenting, and resolving issues is
          an important part of technology.
        </p>
      </Stack>
    </Container>
  );
}

import React from "react";
import styles from "./styles/main.module.css";
import { Colors } from "../colors.js";
import { Card } from "react-bootstrap";
export default function AlertCard() {
  return (
    <div
      className={styles.main}
      style={{
        backgroundColor: Colors.bglight,
      }}
    >
      <Card
        style={{
          width: "18rem",
          backgroundColor: Colors.bgdark,
          height: "90%",
          display: "flex",
          borderRadius: "25px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "aliceblue",
          fontSize: "large",
        }}
      >
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "sorry.png"}
          style={{
            width: "200px",
            borderRadius: "25px",
          }}
        />
        <Card.Body
          style={{
            padding: "0px 5px",
          }}
        >
          <Card.Title>
            This app is currently in development for mobile
          </Card.Title>
          <Card.Text>Kindly use desktop for the best experience</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

import { Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <section style={{ textAlign: "center" }}>
        <Typography variant="h3">Project</Typography>
        <Typography
          style={{
            maxWidth: "90vw",
            textAlign: "center",
            margin: "auto",
            fontSize: "1.5rem",
          }}
          color="text.secondary"
        >
          {" "}
          This web application offers personalized stock portfolio
          recommendations based on user input, including their initial
          investment amount, desired cumulative calculation factor, and the
          investment period end date. Built on a foundation of Node.js, it
          seamlessly integrates React.js for the frontend and Express.js for the
          backend.
        </Typography>
      </section>
    </div>
  );
};

export default About;

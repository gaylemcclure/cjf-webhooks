import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AirtablePage = () => {
  const page = document.location.href;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/airtable/members");
        setBandData(data.data.items[0].fields.sections);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return <WelcomeContainer className="welcome-bg"></WelcomeContainer>;
};

// Styled components
const WelcomeContainer = styled.div`
  background-color: #5168fa;
  height: 100%;
  .main {
    padding-top: 7rem;
  }
`;

export default AirtablePage;

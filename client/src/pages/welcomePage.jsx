import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { QUERY_ME, QUERY_PROJECT } from "../utils/queries";
import { ADD_USER } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";

const WelcomePage = () => {
  const page = document.location.href;
  console.log(page);

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

export default WelcomePage;

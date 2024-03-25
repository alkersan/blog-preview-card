import React from "react";
import styled from "styled-components";
import BlogPreview from "./BlogPreview.jsx";
import GlobalStyles from "../GlobalStyles.js";

const App = () => {
  return (
    <>
      <Main>
        <BlogPreview />
      </Main>
      <GlobalStyles />
    </>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  background-color: var(--color-yellow);
`;

export default App;

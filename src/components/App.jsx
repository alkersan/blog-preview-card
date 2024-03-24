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
  min-height: 100%;
  min-width: fit-content;
  background-color: var(--color-yellow);

  display: grid;
  place-content: center;
`;

export default App;

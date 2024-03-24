import React from "react";
import styled from "styled-components";

const BlogPreview = () => {
  return (
    <Link href="#">
      <Wrapper>
        <Hero src="illustration-article.svg" alt="" />
        <Content>
          <Label>Learning</Label>
          <Date>Published 21 Dec 2023</Date>
          <Title>HTML & CSS foundations</Title>
          <Description>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </Description>
        </Content>
        <Author>
          <picture>
            <img alt="" src="image-avatar.webp" width="32" height="32" />
          </picture>
          <p>Greg Hooper</p>
        </Author>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
`;

const Wrapper = styled.article`
  width: fit-content;
  max-width: 24rem;
  background-color: var(--color-white);
  border-radius: 20px;
  overflow: clip;
  padding: 1.5rem;
  border: 1px solid var(--color-black);

  display: flex;
  flex-direction: column;
  gap: 24px;

  // Fluid marin from 0 to 24px on screens below 375px
  margin-inline: clamp(0rem, -7.5rem + 37.5vw, 1.5rem);

  --shadow-offset: 8px;
  will-change: filter;
  transition: filter 200ms;
  filter: drop-shadow(
    var(--shadow-offset) var(--shadow-offset) 0 var(--color-black)
  );

  ${Link}:hover &,
  ${Link}:focus-visible & {
    --shadow-offset: 0;
    transition: filter 100ms;
  }
`;

const Hero = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  color: var(--color-black);
`;

const Label = styled.div`
  padding: 4px 12px;
  background-color: var(--color-yellow);
  border-radius: 4px;
  font: var(--font-body-fluid-sb);
`;

const Date = styled.div`
  font: var(--font-body-fluid-s);
`;

const Title = styled.h1`
  font: var(--font-heading-fluid);
  will-change: color;
  transition: color 150ms;

  ${Link}:hover &,
  ${Link}:focus-visible & {
    color: var(--color-yellow);
  }
`;

const Description = styled.p`
  font: var(--font-body-fluid-m);
  color: var(--color-grey);
`;

const Author = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  img {
    display: block;
  }

  p {
    font: var(--font-body-fixed-sb);
  }
`;

export default BlogPreview;

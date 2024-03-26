import React from "react";
import styled from "styled-components";

const BlogPreview = () => {
  return (
    <Wrapper>
      <Hero src="illustration-article.svg" alt="" />
      <Content>
        <Label>Learning</Label>
        <Date>
          Published <time dateTime="2023-12-21">21 Dec 2023</time>
        </Date>
        <Title>
          <Link href="">HTML & CSS foundations</Link>
        </Title>
        <Description>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </Description>
      </Content>
      <Author>
        <img
          alt="Author photo"
          src="image-avatar.webp"
          width="32"
          height="32"
        />
        <p>Greg Hooper</p>
      </Author>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 24rem;

  background-color: var(--color-white);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid var(--color-black);

  display: flex;
  flex-direction: column;
  gap: 24px;

  // Fluid marin from 16 to 24px on screens below 375px
  margin-inline: clamp(1rem, -1.909rem + 14.545vi, 1.5rem);

  --shadow-offset: 8px;
  will-change: filter;
  transition: filter 250ms;
  filter: drop-shadow(
    var(--shadow-offset) var(--shadow-offset) 0 var(--color-black)
  );
`;

const Hero = styled.img`
  height: 200px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  color: var(--color-black);
`;

const Label = styled.p`
  padding: 4px 12px;
  background-color: var(--color-yellow);
  border-radius: 4px;
  font: var(--font-body-fluid-sb);
`;

const Date = styled.p`
  font: var(--font-body-fluid-s);
`;

const Title = styled.h2`
  font: var(--font-heading-fluid);
  will-change: color;
  transition: color 150ms;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
  padding-block: 1rem;

  &:hover,
  &:focus-visible {
    color: var(--color-yellow);
  }

  ${Wrapper}:has(&:hover),
  ${Wrapper}:has(&:focus-visible) {
    --shadow-offset: 0;
  }
`;

const Description = styled.p`
  font: var(--font-body-fluid-m);
  color: var(--color-grey);
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font: var(--font-body-fixed-sb);
`;

export default BlogPreview;

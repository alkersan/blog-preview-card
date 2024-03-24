import React, { useEffect, useState } from "react";
import styled from "styled-components";
import desktopImg from "/docs/design/desktop-design.jpg";
import mobileImg from "/docs/design/mobile-design.jpg";
import { QUERIES } from "../constants.js";

const DesignOverlay = () => {
  const [showDesign, setShowDesign] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "d") {
      setShowDesign(!showDesign);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showDesign]);

  return <>{showDesign && <Overlay />}</>;
};

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: url(${mobileImg}) center no-repeat;
  opacity: 100%;
  @media ${QUERIES.tabletAndUp} {
    background-image: url(${desktopImg});
  }
`;

export default DesignOverlay;

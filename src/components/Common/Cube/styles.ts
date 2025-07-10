import styled from "styled-components";
import { CubeFace, Paintable, Rotatable, Sized } from "./types";

export const Container = styled.div<Sized>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  perspective: 1000px;
`;

export const Cube = styled.div<Rotatable>`
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;

  @keyframes spin {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }

  ${({ spin }) => spin && "animation: spin 30s infinite linear;"}
  ${({ x, y }) => x && y && `transform: rotateX(${x}deg) rotateY(${y}deg);`}
`;

const FACES = {
  top: "transform: rotateX(90deg)",
  bottom: "transform: rotateX(-90deg)",
  right: "transform: rotateY(90deg)",
  left: "transform: rotateY(-90deg)",
  front: "transform: rotateX(0deg)",
  back: "transform: rotateX(-180deg)",
};

const getFace = ({ face, size }: CubeFace & Sized): string => {
  return FACES[face] + ` translateZ(${size / 2}px);`;
};

export const Face = styled.div<CubeFace & Sized & Paintable>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ background }) =>
    background
      ? `repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0px,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 2px,
      transparent 16px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1) 0px,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 2px,
      transparent 16px
    ),
    linear-gradient(90deg, ${background}, ${background})`
      : "unset"};

  box-shadow: ${({ color }) => `0px 0px 1px 1px ${color}`};

  ${({ face, size }) => getFace({ face, size })}
`;

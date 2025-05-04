import { chakra } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Background = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 50%;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background: #000;
`;

export const ShapeDivider = styled(Box)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

export const ShapeSvg = styled(chakra.svg)`
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 201px;
`;

export const ShapePath = styled(chakra.path)``;

import React from "react";
import * as S from "./styles";
import { CubeProps } from "./types";

const Cube: React.FC<CubeProps> = ({ x, y, size, spin, background, color }) => (
  <S.Container size={size}>
    <S.Cube spin={spin} x={x} y={y}>
      <S.Face size={size} background={background} color={color} face="front" />
      <S.Face size={size} background={background} color={color} face="back" />
      <S.Face size={size} background={background} color={color} face="right" />
      <S.Face size={size} background={background} color={color} face="left" />
      <S.Face size={size} background={background} color={color} face="top" />
      <S.Face size={size} background={background} color={color} face="bottom" />
    </S.Cube>
  </S.Container>
);
export default Cube;

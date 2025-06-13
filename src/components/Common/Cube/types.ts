export interface CubeFace {
  face: "top" | "front" | "right" | "left" | "bottom" | "back";
}

export interface Sized {
  size: number;
}

export interface Rotatable {
  spin?: boolean;
  x?: number;
  y?: number;
}

export interface Paintable {
  background?: string;
  color: string;
}

export type CubeProps = Sized & Rotatable & Paintable;

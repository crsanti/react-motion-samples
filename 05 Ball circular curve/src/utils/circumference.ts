import { CarthesianCoordinates } from '../entities';

export const getCircumferenceY = (radius: number, centerPoint: CarthesianCoordinates, x: number): number => {
  return Math.sqrt(Math.pow(radius, 2) - Math.pow(x - centerPoint.x, 2));
};

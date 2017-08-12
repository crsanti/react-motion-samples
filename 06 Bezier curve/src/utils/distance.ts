import { CarthesianCoordinates } from '../entities';

export const getDistanceBetweenPoints = (from: CarthesianCoordinates, to: CarthesianCoordinates): number => {
  const cathetus1 = to.x - from.x;
  const cathetus2 = to.y - from.y;
  const hypothenuse = Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2));

  return Math.abs(hypothenuse);
};

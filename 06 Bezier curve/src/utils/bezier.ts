import { CarthesianCoordinates } from '../entities';

export const bezier2 = (
  originPoint: CarthesianCoordinates,
  destinationPoint: CarthesianCoordinates,
  t: number,
): CarthesianCoordinates => {
  const x = getBezierCoordinate2(originPoint.x, destinationPoint.x, t);
  const y = getBezierCoordinate2(originPoint.y, destinationPoint.y, t);

  return { x, y };
};

const getBezierCoordinate2 = (origin: number, destination: number, t: number): number => {
  return origin + (destination - origin) * t;
};

export const bezier3 = (
  originPoint: CarthesianCoordinates,
  destinationPoint: CarthesianCoordinates,
  modifierPoint: CarthesianCoordinates,
  t: number,
): CarthesianCoordinates => {
  const x = getQuadraticBezierDimension(originPoint.x, destinationPoint.x, modifierPoint.x, t);
  const y = getQuadraticBezierDimension(originPoint.y, destinationPoint.y, modifierPoint.y, t);
  return { x, y };
};

const getQuadraticBezierDimension = (origin: number, destination: number, modifier: number, t: number) => {
  return Math.pow((1 - t), 2) * origin + 2 * t * (1 - t) * modifier + Math.pow(t, 2) * destination;
};

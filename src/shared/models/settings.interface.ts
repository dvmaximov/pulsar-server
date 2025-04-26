/* eslint-disable prettier/prettier */
export interface Setting {
  id: number;
  uuid: string;
  name: string;
  label: string;
  value: string;
  editable: string;
}

export type Settings = Setting[];

export enum BallPosition {
  BALL_LEFT,
  BALL_RIGHT,
}
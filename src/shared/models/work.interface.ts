/* eslint-disable prettier/prettier */
import { StatusType } from './statusType.interface';

export const WORK = {
  WORK_PROGRAMM: 1,
};

export interface WorkType {
  id: number;
  name: string;
}

export const workTypeValues: WorkType[] = [
  {
    id: WORK.WORK_PROGRAMM,
    name: "программа",
  },
];

export interface Work {
  id?: number;
  type?: WorkType;
  status?: StatusType;
  item: any;
  startTime: number | null;
  details: any[];
}

export type Works = Work[]

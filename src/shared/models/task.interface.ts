/* eslint-disable prettier/prettier */
export const ACTION = {
  ACTION_AZIMUTH: 1,
  ACTION_SLOPE: 2,
  ACTION_WAIT: 3,
  ACTION_SPARK: 4,
};

export interface ActionValue {
  label: string;
  max: number;
  min: number;
  step: number;
}

export interface ActionType {
  id: number;
  name: string;
  label1: ActionValue;
  label2: ActionValue;
  label3: ActionValue;
}

export interface TaskAction {
  id: number;
  type: ActionType;
  value1: number;
  value2: number;
  value3: number;
}


export interface Task {
  id: number;
  name: string;
  description: string;
  actions: TaskAction[];
}

export type Tasks = Task[];

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
  label1?: ActionValue;
  label2?: ActionValue;
  label3?: ActionValue;
}

export interface TaskAction {
  id?: string | number;
  type: ActionType;
  value1: number;
  value2: number;
  value3: number;
}

export interface Task {
  id?: number;
  name: string;
  description: string;
  ball: number;
  actions: TaskAction[];
  category?: string;
}

export interface Category {
  id?: number;
  name: string;
  isDefault?: string;
}

export type Categories = Category[];
export type Tasks = Task[];
export type TaskActions = TaskAction[];

export const actionValues = {
  [ACTION.ACTION_AZIMUTH]: {
    id: ACTION.ACTION_AZIMUTH,
    name: 'установка азимута',
    value1: {
      label: 'азимут (град)',
      max: 360,
      min: 0,
      step: 0.1,
    },
    value2: {
      label: '',
      max: 0,
      min: 0,
      step: 1,
    },
    value3: {
      label: '',
      max: 0,
      min: 0,
      step: 1,
    },
  },
  [ACTION.ACTION_SLOPE]: {
    id: ACTION.ACTION_SLOPE,
    name: 'установка наклона',
    value1: {
      label: 'наклон (град)',
      max: 10,
      min: 0,
      step: 1,
    },
    value2: {
      label: '',
      max: 0,
      min: 0,
      step: 1,
    },
    value3: {
      label: '',
      max: 0,
      min: 0,
      step: 1,
    },
  },
  [ACTION.ACTION_WAIT]: {
    id: ACTION.ACTION_WAIT,
    name: 'ожидание',
    value1: {
      label: 'время (сек)',
      max: 10000,
      min: 0,
      step: 1,
    },
    value2: {
      label: '',
      max: 0,
      min: 0,
      step: 1,
    },
    value3: {
      label: '',
      max: 0,
      min: 0,
      step: 1,
    },
  },
  [ACTION.ACTION_SPARK]: {
    id: ACTION.ACTION_SPARK,
    name: 'разряд',
    value1: {
      label: 'количество',
      max: 1000,
      min: 1,
      step: 1,
    },
    value2: {
      label: 'время (сек)',
      max: 10000,
      min: 0,
      step: 0.1,
    },

    value3: {
      label: 'интервал (сек)',
      max: 1000,
      min: 0,
      step: 0.1,
    },
  },
};

// export const actionValues = [
//   {
//     id: ACTION.ACTION_AZIMUTH,
//     name: 'установка азимута',
//     value1: {
//       label: 'азимут (град)',
//       max: 360,
//       min: 0,
//       step: 0.1,
//     },
//     value2: {
//       label: '',
//       max: 0,
//       min: 0,
//       step: 1,
//     },
//     value3: {
//       label: '',
//       max: 0,
//       min: 0,
//       step: 1,
//     },
//   },
//   {
//     id: ACTION.ACTION_SLOPE,
//     name: 'установка наклона',
//     value1: {
//       label: 'наклон (град)',
//       max: 10,
//       min: 0,
//       step: 1,
//     },
//     value2: {
//       label: '',
//       max: 0,
//       min: 0,
//       step: 1,
//     },
//     value3: {
//       label: '',
//       max: 0,
//       min: 0,
//       step: 1,
//     },
//   },
//   {
//     id: ACTION.ACTION_WAIT,
//     name: 'ожидание',
//     value1: {
//       label: 'время (сек)',
//       max: 10000,
//       min: 0,
//       step: 1,
//     },
//     value2: {
//       label: '',
//       max: 0,
//       min: 0,
//       step: 1,
//     },
//     value3: {
//       label: '',
//       max: 0,
//       min: 0,
//       step: 1,
//     },
//   },
//   {
//     id: ACTION.ACTION_SPARK,
//     name: 'разряд',
//     value1: {
//       label: 'количество',
//       max: 1000,
//       min: 1,
//       step: 1,
//     },
//     value2: {
//       label: 'время (сек)',
//       max: 10000,
//       min: 0,
//       step: 0.1,
//     },

//     value3: {
//       label: 'интервал (сек)',
//       max: 1000,
//       min: 0,
//       step: 0.1,
//     },
//   },
// ];

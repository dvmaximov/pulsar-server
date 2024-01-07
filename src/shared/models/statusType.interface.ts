/* eslint-disable prettier/prettier */
export const STATUS = {
  STATUS_WAIT: 1,
  STATUS_RUN: 2,
  STATUS_DONE: 3,
  STATUS_EXPIRED: 4,
  STATUS_STOPPED: 5,
};

export interface StatusType {
  id: number;
  name: string;
}

export const statusValues = [
  {
    id: STATUS.STATUS_WAIT,
    name: "ожидание",
  },
  {
    id: STATUS.STATUS_RUN,
    name: "выполнение",
  },
  {
    id: STATUS.STATUS_DONE,
    name: "завершено",
  },
  {
    id: STATUS.STATUS_EXPIRED,
    name: "просрочено",
  },
  {
    id: STATUS.STATUS_STOPPED,
    name: "остановлено",
  },
];

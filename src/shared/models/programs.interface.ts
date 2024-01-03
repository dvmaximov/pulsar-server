/* eslint-disable prettier/prettier */
export interface Program {
  id?: number;
  name: string;
  audio_id?: number | null;
  spinner_id?: number | null;
  startTime: string;
  endTime: string;
  imageShowTime: number;
}

export type Programs = Program[];

export interface ProgramItem {
  id?: number;
  program_id: number;
  image_id: number;
  imageContent?: string;
  startDate: string;
  endDate: string;
  active: string;
  always?: string;
}

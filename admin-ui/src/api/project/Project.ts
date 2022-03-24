import { Schedule } from "../schedule/Schedule";
import { Client } from "../client/Client";
import { Rate } from "../rate/Rate";

export type Project = {
  agendas?: Array<Schedule>;
  client?: Client | null;
  createdAt: Date;
  groups: number | null;
  Hours: number | null;
  id: string;
  name: string | null;
  rate?: Rate | null;
  updatedAt: Date;
};

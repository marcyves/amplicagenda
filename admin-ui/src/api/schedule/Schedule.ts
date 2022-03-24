import { Project } from "../project/Project";

export type Schedule = {
  completed: boolean;
  createdAt: Date;
  date: Date;
  id: string;
  project?: Project;
  updatedAt: Date;
};

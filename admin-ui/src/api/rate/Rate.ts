import { Project } from "../project/Project";

export type Rate = {
  createdAt: Date;
  id: string;
  projects?: Array<Project>;
  name: number;
  tax: number;
  updatedAt: Date;
};

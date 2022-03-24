import { Project } from "../project/Project";

export type Client = {
  city: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
};

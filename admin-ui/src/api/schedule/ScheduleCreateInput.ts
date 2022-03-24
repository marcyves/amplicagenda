import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ScheduleCreateInput = {
  completed: boolean;
  date: Date;
  project: ProjectWhereUniqueInput;
};

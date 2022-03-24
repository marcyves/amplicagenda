import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ScheduleUpdateInput = {
  completed?: boolean;
  date?: Date;
  project?: ProjectWhereUniqueInput;
};

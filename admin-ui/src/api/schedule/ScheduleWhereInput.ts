import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ScheduleWhereInput = {
  completed?: BooleanFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
};

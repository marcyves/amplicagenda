import { ScheduleCreateNestedManyWithoutProjectsInput } from "./ScheduleCreateNestedManyWithoutProjectsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { RateWhereUniqueInput } from "../rate/RateWhereUniqueInput";

export type ProjectCreateInput = {
  agendas?: ScheduleCreateNestedManyWithoutProjectsInput;
  client?: ClientWhereUniqueInput | null;
  groups?: number | null;
  Hours?: number | null;
  name?: string | null;
  rate?: RateWhereUniqueInput | null;
};

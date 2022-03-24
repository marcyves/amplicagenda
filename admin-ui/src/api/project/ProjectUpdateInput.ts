import { ScheduleUpdateManyWithoutProjectsInput } from "./ScheduleUpdateManyWithoutProjectsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { RateWhereUniqueInput } from "../rate/RateWhereUniqueInput";

export type ProjectUpdateInput = {
  agendas?: ScheduleUpdateManyWithoutProjectsInput;
  client?: ClientWhereUniqueInput | null;
  groups?: number | null;
  Hours?: number | null;
  name?: string | null;
  rate?: RateWhereUniqueInput | null;
};

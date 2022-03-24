import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RateWhereUniqueInput } from "../rate/RateWhereUniqueInput";

export type ProjectWhereInput = {
  agendas?: ScheduleListRelationFilter;
  client?: ClientWhereUniqueInput;
  groups?: IntNullableFilter;
  Hours?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  rate?: RateWhereUniqueInput;
};

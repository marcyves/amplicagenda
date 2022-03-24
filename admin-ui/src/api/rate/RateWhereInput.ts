import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type RateWhereInput = {
  id?: StringFilter;
  projects?: ProjectListRelationFilter;
};

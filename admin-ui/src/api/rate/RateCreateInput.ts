import { ProjectCreateNestedManyWithoutRatesInput } from "./ProjectCreateNestedManyWithoutRatesInput";

export type RateCreateInput = {
  projects?: ProjectCreateNestedManyWithoutRatesInput;
  name: number;
  tax: number;
};

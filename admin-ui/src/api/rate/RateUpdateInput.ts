import { ProjectUpdateManyWithoutRatesInput } from "./ProjectUpdateManyWithoutRatesInput";

export type RateUpdateInput = {
  projects?: ProjectUpdateManyWithoutRatesInput;
  name?: number;
  tax?: number;
};

import { ProjectUpdateManyWithoutClientsInput } from "./ProjectUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  city?: string | null;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutClientsInput;
};

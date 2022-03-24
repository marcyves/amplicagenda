import { ProjectCreateNestedManyWithoutClientsInput } from "./ProjectCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  city?: string | null;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutClientsInput;
};

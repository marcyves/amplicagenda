import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};

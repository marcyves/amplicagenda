import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};

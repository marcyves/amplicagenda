import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Rate" source="name" />
        <TextField label="Tax" source="tax" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

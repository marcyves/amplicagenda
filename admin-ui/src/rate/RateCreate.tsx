import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const RateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Rate" source="name" />
        <NumberInput label="Tax" source="tax" />
      </SimpleForm>
    </Create>
  );
};

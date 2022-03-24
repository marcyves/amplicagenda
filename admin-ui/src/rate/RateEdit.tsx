import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const RateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Rate" source="name" />
        <NumberInput label="Tax" source="tax" />
      </SimpleForm>
    </Edit>
  );
};

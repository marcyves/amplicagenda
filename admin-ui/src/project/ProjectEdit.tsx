import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { RateTitle } from "../rate/RateTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Groups" source="groups" />
        <NumberInput label="Hours per group" source="Hours" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="rate.id" reference="Rate" label="Rate">
          <SelectInput optionText={RateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

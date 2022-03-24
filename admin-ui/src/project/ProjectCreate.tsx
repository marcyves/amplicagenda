import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { RateTitle } from "../rate/RateTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { PROJECT_TITLE_FIELD } from "./ProjectTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { RATE_TITLE_FIELD } from "../rate/RateTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Groups" source="groups" />
        <TextField label="Hours per group" source="Hours" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Rate" source="rate.id" reference="Rate">
          <TextField source={RATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Schedule"
          target="ProjectId"
          label="Schedules"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Completed" source="completed" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import { type JSONSchemaType } from "ajv";

export interface NewUserSchema {
  id: number;
  first_name: string;
  last_name: string;
}

const schema: JSONSchemaType<NewUserSchema> = {
  type: "object",
  properties: {
    id: { type: "number" },
    first_name: { type: "string" },
    last_name: { type: "string" },
  },

  required: ["id"],
  additionalProperties: true,
};

export { schema };

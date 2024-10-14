import { defineBackend } from '@aws-amplify/backend';
import { defineData } from '@aws-amplify/backend-data';

const data = defineData({
  schema: `
    type Todo @model {
      id: ID!
      name: String!
      description: String
    }
  `,
});

export const backend = defineBackend({
  data
});

export default backend;


// schemas/userSchema.ts
import { type JSONSchemaType } from "ajv"

export interface IUser {
    url: string;
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: any[];
    father: string;
    mother: string;
    spouse: string;
    allegiances: string[];
    books: string[];
    povBooks: any[];
    tvSeries: any[];
    playedBy: any[];
}


// Define the schema to match the IUser interface
const schema: JSONSchemaType<IUser> = {
    type: 'object',
    properties: {
        url: { type: 'string' },
        name: { type: 'string' },
        gender: { type: 'string' },
        culture: { type: 'string' },
        born: { type: 'string' },
        died: { type: 'string' },
        titles: { type: 'array', items: { type: 'string' } },
        aliases: {
            type: 'array', items: {
                oneOf: [
                    { type: 'string' }
                ]
            }
        },
        father: { type: 'string' },
        mother: { type: 'string' },
        spouse: { type: 'string' },
        allegiances: { type: 'array', items: { type: 'string' } },
        books: { type: 'array', items: { type: 'string' } },
        povBooks: { type: 'array', items: {
            oneOf: [
                { type: 'string' }
            ]
        }
    },
        tvSeries: { type: 'array', items: {
            oneOf: [
                { type: 'string' }
            ]
        }
    },
        playedBy: { type: 'array', items: {
            oneOf: [
                { type: 'string' }
            ]
        }
    }
    },
    required: [
        'url'
    ],
    additionalProperties: true
};

export { schema };

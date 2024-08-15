
import Ajv from 'ajv';
import { IUser, schema } from '~/schemas/UserSchema';

const ajv = new Ajv();
const validate = ajv.compile(schema);

export default defineEventHandler( async event => 

{
   
    const results = await $fetch<IUser>(`https://anapioficeandfire.com/api/characters/583`
    )

    const isValid = validate(results);

    if(!isValid)
    return{
        errorMessage:"The JSON Payload is not valid"
        }

    // Returning the users
    return results;
}

)
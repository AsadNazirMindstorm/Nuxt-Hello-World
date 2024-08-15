import db from "~/db/db";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const firstName= query.firstName;
    const lastName = query.lastName;

    const [id] = await db('users').insert({
        first_name:firstName,
        last_name:lastName
    }).returning('id');

    return {
        res: id
    }
});

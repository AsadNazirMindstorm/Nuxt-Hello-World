import knex from 'knex';
import {development} from '~/db/knexfile';

const db = knex(development);

//exporting data base
export default db;
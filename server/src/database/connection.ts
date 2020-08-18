import knex from 'knex';

import path from 'path';

//migrates - controle a versão dos bancos de dados

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default db;

import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//http://minharota.com.br/users

//GET - buscar ou listar uma informação
//POST - criar um anova informação
//PUT - atualizar uma informação
//DELETE - deletar uma informação

//Corpo(Request: Body) : dados para criação ou atualização de um registro
//Route Params: identifica qual recurso que eu quero ataualizar ou deletar
//Query Params: paginação, filtros e ordenação.




// www.minhaapi.com.br:3333 /Users


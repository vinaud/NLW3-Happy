import express from 'express';
import './database/connection';
import path from 'path';

import routes from './routes';
//import cors from 'cors';

const app = express();
app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));;
//app.use(cors());

//exemplo hello world
/*app.get('/', (request, response) => {
return response.json({message: "hello world"});
});*/

app.listen(3333);
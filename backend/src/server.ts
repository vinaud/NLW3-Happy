import express from 'express';
//import routes from './routes';
//import cors from 'cors';


const app = express();
app.use(express.json());
//app.use(cors());
//app.use(routes);



//exemplo hello world
/*app.get('/', (request, response) => {
return response.json({message: "hello world"});
});*/

app.listen(3333);
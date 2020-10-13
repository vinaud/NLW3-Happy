import express from 'express';
import './database/connection';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';
//import routes from './routes';
//import cors from 'cors';


const app = express();
app.use(express.json());
//app.use(cors());
//app.use(routes);

app.post('/orphanages', async(request, response) => {
    
    console.log(request.body);

    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });

    await orphanagesRepository.save(orphanage);
    
    return response.json({message: "hello world"});
    });

//exemplo hello world
/*app.get('/', (request, response) => {
return response.json({message: "hello world"});
});*/

app.listen(3333);
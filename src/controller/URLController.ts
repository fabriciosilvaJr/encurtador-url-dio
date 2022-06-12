import { URLModel } from '../database/URL';
import {Request, Response} from 'express';
import shortId from 'shortid';
import {config} from '../config/Constants'

export class URLController{
    public async shorten(req: Request, response:Response): Promise<void>{
        // Verificar se a url existe
        const {originURL} = req.body;
        const url = await URLModel.findOne({originURL});
        if(url){
            response.json(url);
            return
        }
        const hash = shortId.generate();
        const shortURL =  `${config.API_URL}/${hash}`

        // Salvar a Url no banco
        const newUrl = await URLModel.create({hash, shortURL, originURL})
        // Retornar a Url que salvamos
        response.json({newUrl})
   
    }

    public async redirect(req: Request, response:Response): Promise<void>{
        const {hash} = req.params
       const url = await URLModel.findOne({hash});

        if(url){

            response.redirect(url.originURL)
            return
        }

        response.status(400).json({ error: 'URL not found' })

      

 
    }

}
import {Request, Response} from 'express';
import shortId from 'shortid';
import {config} from '../config/Constants'

export class URLController{
    public async shorten(req: Request, response:Response): Promise<void>{
        // Verificar se a url existe
        // Criar o hash para url
        const {originURL} = req.body;
        const hash = shortId.generate();
        const shortURL =  `${config.API_URL}/${hash}`

        // Salvar a Url no banco
        // Retornar a Url que salvamos
        response.json({originURL, hash, shortURL})
   
    }
    
}
import {Request, Response} from 'express';
import shortId from 'shortid';

export class URLController{
    public async shorten(req: Request, response:Response): Promise<void>{
        // Verificar se a url existe
        // Criar o hash para url
        const {originURL} = req.body
        const hash = shortId.generate()
        // Salvar a Url no banco
        // Retornar a Url que salvamos
   
    }
}
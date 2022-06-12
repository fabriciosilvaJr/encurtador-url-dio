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

    public async redirect(req: Request, response:Response): Promise<void>{
        // Pegar hash na URL
        const {hash} = req.params
        // Encontrar a URL orginal pelo hash
        const url = {
            originURL: "https://cloud.mongodb.com/v2/62a3ebb85f16a24e469b4357#clusters",
            hash: "6FqOh_oiw",
            shortURl:"http://localhost:5000/6FqOh_oiw"
        }
        // Redirecionar para a URL original a partir do que encontramos no DB
            response.redirect(url.originURL)
    }

}
import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/Post";

export class PostController {
    public createPost = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const { photo, description, type, authorId } = req.body

            const input: PostInputDTO = {
                photo, 
                description, 
                type, 
                authorId
            }

            const postBusiness = new PostBusiness()
            const post = await postBusiness.createPost(input)

            res.status(201).send({message: "Novo post criado com sucesso!", post})
            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    public getPostById = async (req:Request, res:Response): Promise<void> => {
        try {
            const id: string = req.params.id

            const postBusiness = new PostBusiness()
            const post = await postBusiness.getPostById(id)
            res.status(200).send(post)

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}

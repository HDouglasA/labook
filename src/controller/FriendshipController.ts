import { Request, Response } from "express";
import { FriendshipBussines } from "../business/FriendshipBusiness";
import { FriendshipInputDTO } from "../model/Friendship";

export class FriendshipController {
    public createFriendship = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const {userId, userFriendId } = req.body

            const input: FriendshipInputDTO = {
                userId,
                userFriendId
            }

            const friendshipBusiness = new FriendshipBussines()
            await friendshipBusiness.createFriendship(input)

            res.status(201).send("Nova amizade criada com sucesso!")
            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    public deleteFriendship = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const {userId, userFriendId } = req.body

            const input: FriendshipInputDTO = {
                userId,
                userFriendId
            }

            const friendshipBusiness = new FriendshipBussines()
            await friendshipBusiness.deleteFriendship(input)

            res.status(200).send("Amizade encerrada com sucesso!")
            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}

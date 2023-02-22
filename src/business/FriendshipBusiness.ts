import { CustomError } from "../error/CustomError";
import { Friendship, FriendshipInputDTO } from "../model/Friendship";
import { FriendshipDatabase } from "../data/FriendshipDatabase";
import { generateId } from "../services/idGenerator";
import { 
    FriendshipNotFound,
    IdenticalUser,
    NotBody, 
    NotUserFriendId, 
    NotUserId, 
    RegisteredFriendship, 
    UserFriendIdIsNotString, 
    userIdIsNotString
} from "../error/FriendshipErrors";

export class FriendshipBussines {
    
    public createFriendship = async ( input: FriendshipInputDTO ): Promise<void> => {
        try {
            const id: string = generateId()
            const { userId, userFriendId } = input
            
            if ( !userId && !userFriendId) {
               throw new NotBody() 
            }

            if (!userId) {
                throw new NotUserId()
            }
    
            if (!userFriendId) {
                throw new NotUserFriendId()
            }
    
            if (typeof userId !== "string") {
                throw new userIdIsNotString()
            }
    
            if (typeof userFriendId !== "string") {
                throw new UserFriendIdIsNotString()
            }

            if (userId === userFriendId) {
                throw new IdenticalUser()
            }
    
            const friendshipDatabase = new FriendshipDatabase()
            const checkingFriendship = await friendshipDatabase.getFriendshipByUserIds(input)

            if (checkingFriendship) {
                throw new RegisteredFriendship()
            }

            const friendship: Friendship = {
                id,
                userId,
                userFriendId
            }

            await friendshipDatabase.createFriendship(friendship)
  
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    public deleteFriendship = async ( input: FriendshipInputDTO ): Promise<void> => {
        try {
            const { userId, userFriendId } = input
            
            if ( !userId && !userFriendId) {
               throw new NotBody() 
            }

            if (!userId) {
                throw new NotUserId()
            }
    
            if (!userFriendId) {
                throw new NotUserFriendId()
            }
    
            if (typeof userId !== "string") {
                throw new userIdIsNotString()
            }
    
            if (typeof userFriendId !== "string") {
                throw new UserFriendIdIsNotString()
            }

            if (userId === userFriendId) {
                throw new IdenticalUser()
            }

            const friendshipDatabase = new FriendshipDatabase()
            const checkingFriendship = await friendshipDatabase.getFriendshipByUserIds(input)

            if (!checkingFriendship) {
                throw new FriendshipNotFound()
            }

            await friendshipDatabase.deleteFriendship(input)
  
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

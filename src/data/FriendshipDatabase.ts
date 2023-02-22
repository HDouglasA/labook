import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";
import { Friendship, FriendshipInputDTO } from "../model/Friendship";

export class FriendshipDatabase extends BaseDatabase {

    public createFriendship = async ( friendship: Friendship ): Promise<void> => {
        try {
            await FriendshipDatabase.connection.raw(`
                INSERT INTO labook_friendship (id, user_id, user_friend_id)
                VALUES(
                    "${friendship.id}", 
                    "${friendship.userId}", 
                    "${friendship.userFriendId}" 
                );
            `)
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    public getFriendshipByUserIds = async ( friendship: FriendshipInputDTO ): Promise<Friendship> => {
        try {
            const result = await FriendshipDatabase.connection.raw(`
                SELECT * FROM labook_friendship
                WHERE user_id LIKE "%${friendship.userId}" 
                AND user_friend_id LIKE "%${friendship.userFriendId}";
            `)

            return result[0][0]

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    public deleteFriendship = async ( friendship: FriendshipInputDTO ): Promise<void> => {
        try {
            await FriendshipDatabase.connection.raw(`
                DELETE FROM labook_friendship
                WHERE user_id LIKE "%${friendship.userId}" 
                AND user_friend_id LIKE "%${friendship.userFriendId}";
            `)
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}

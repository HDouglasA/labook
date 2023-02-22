import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";
import { Post } from "../model/Post";

export class PostDatabase extends BaseDatabase {

    public insertPost = async ( post: Post ): Promise<void> => {
        try {
            await PostDatabase.connection.raw(`
                INSERT INTO labook_posts (id, photo, description, type, author_id)
                VALUES(
                    "${post.id}", 
                    "${post.photo}", 
                    "${post.description}", 
                    "${post.type}",
                    "${post.authorId}" 
                );
            `)
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    public getPostById = async ( id:string ): Promise<Post> => {
        try {
            const result = await PostDatabase.connection.raw(`
                SELECT * FROM labook_posts
                WHERE id LIKE "%${id}";
            `)

            return result[0][0]

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}

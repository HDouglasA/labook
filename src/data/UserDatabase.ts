import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {

    public insertUser = async ( user: User ): Promise<void> => {
        try {

            await UserDatabase.connection.raw(`
                INSERT INTO labook_users (id, name, email, password)
                VALUES(
                    "${user.id}", 
                    "${user.name}", 
                    "${user.email.trim()}", 
                    "${user.password}" 
                );
            `)
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    public getUserByEmail = async ( email: string ): Promise<User> => {
        try {

            const result = await UserDatabase.connection.raw(`
                SELECT * FROM labook_users
                WHERE email LIKE "%${email.trim()}"
            `)

            return result[0][0]
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}

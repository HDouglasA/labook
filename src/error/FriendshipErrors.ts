import { CustomError } from "./CustomError";

export class NotBody extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetros 'userId' e 'UserFriendId' não foram informados ou estão incorretos!`
        )
    }
}

export class NotUserId extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetro 'userId' não foi informado ou está incorreto!`
        )
    }
}

export class NotUserFriendId extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetro 'userFriendId' não foi informado ou está incorreto!`
        )
    }
}

export class userIdIsNotString extends CustomError {
    constructor(){
        super(422, "O valor do parâmetro 'userId' deve ser do tipo string!")
    }
}

export class UserFriendIdIsNotString extends CustomError {
    constructor(){
        super(422, "O valor do parâmetro 'userFriendId' deve ser do tipo string!")
    }
}

export class RegisteredFriendship extends CustomError {
    constructor(){
        super(409, "Já existe uma amizade criada entre os usuários informados!")
    }
}

export class FriendshipNotFound extends CustomError{ 
    constructor(){
        super(404, "Amizade não encontrado, por favor verifique os valores informados e tente novamente!")
    }
}

export class IdenticalUser extends CustomError{ 
    constructor(){
        super(400, "Um usuário não pode fazer amizade com se mesmo!")
    }
}

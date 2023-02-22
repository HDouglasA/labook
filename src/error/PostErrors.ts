import { CustomError } from "./CustomError";

export class NotBody extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetros 'photo', 'description', 'type' e 'authorId' não foram informados ou estão incorretos!`
        )
    }
}

export class NotPhoto extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetro 'photo' não foi informado ou está incorreto!`
        )
    }
}

export class NotDescription extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetro 'description' não foi informado ou está incorreto!`
        )
    }
}

export class NotType extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetro 'type' não foi informado ou está incorreto!`
        )
    }
}

export class NotAuthorId extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetro 'authorId' não foi informado ou está incorreto!`
        )
    }
}

export class PhotoIsNotString extends CustomError {
    constructor(){
        super(422, "O valor do parâmetro 'photo' deve ser do tipo string!")
    }
}

export class DescriptionIsNotString extends CustomError {
    constructor(){
        super(422, "O valor do parâmetro 'description' deve ser do tipo string!")
    }
}

export class AuthorIdIsNotString extends CustomError {
    constructor(){
        super(422, "O valor do parâmetro 'authorId' deve ser do tipo string!")
    }
}

export class InvalidType extends CustomError {
    constructor(){
        super(422, "O valor do parâmetro 'type' deve ser 'normal' ou 'event'!")
    }
}

export class NotId extends CustomError {
    constructor(){
        super(422, "Por favor, insira o id do post que deseja retornar do banco de dados!")
    }
}

export class PostNotFound extends CustomError {
    constructor(){
        super(404, "Post não encontrado, por favor verifique o id informado e tente novamente!")
    }
}

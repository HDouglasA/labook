export interface Friendship {
    id: string,
    userId: string,
    userFriendId: string,
}

export interface FriendshipInputDTO {
    userId: string,
    userFriendId: string,
}

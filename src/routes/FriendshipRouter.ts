import { FriendshipController } from "../controller/FriendshipController";
import express from "express";

export const friendshipRouter = express.Router()

const friendshipController = new FriendshipController()

friendshipRouter.post("/create", friendshipController.createFriendship)
friendshipRouter.delete("/delete", friendshipController.deleteFriendship)

import { PostController } from './../controller/PostController';
import express from "express";

export const postRouter= express.Router()

const postController = new PostController()

postRouter.get("/:id", postController.getPostById)
postRouter.post("/create", postController.createPost)

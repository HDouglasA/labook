import { app } from "./app";
import { userRouter } from './routes/UserRouter';
import { postRouter } from './routes/PostRouter';
import { friendshipRouter } from "./routes/FriendshipRouter";

app.use("/user", userRouter)

app.use("/post", postRouter)

app.use("/friendship", friendshipRouter)

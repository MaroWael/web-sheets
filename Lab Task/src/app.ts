import  express  from "express";
import router from "./routes/routes";
const app = express()
const port = 2000

app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log("Welcome")
})
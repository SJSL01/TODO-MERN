const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const connectDB = require("./DB Config/DB")
const dotenv = require("dotenv")
const path = require("path")

dotenv.config()

const app = express()

app.use(morgan('tiny'))

app.use(express.json())
app.use(cors())


app.use("/auth", require("./Routes/Auth.js"))
app.use("/todo", require("./Routes/Todo"))

app.use(express.static(path.join(__dirname, "./Client/build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./Client/build/index.html"))
})


let PORT = process.env.PORT || 3008

app.listen(PORT, async () => {
    try {
        await connectDB()
        console.log(`Server up at ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})
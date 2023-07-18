const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173"
}));

mongoose.connect('mongodb+srv://vercel-admin-user:<password>@cluster0.vzvqi4v.mongodb.net/?retryWrites=true&w=majority')

require("./config/mongoose.config");
require("./routes/text.route")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
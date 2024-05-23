import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './db.js';
import Repo from './Models/Models.js';
import GitHubApiRoute from './Routes/GitHubApiRoute.js';
import GetDataDBRoute from './Routes/GetDataDBRoute.js';

dotenv.config();

const app = express();
app.use(cors());

app.use('/api', GitHubApiRoute);
app.use('/getRepos', GetDataDBRoute);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
    } catch (e) {
        console.log(e)
    }
};

start();

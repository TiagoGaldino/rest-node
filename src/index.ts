import express from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';
import errorHandler from './middlewares/error.handler.middleware';

const app = express();

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(usersRoute);
app.use(statusRoute);

app.use(errorHandler);

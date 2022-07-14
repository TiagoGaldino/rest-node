import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.listen(3000, () => {
    console.log('Aplicação execuntando na porta 3000!');
})

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'Sucesso total!'});
});
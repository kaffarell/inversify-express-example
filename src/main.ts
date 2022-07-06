import express from 'express';
import router from './controller';

const app = express();

app.use('/api', router);

app.listen(80, () => {
    console.log('Server listening on port 80');
});
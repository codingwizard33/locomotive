import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import api from './routes/api.js';

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: '*' }));

app.use(api);

// app.listen(process.env.PORT, () => {
//   console.log(`The app started on http://localhost:${process.env.PORT}`);
// });

export default app;

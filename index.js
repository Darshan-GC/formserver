import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import ownerRoutes from './Routes/ownerRoutes.js';
import dispatcherRoutes from './Routes/dispatcherRoutes.js';
import driverRoutes from './Routes/driverRoutes.js';
import brokerRoutes from './Routes/brokerRouter.js';
import customerRoutes from './Routes/customerRouter.js';
import addressBookRoutes from './Routes/addressBookRoute.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

let PORT = process.env.PORT || 3000;

app.use('/form/owner', ownerRoutes);
app.use('/form/dispatcher', dispatcherRoutes);
app.use('/form/driver', driverRoutes);
app.use('/form/broker', brokerRoutes);
app.use('/form/customer', customerRoutes);
app.use('/form/addressBook', addressBookRoutes);
app.get('/', (req, res) => {
  res.send('Server Running!!');
});

// Database

// /form/create
// /from/get

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// Server

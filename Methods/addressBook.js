import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({}, { strict: false });

import brokerEntry from '../Methods/broker.js';
import driverEntry from '../Methods/driver.js';
import customerEntry from '../Methods/customer.js';
import dispatcherEntry from '../Methods/dispatcher.js';
import ownerEntry from '../Methods/owner.js';
export const getForm = async (req, res) => {
  try {
    const data1 = await brokerEntry.find();
    const data2 = await driverEntry.find();
    const data3 = await customerEntry.find();
    const data4 = await dispatcherEntry.find();
    const data5 = await ownerEntry.find();
    const newData = {
      brokerEntry: data1,
      driverEntry: data2,
      customerEntry: data3,
      dispatcherEntry: data4,
      ownerEntry: data5,
    };
    res.status(200).json(newData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

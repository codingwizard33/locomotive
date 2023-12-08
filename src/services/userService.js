import { db, table } from '../config/aws.js';

export const userCreate = async (req) => {
  const params = {
    TableName: table.users,
    Item: req.body
  };

  try {
    await db.put(params).promise();

    return {
      status: 200,
      message: 'OK'
    };
  } catch (error) {
    return {
      status: 500,
      message: error
    };
  }
};

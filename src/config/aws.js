import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-south-1'
});

export const db = new AWS.DynamoDB.DocumentClient();

export const table = {
  users: 'users',
  subscribers: 'subscribers'
};

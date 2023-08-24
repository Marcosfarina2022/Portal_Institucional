import { Injectable } from '@nestjs/common';
import { Connection, createConnection } from 'mongoose';
import { EventEmitter } from 'events';

@Injectable()
export class MongoConexionService {
  private dbConnection: Connection;

  constructor() {
    this.createConnectionDB();
  }

  async createConnectionDB() {
    const DB_URI =
      'mongodb+srv://melinafigueroa89:santino3719@las-aguilas.djhwv1t.mongodb.net/?retryWrites=true&w=majority';

    this.dbConnection = createConnection(DB_URI);

    this.dbConnection.once('open', () => {
      console.log('Connected to MongoDB');
    });

    this.dbConnection.once('error', () => {
      console.log('Error connecting to MongoDB');
    })
  }
  getConnection(): Connection{
    return this.dbConnection;
  }
}

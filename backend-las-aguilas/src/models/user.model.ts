// src/models/user.model.ts
import { Schema, model } from 'mongoose';
import { User } from 'src/auth/interface/user.interface';

export const userSchema = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
});

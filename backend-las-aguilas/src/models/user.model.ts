// src/models/user.model.ts
import { Schema, model } from 'mongoose';

export const userSchema = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
});

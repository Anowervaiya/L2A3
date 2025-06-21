import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces/book.interface';

const bookSchema = new Schema<IUser>({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  author: {
    type: String,
    require: true,
    trim: true,
  },
  genre: {
    type: String,
    require: true,
    enum: [
      'FICTION',
      'NON_FICTION',
      'SCIENCE',
      'HISTORY',
      'BIOLOGY',
      'FANTASY',
    ],
  },

  isbn: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
  },
  copies: {
    type: Number,
    require: true,
    min: 0,
  },

  available: {
    type: Boolean,
    default: true,
  },
},
  {
    _id: true,
    timestamps:true
});


export const Book = model<IUser>("Book" , bookSchema)
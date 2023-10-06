import mongoose from 'mongoose'

const UsersSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

  },
  { versionKey: false }
);

const collectionName = 'users'
const UsersModel = mongoose.model('users', UsersSchema, collectionName)

export default UsersModel
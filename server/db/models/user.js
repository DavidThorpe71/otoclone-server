import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  profile: {
    firstName: String,
    lastName: String,
    bio: String,
    picture: { type: String, default: '' }
  }
});

UserSchema.pre('save', encryptPassword);

UserSchema.plugin(timestamp);

export default mongoose.model('User', UserSchema);
import { model, Schema } from 'mongoose';

const LabelSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  color: {
    type: String,
    require: true,
  },
});

export default model('Label', LabelSchema);

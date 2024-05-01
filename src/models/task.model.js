import { model, Schema } from 'mongoose';

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  last_updated_at: {
    type: Date,
  },
  date_start: {
    type: Date,
    required: true,
  },
  date_end: {
    type: Date,
    required: true,
  },
  label: {
    type: Schema.Types.ObjectId,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_lastname: {
    type: String,
    required: true,
  },
});

export default model('Task', TaskSchema);

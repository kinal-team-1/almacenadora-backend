import Task from '../models/task.model.js';
import cleanObject from '../utils/clean-object.js';

const MESSAGES = {
  INTERNAL_ERROR: 'Internal Server error',
  NOT_FOUND: 'Task not found',
};

export const getAllTasks = async (req, res) => {
  try {
    const { limit, page } = req.query();

    const [total, data] = await Promise.all([
      Task.countDocuments(),
      Task.find()
        .skip(Number(limit) * Number(page))
        .limit(Number(limit)),
    ]);

    return res.json({
      total,
      data,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
  }
};

export const createTask = async (req, res) => {
  try {
    const {
      title,
      user_name,
      user_lastname,
      description,
      isDone,
      date_start,
      date_end,
      label,
    } = req.body;

    const task = new Task(
      cleanObject({
        title,
        user_name,
        user_lastname,
        description,
        isDone,
        date_start,
        date_end,
        label,
      }),
    );

    await task.save();

    res.status(201).json({
      data: task,
      message: 'Task created successfully',
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: MESSAGES.INTERNAL_ERROR,
    });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: MESSAGES.NOT_FOUND });
    }

    return res.status(200).json({
      message: 'Task retrieved successfully',
      data: task,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
  }
};

export const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      user_name,
      user_lastname,
      description,
      isDone,
      date_start,
      date_end,
      label,
    } = req.body();

    const task = Task.findByIdAndUpdate(
      id,
      cleanObject({
        title,
        user_name,
        user_lastname,
        description,
        isDone,
        date_start,
        date_end,
        label,
      }),
      { new: true },
    );

    if (!task) {
      return res.status(404).json({
        message: MESSAGES.NOT_FOUND,
      });
    }

    return res.status(200).json({
      data: task,
      message: 'Task updated successfully',
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({
        message: MESSAGES.NOT_FOUND,
      });
    }

    return res.status().json({
      message: 'Task deleted successfully',
      data: task,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
  }
};

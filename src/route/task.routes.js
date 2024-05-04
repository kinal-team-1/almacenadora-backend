import { Router } from 'express';
import { body, param, query } from 'express-validator';
import validateChecks from '../middlewares/validate-checks.js';
import {
  createTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} from '../controllers/task.controllers.js';

const router = Router();

router
  .route('/')
  .get(
    [
      query('limit')
        .optional()
        .isInt()
        .withMessage(
          'if query param `limit` is present, it must be an integer',
        ),
      query('page')
        .optional()
        .isInt()
        .withMessage('if query param `page` is present, it must be an integer'),
      validateChecks,
    ],
    getAllTasks,
  )
  .post(
    [
      body('title')
        .isString()
        .withMessage('The field `title` is required and must be a string')
        .isLength({ min: 3, max: 50 })
        .withMessage(
          'The field `title` is required and must be between 3 and 50 characters',
        ),
      body('description')
        .isString()
        .withMessage('The field `description` is required and must be a string')
        .isLength({ min: 3, max: 255 })
        .withMessage(
          'The field `description` is required and must be between 3 and 255 characters',
        ),
      body('date_start')
        .isISO8601()
        .withMessage(
          'The field `date_start` is required and must be a date in YYYY-MM-DD format',
        ),
      body('date_end')
        .isISO8601()
        .withMessage(
          'The field `date_end` is required and must be a date in YYYY-MM-DD format',
        ),
      body('label')
        .optional()
        .isMongoId()
        .withMessage(
          'If field `label` is provided, it must be a valid MongoDB ObjectId',
        ),
        body('isDone')
        .optional()
        .isBoolean()
        .withMessage('If field `isDone` is provided, it must be a boolean'),
        body('user_name')
        .isString()
        .withMessage('The field `user_name` is required and must be a string')
        .isLength({ min: 1, max: 50 })
        .withMessage(
          'The field `user_name` is required and must be between 1 and 50 characters',
        ),
      body('user_lastname')
        .isString()
        .withMessage('The field `user_lastname` is required and must be a string')
        .isLength({ min: 1, max: 50 })
        .withMessage(
          'The field `user_lastname` is required and must be between 1 and 50 characters',
        ),
      validateChecks,
    ],
    createTask,
  );

router
  .route('/:id')
  .get(
    [
      param('id')
        .isMongoId()
        .withMessage('The task ID must be a valid MongoDB ObjectId'),
      validateChecks,
    ],
    getTaskById,
  )
  .put(
    [
      param('id')
        .isMongoId()
        .withMessage('The task ID must be a valid MongoDB ObjectId'),
      body('title')
        .optional()
        .isString()
        .withMessage('If field `title` is provided, it must be a string')
        .isLength({ min: 3, max: 50 })
        .withMessage(
          'If field `title` is provided, it must be between 3 and 50 characters',
        ),
      body('description')
        .optional()
        .isString()
        .withMessage('If field `description` is provided, it must be a string')
        .isLength({ min: 3, max: 255 })
        .withMessage(
          'If field `description` is provided, it must be between 3 and 255 characters',
        ),
      body('isDone')
        .optional()
        .isBoolean()
        .withMessage('If field `isDone` is provided, it must be a boolean'),
      body('date_start')
        .optional()
        .isISO8601()
        .withMessage(
          'If field `date_start` is provided, it must be a date in YYYY-MM-DD format',
        ),
      body('date_end')
        .optional()
        .isISO8601()
        .withMessage(
          'If field `date_end` is provided, it must be a date in YYYY-MM-DD format',
        ),
      body('label')
        .optional()
        .isMongoId()
        .withMessage(
          'If field `label` is provided, it must be a valid MongoDB ObjectId',
        ),
      validateChecks,
    ],
    updateTaskById,
  )
  .delete(
    [
      param('id')
        .isMongoId()
        .withMessage('The task ID must be a valid MongoDB ObjectId'),
      validateChecks,
    ],
    deleteTaskById,
  );

export default router;

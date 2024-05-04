import { Router } from 'express';
import { body, param, query } from 'express-validator';
import {
  postLabel,
  getAllLabels,
  deleteLabel,
} from '../controllers/label.controller.js';
import {
  validateChecks,
  validateColorExists,
} from '../middlewares/validate-checks.js';

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
    getAllLabels,
  )
  .post(
    [
      body('name')
        .custom(validateColorExists)
        .isString()
        .withMessage('The field `name` is required and must be a string')
        .isLength({ min: 4, max: 20 })
        .withMessage(
          'The field `name` is required and must be between 4 and 20 characters',
        ),
      body('color')
        .contains('#')
        .withMessage('Color must have a `#` character')
        .isHexColor()
        .withMessage('The field `color` must be an hexadecimal color'),
      validateChecks,
    ],
    postLabel,
  );
router
  .route('/:id')
  .delete(
    [
      param('id')
        .isMongoId()
        .withMessage('The label ID must be a valid MongoDB ObjectId'),
      validateChecks,
    ],
    deleteLabel,
  );

export default router;

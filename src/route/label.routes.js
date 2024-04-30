import { Router } from 'express';
import { body, param, query } from 'express-validator';
import {
    postLabel,
    getAllLabels,
    getLabelById,
    deleteLabel
} from '../controllers/label.controller'
import validateChecks from '../middlewares/validate-checks';

const router = Router();

router
    .route('/')
    .get(
        [

        ], getAllLabels)
    .post(
        [
            body('name')
                .isString()
                .withMessage('The field `name` is required and must be a string')
                .isLength({ min: 4, max: 20 })
                .withMessage('The field `name` is required and must be between 4 and 20 characters'),
            body('color')
                .isString()
                .withMessage('The field `color` is required and must be a string')
                .isLength({ exact: 7 })
                .withMessage('The field `color` must be 7 characters'),
        ], postLabel);
router
    .route('/:id')
    .get(
        [
            param('id')
                .isMongoId()
                .withMessage('The label ID must be a valid MongoDB ObjectId'),
            validateChecks
        ], getLabelById)
    .delete(
        [
            param('id')
                .isMongoId()
                .withMessage('The label ID must be a valid MongoDB ObjectId'),
            validateChecks
        ], deleteLabel);


export default router;
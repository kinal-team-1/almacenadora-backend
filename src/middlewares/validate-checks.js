import { validationResult } from 'express-validator';
import Label from '../models/label.model.js';

const validateChecks = async (req, res, next) => {
  const result = validationResult(req);
  console.log({ errors: result.errors });
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  return next();
};

const validateColorExists = async (name = '') => {
  const colorName_E = await Label.findOne({ name });
  if (colorName_E) {
    throw new Error(`The color name ${name} ins already exists`);
  }
};

export { validateChecks, validateColorExists };

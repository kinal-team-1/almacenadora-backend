import Label from '../models/label.model.js';
import cleanObject from '../utils/clean-object.js';

const MESSAGES = {
  INTERNAL_ERROR: 'Internal Server error',
  NOT_FOUND: 'Label not found',
};

export const getAllLabels = async (req, res) => {
  try {
    const { limit, page } = req.query;

    const [total, data] = await Promise.all([
      Label.countDocuments(),
      Label.find()
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
export const postLabel = async (req, res) => {
  try {
    const { name, color } = req.body;

    const label = new Label(
      cleanObject({
        name,
        color,
      }),
    );
    console.log('LABEL IS BEING CREATED');
    await label.save();

    return res.status(201).json({
      data: label,
      message: 'Label created successfully',
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
  }
};
export const deleteLabel = async (req, res) => {
  try {
    const { id } = req.params;

    const label = await Label.findByIdAndDelete(id);

    if (!label) {
      return res.status(404).json({ message: MESSAGES.NOT_FOUND });
    }

    return res.status(200).json({
      data: label,
      message: 'Label deleted sucessfully',
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
  }
};

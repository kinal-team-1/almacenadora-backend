import Label from '../models/label.model';
import cleanObject from '../utils/clean-object';

const MESSAGES = {
    INTERNAL_ERROR: 'Internal Server error',
    NOT_FOUND: 'Label not found',
};

export const getAllLabels = async (req, res) => {
    try {
        const { limit, page } = req.query;

        cosnt[total, data] = await Promise.all([
            Label.countDocuments(),
            Label.find()
                .kip(Number(limit) * Number(page))
                .limit(Number(limit))
        ]);

        return res.json({
            total,
            data
        });
    } catch (e) {
        conse.log(e)
        return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
    }
}
export const getLabelById = async (req, res) => {
    try {
        const { id } = req.params;
        const label = await Label.findById(id);

        if (!label) {
            return res.status(404).json({ message: MESSAGES.NOT_FOUND });
        }

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
    }
}
export const postLabel = async (req, res) => {
    try {
        const {
            name,
            color
        } = req.body;

        const label = new Label(
            cleanObject({
                name,
                color
            })
        );
        await label.save();

        res.status(201).json({
            data: label,
            message: 'Label created successfully'
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
    }
}
export const deleteLabel = async (req, res) => {
    try {
        const { id } = req.params;

        const label = await Label.findById(id);

        if (!label) {
            return res.status(404).json({ message: MESSAGES.NOT_FOUND });
        }

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: MESSAGES.INTERNAL_ERROR });
    }
}

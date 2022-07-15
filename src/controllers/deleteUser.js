const { remove, verify } = require('../services/deleteUser');

module.exports = async (req, res) => {
    const id = await verify(req.user);
    await remove({ id });

    return res.status(204).send();
};
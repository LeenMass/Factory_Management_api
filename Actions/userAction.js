const userService = require('../Services/userService');

const limitUserActionsMiddleware = async (req, res, next) => {
    const userId = req.user?.id;

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const result = await userService.userAction(userId);
        req.userActionNum = result;
        if (result.remaining == 0) {
            res.clearCookie('token', {
                httpOnly: true,
                sameSite: 'lax',
                secure: false
            });
            req.user = null;

            return res.status(404).json({ message: result.message });

        }

        else { next(); }


    } catch (error) {


        res.status(500).json({ error: error.message });
    }
};

module.exports = limitUserActionsMiddleware;

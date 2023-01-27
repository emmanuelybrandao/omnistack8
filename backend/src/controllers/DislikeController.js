const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        //verifica se o user esta tentando dar like em outro que ao existe
        if(!targetDev) {
            return res.status(400).json({ error: 'Dev does not exist.'});
        };
    
        //registro de likes
        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();
        
        return res.json(loggedDev);
    }
};
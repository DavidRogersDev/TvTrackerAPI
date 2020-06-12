const express = require('express');

function routes(TvShow) {

    const appRouter = express.Router();

    appRouter.route('/tvshows')
        .post((req, res) => {
            const tvShow = new TvShow(req.body);
            tvShow.save();
            return res.status(201).json(tvShow);

        })
        .get((req, res) => {

            const query = {};

            if (req.query.title) {
                query.Title = req.query.title;
            }

            TvShow.find(query, (err, shows) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(shows);
            });
        });


    return appRouter;

};

module.exports = routes;
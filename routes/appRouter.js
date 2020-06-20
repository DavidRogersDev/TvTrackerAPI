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

    appRouter.use('/tvshows/:showId', (req, res, next) => {

        TvShow.findById(req.params.showId, (err, tvShow) => {
            if (err) {
                return res.send(err);
            }

            if (tvShow) {
                req.tvShow = tvShow;
                return next();
            }

            return res.sendStatus(404);
        });

    });

    appRouter.route('/tvshows/:showId')
        .get((req, res) => { res.json(req.tvShow) })
        .put((req, res) => {
            const { tvShow } = req;

            tvShow.title = req.body.title;
            tvShow.author = req.body.author;
            tvShow.genre = req.body.genre;
            tvShow.read = req.body.read;

            tvShow.save();

            return res.json(tvShow);

        })
        .patch((req, res) => {
            const { tvShow } = req;

            if (req.body._id) {
                delete req.body._id;
            }

            Object.entries(req.body).forEach(item => {
                const key = item[0];
                const value = item[1];
                tvShow[key] = value;
            });

            req.tvShow.save((err) => {
                if (err) {
                    return res.send(err);
                }

                return res.json(tvShow)
            });
        }).delete((req, res) => {
            req.tvShow.remove((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.sendStatus(204);
            });
        });

    return appRouter;

};

module.exports = routes;
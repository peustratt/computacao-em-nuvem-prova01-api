const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Store = require("../models/store");

router
  .route("/")
  // GET stores - get all stores
  .get((req, res, next) =>
    Promise.resolve()
      .then(() => Store.findAll())
      .then((stores) => res.status(200).json(stores))
      .catch((err) => next(err))
  )
  // POST /store - create a new store
  .post((req, res, next) =>
    Promise.resolve()
      .then(() => Store.create(req.body))
      .then((store) => res.status(201).json(store))
      .catch((err) => next(err))
  );

router
  .route("/:id")
  // GET /store/:id - get a store by id
  .get((req, res, next) =>
    Promise.resolve()
      .then(() => Store.findByPk(req.params.id))
      .then((store) =>
        store ? res.status(200).json(store) : next(createError(404))
      )
      .catch((err) => next(err))
  )
  // PATCH /store/:id - update some store fields
  .patch((req, res, next) =>
    Promise.resolve()
      .then(() => Store.findByPk(req.params.id))
      .then((store) => store.update(req.body))
      .then((store) => res.status(200).json(store))
      .catch((err) => next(err))
  )
  // PUT /store/:id - update all store fields
  .put((req, res, next) =>
    Promise.resolve()
      .then(() => Store.findByPk(req.params.id))
      .then((store) => store.update(req.body))
      .then((store) => res.status(201).json(store))
      .catch((err) => next(err))
  )
  .delete((req, res, next) =>
    Promise.resolve()
      .then(() =>
        Store.destroy({
          where: {
            id: req.params.id,
          },
        })
      )
      .then(() => res.status(201).json({ message: "store deleted!" }))
      .catch((err) => next(err))
  );
// DELETE /store/:id - delete a store

module.exports = router;

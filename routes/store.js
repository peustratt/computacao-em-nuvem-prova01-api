const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Store = require("../models/store");

router
  .route("/")
  /**
   * get all stores
   * @route GET /store
   * @group Store - api
   * @returns {Array<Store>} 200 - An array of store info
   * @returns {Error}  default - Unexpected error
   */
  .get((req, res, next) =>
    Promise.resolve()
      .then(() => Store.findAll())
      .then((stores) => res.status(200).json(stores))
      .catch((err) => next(err))
  )
  // POST /store - create a new store
  /**
   * create a new stores
   * @route POST /store
   * @group Store - api
   * @param {StorePost.model} store.body.required - the new store
   * @returns {Store} 201 - my store
   * @returns {Error}  default - Unexpected error
   */
  .post((req, res, next) =>
    Promise.resolve()
      .then(() => Store.create(req.body))
      .then((store) => res.status(201).json(store))
      .catch((err) => next(err))
  );

router
/**
   * get store by id
   * @route GET /store/{id}
   * @group Store - api
   * @param {string} id.path.required - store id
   * @returns {Store} 200 - A store info
   * @returns {Error}  default - Unexpected error
   */
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
  /**
   * put store by id
   * @route PUT /store/{id}
   * @group Store - api
   * @param {string} id.path.required - store id
   * @param {StorePost.model} store.body.required - the new store
   * @returns {StorePost}  203 - my store
   * @returns {Error}  default - Unexpected error
   */
  // PUT /store/:id - update all store fields
  .put((req, res, next) =>
    Promise.resolve()
      .then(() => Store.findByPk(req.params.id))
      .then((store) => store.update(req.body))
      .then((store) => res.status(201).json(store))
      .catch((err) => next(err))
  )
    /**
   * put store by id
   * @route DELETE /store/{id}
   * @group Store - api
   * @param {string} id.path.required - store id
   * @returns {StoreDelete}  201 - my store
   * @returns {Error}  default - Unexpected error
   */
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

const { Router } = require("express");
const Restaurant = require("../models").restaurant;
const Visit = require("../models").visit;
const Like = require("../models").like;
const User = require("../models").user;

const router = new Router();

router.get("/restaurants", async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findAll({
      include: [
        {
          model: Visit,
          include: [
            {
              model: Like,
            },
          ],
        },
        {
          model: User,
        },
      ],
    });
    if (!restaurant) {
      res.status(404).send("Page not found");
    } else {
      res.status(200).send(restaurant);
    }
  } catch (error) {
    console.log(error);
    next(e);
  }
});

module.exports = router;

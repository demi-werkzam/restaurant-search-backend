const User = require("./models").user;
const Restaurant = require("./models").restaurant;
const Visits = require("./models").visit;
const Likes = require("./models").like;

const getRestaurant = async () => {
  try {
    const resataurants = await Restaurant.findAll({
      include: [
        {
          model: Visits,
          include: [
            {
              model: Likes,
            },
          ],
        },
      ],
    });
    const toDisplay = resataurants.map((resataurant) =>
      resataurant.get({ plain: true })
    );
    console.log("table", toDisplay);
  } catch (error) {
    console.log(error);
  }
};

getRestaurant();

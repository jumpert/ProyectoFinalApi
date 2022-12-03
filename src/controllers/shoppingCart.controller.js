const Item = require("../models/items");
const User = require("../models/users");

const getCartItems = async (req, res) => {
  try {
    const item = await Item.find();
    if (item) {
      return res.status(200).json(item);
    }
    return res.status(400).send("No se pudo procesar su solicitud");
  } catch (error) {
    return res.status(500).send("Ha ocurrido un problema");
  }
};

// get a item from the database
const getCartItem = async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    if (item) {
      return res.status(200).json(item);
    }
    return res.status(404).send("No se encontró ningún item con ese id");
  } catch (error) {
    return res.status(500).send("Ha ocurrido un problema");
  }
};

// add cartItems to the database
const addCartItem = async (req, res) => {
  const { id } = req.params;
  const { cart } = req.body;
  try {
    const user = await User.updateOne({ _id: 1 }, { $addToSet: { cart: id } });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(400).send("No se pudo procesar su solicitud");
  } catch (error) {
    return res.status(500).send("Ha ocurrido un problema");
  }
};

// delete cartItem to the database
const removeCartItem = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.updateOne({ _id: 1 }, { $pull: { cart: id } });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(400).send("No se pudo procesar su solicitud");
  } catch (error) {
    return res.status(500).send("Ha ocurrido un problema");
  }
};

module.exports = {
  getCartItems,
  addCartItem,
  removeCartItem,
};

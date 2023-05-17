const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//create web token function
const createToken = (_id) => {
    return jwt.sign({ _id: _id }, process.env.SECRET_KEY, { expiresIn: '1d' })
}

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        const { name, cart } = await User.findOne({ email: email }).select('name cart -_id')
        const token = createToken(user._id)

        res.status(200).json({ name, email, token, cart })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//signup user
const signupUser = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const user = await User.signup(name, email, password)

        const token = createToken(user._id)

        res.status(200).json({ name, email, token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//add to cart
const addToCart = async (req, res) => {
    const { email, cart } = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { email: email, "cart.products.productId": cart.product.productId },
            {
                $inc: { "cart.products.$.quantity": cart.product.quantity },
            },
            { new: true }
        );

        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            // If the product doesn't exist, add it to the cart
            const newUser = await User.findOneAndUpdate(
                { email: email },
                {
                    $push: {
                        "cart.products": {
                            productId: cart.product.productId,
                            quantity: cart.product.quantity
                        }
                    },
                },
                { new: true }
            );

            if (newUser) {
                res.status(200).json(newUser);
            } else {
                throw new Error("Failed to add product to cart.");
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCart = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email }).select('cart').lean();
        res.status(200).json(user.cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteItemFromCart = async (req, res) => {
    const { email, product_id } = req.body;
    const { id } = req.params;
    try {
        const userCart = await User.findOneAndUpdate(
            { email: email },
            {
                $pull: {
                    "cart.products": {
                        productId: id
                    }
                }
            },
            { new: true }
        )
        res.status(200).json(userCart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const decrementItemfromCart = async (req, res) => {
    const { email, product_id } = req.body;
    const { id } = req.params;
    try {
        const userCart = await User.findOneAndUpdate(
            { email: email, "cart.products.productId": id },
            {
                $inc: { "cart.products.$.quantity": -1 },
            },
            { new: true }
        );

        // Check if the quantity is 0 after decrementing
        if (userCart && userCart.cart) {
            const productIndex = userCart.cart.products.findIndex(
                (product) => product.productId === id
            );
            if (productIndex !== -1 && userCart.cart.products[productIndex].quantity === 0) {
                // If quantity is 0, remove the product from the cart
                userCart.cart.products.splice(productIndex, 1);
                await userCart.save();
            }
        }

        res.status(200).json(userCart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const incrementItemfromCart = async (req, res) => {
    const { email, product_id } = req.body;
    const { id } = req.params;
    try {
        const userCart = await User.findOneAndUpdate(
            { email: email, "cart.products.productId": id },
            {
                $inc: { "cart.products.$.quantity": 1 },
            },
            { new: true }
        );

        res.status(200).json(userCart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginUser, signupUser, addToCart, getCart, deleteItemFromCart, decrementItemfromCart, incrementItemfromCart }

const zod = require('zod');

const schema = zod.object({
    username: zod.string(),
    password: zod.string().min(8) // Assuming a minimum length of 8 characters for the password
});

async function Authentications(req, res, next) {
    const { username, password } = req.headers;

    try {
        // Validate the username and password against the schema
        schema.parse({ username, password });

        // If validation succeeds, proceed to the next middleware
        next();
    } catch (error) {
        // If validation fails, respond with a 400 Bad Request status and an error message
        res.status(400).json({
            msg: "Check inputs",
            error: error.errors // This provides more detailed error messages from Zod
        });
    }
}

module.exports = Authentications;

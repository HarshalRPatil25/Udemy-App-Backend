# Udemy-App-Backend

Developed a backend for a Udemy-like application enabling admin creation and course management with secure authentication. Additionally, users can sign up, view available courses, and purchase them securely.

## Getting Started

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone <repository_url>
cd udemy-app-backend
```

### Download Dependencies

Once you have cloned the repository, navigate to the project directory and install the dependencies:

```bash
npm install
```

### Set Up MongoDB

Before running the application, make sure you have MongoDB installed and running locally or provide a MongoDB instance URL in the `db/index.js` file.

```javascript
// db/index.js

const mongoose = require('mongoose');

// Provide your MongoDB instance URL here
const mongoURI = 'mongodb://localhost:27017/udemy';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
```

### Start the Server

Once MongoDB is set up and running, you can start the server by executing the following command:

```bash
node index.js
```

This will start the server and it will be running on the specified port (usually port 3000 by default). You can access the API endpoints using a tool like Postman or by integrating them into your frontend application.

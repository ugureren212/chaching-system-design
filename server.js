const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// Redis client setup
const redisClient = redis.createClient({
    url: 'redis://localhost:6379'
});

// Connect to Redis
(async () => {
    try {
        await redisClient.connect();
        console.log('Connected to Redis successfully');
    } catch (err) {
        console.error('Redis connection error:', err);
    }
})();

// Basic middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
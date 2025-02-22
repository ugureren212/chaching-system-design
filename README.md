# Fish Species Information API with Redis Caching

A Node.js application that fetches fish species information from the FishWatch API and implements Redis caching for improved performance.

## Prerequisites

Before running the application, make sure you have the following installed:
- Node.js (v14 or higher)
- Redis server
- npm (Node Package Manager)

## Installation

1. Install Redis (if not already installed):
   ```bash
   # For macOS using Homebrew
   brew install redis

   # For Ubuntu/Debian
   sudo apt-get install redis-server
   ```

2. Start Redis server:
   ```bash
   # Using Homebrew services on macOS
   brew services start redis
   
   # Or start Redis directly
   redis-server
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

## Running the Application

You can run the application in two modes:

### Development Mode (with auto-reload)
```bash
npm run dev
```
This will start the server using nodemon, which automatically restarts when you make changes to the code.

### Production Mode
```bash
npm start
```
This will start the server normally.

The server will run on port 3000 by default (http://localhost:3000).

## API Endpoints

### Get Fish Species Information
```bash
GET /fish/:species
```
Example:
```bash
curl http://localhost:3000/fish/red-snapper
```

- The first request will fetch data from the FishWatch API
- Subsequent requests within 180 seconds (3 minutes) will return cached data
- Response includes `fromCache` boolean indicating if the data was served from cache

## Cache Details
- Cache duration: 180 seconds (3 minutes)
- Cache automatically expires after the duration
- Redis is used as the caching layer

## Environment Variables
- `PORT`: Server port (default: 3000)
- Redis connection assumes default localhost:6379

## Development
- Source code is in `server.js`
- Uses Express.js for the web server
- Uses Redis for caching
- Uses Axios for API requests

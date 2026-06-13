// [Node.js] require() loads an installed package from node_modules.
// 'express' is the web framework that handles HTTP requests (GET, POST, etc.)
const express = require('express')

// [Express] Creates the server application. Think of this as turning the engine on.
// 'app' is the object you use to define routes and settings.
const app = express()

// [Express] Middleware — runs on EVERY incoming request before it hits any route.
// express.json() reads the request body and converts JSON text into a JS object.
// Without this, req.body would be undefined in POST/PUT requests.
app.use(express.json())

// [Express] Defines a route: when someone sends a GET request to '/' (root URL),
// run this function. req = the incoming request, res = the response you send back.
app.get('/', (req, res) => {
  // [Express] res.json() sends a JSON response back to the caller and closes the connection.
  res.json({ message: 'Telecom API is running fine bro!' })
})

// [Node.js] The port number this server will listen on.
// Port 4040 means: http://localhost:4040
const PORT = 4040

//[Node.js + Express] Starts the server and keeps it running, waiting for requests.
// The callback function fires once — only when the server successfully starts.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
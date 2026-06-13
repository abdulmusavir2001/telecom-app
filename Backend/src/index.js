const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Telecom API is running fine bro!' })
})

const PORT = 4040
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
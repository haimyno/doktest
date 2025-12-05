const express = require('express');
const app = express();

const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('🚀 CI/CD Demo App Deployed via Dokployy!. This is my first CI/CD');
});

app.listen(PORT, () => console.log(`My Server is running on port ${PORT}   purpose`));

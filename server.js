const express = require('express');
const app = express();

const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('🚀 CI/CD Demo App Deployed via Dokploy!. This is my first CI/CD and I am haimanot');
});

app.listen(PORT, () => console.log(`My Server is running on port ${PORT}   purpose`));

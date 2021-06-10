const express = require('express');
const app = express();
const port = 3000;

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(`./node_modules/`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`./public/index.html`));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('listening on %d', port);
});

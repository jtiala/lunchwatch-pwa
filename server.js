const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${app.get('port')}`);
});

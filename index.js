const express = require('express');

// require('./patrones/singleton');
// require('./patrones/simple-factory');
// require('./patrones/facade');
// require('./patrones/decorator');
// require('./patrones/adapter');
// require('./patrones/iterator');
// require('./patrones/chain-of-responsability');
require('./patrones/dao');

const app =  express();

app.listen( 3000, () => {
  console.log(`Server started on port 3000`);
});
const server = require("./app");
require('dotenv').config();

console.log('teste', process.env.JAWSDB_URL)
server.listen(process.env.PORT || 80, () => {
  console.log(`Server is running on port: ${process.env.PORT || 80}`);
});


const express = require('express');
require('./services/passport'); // No const because it returns nothing, could be const passport = ..

const app = express();

require('./routes/authRoutes')(app); // Calls the app immediatly after
/* Same as 

const authRoutes = require('./routes/authRoutes');
authRoutes(app);

*/

// Listens to port or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
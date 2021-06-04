const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Sorry, Buddy! This is the wrong route.</h1>")
});

module.exports = router;
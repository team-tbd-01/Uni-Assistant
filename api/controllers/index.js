const express = require('express');
const router = express.Router();


// Load each controller
const userController = require('./user.js');
const schoolController = require('./school.js');
const courseController = require('./course.js');
const departmentController = require('./department.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/users', userController);
router.use('/schools', schoolController);
router.use('/departments', departmentController);
router.use('/courses', courseController);
router.use('/application-configuration', appConfigController);


module.exports = router;
const express = require('express');
const router = express.Router();


// Load each controller
const userController = require('./user.js');
const schoolController = require('./school.js');
const courseController = require('./course.js');
const departmentController = require('./department.js');
const postController = require('./post.js');
const appConfigController = require('./appConfig.js');
const descriptionController = require('./description.js');
const commetController = require('./comment.js');
const commetlikeController = require('./commentlike.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/users', userController);
router.use('/schools', schoolController);
router.use('/departments', departmentController);
router.use('/courses', courseController);
router.use('/application-configuration', appConfigController);
router.use('/posts', postController);
router.use('/descriptions', descriptionController);
router.use('/comments', commetController);
router.use('/commentslikes', commetlikeController);


module.exports = router;
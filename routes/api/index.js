const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const TagRoutes = require('./Tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/Tags', TagRoutes);

module.exports = router;

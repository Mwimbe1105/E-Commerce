const { ProductTag } = require('../models');

const productTagData = [
  {
    productID: 1,
    TagId: 6,
  },
  {
    productID: 1,
    TagId: 7,
  },
  {
    productID: 1,
    TagId: 8,
  },
  {
    productID: 2,
    TagId: 6,
  },
  {
    productID: 3,
    TagId: 1,
  },
  {
    productID: 3,
    TagId: 3,
  },
  {
    productID: 3,
    TagId: 4,
  },
  {
    productID: 3,
    TagId: 5,
  },
  {
    productID: 4,
    TagId: 1,
  },
  {
    productID: 4,
    TagId: 2,
  },
  {
    productID: 4,
    TagId: 8,
  },
  {
    productID: 5,
    TagId: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;

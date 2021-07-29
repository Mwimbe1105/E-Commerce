const { Tag } = require('../models');

const tagData = [
  {
    TagName: 'rock music',
  },
  {
    TagName: 'pop music',
  },
  {
    TagName: 'blue',
  },
  {
    TagName: 'red',
  },
  { 
    TagName: 'green',
  },
  {
    TagName: 'white',
  },
  {
    TagName: 'gold',
  },
  {
    TagName: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

const mongoose = require('mongoose');

const indexes = [
  // Example: Add an index for faster user lookup by username
  {
    name: 'username_idx',
    key: { username: 'asc' },
    options: { unique: true },
  },
  // Add more indexes as needed
];

indexes.forEach((index) => {
  mongoose.connection.db.createIndex(index.key, index.options);
});

module.exports = {};
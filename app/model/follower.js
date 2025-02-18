'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const FollowerSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'User' },
    target: { type: mongoose.Types.ObjectId, ref: 'User' }, // follower/fan user ID
  }, { timestamps: true }); // The {timestamps: true} option creates a createdAt and updatedAt field

  FollowerSchema.index({ userId: 1 });

  return mongoose.model('Follower', FollowerSchema);
};


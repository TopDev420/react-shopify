module.exports = class MemoryStrategy {
  constructor() {
    this.store = {};
  }

  storeShop({ shop, accessToken, data = {} }, done) {
    this.store[shop] = Object.assign(
      {},
      {
        accessToken,
      },
      data
    );

    return done(null, this.store[shop]);
  }

  getShop({ shop }, done) {
    return done(null, this.store[shop]);
  }
};

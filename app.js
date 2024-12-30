const Line = {
  get lastPointPosition() {
    return this.points.at(-1).currentPosition;
  },

  randomSign(probabilityNegative = 0.5) {
    if (probabilityNegative < 0 || probabilityNegative > 1) {
      throw new Error('Probability most be a number between 0 and 1.');
    }

    return Math.random() < probabilityNegative ? -1 : 1;
  },

  createNextPoint(times = 1) {
    for (let index = 0; index < times; index++) {
      this.points.push({
        previewPosition: this.lastPointPosition,
        currentPosition: this.lastPointPosition - this.randomSign(),
      });
    }
  },

  points: [
    {
      previewPosition: null,
      currentPosition: 5,
    },
    {
      previewPosition: 5,
      currentPosition: 6,
    },
    {
      previewPosition: 6,
      currentPosition: 5,
    },
    {
      previewPosition: 5,
      currentPosition: 4,
    },
    {
      previewPosition: 4,
      currentPosition: 5,
    },
  ],
};

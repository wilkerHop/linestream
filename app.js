const Line = {
  get lastPointPosition() {
    return this.points.at(-1);
  },

  randomSign(probabilityNegative = 0.5) {
    if (probabilityNegative < 0 || probabilityNegative > 1) {
      throw new Error('A probabilidade deve estar entre 0 e 1.');
    }

    return Math.random() < probabilityNegative ? -1 : 1;
  },

  generateNewPosition(previewPosition) {
    if (!previewPosition) {
      throw new Error('No preview position provided');
    }

    return previewPosition - this.generateNewPosition();
  },

  createNextPoint(times = 1) {
    for (let index = 0; index < times; index++) {
      this.points.push({
        previewPosition: this.lastPointPosition,
        currentPosition: this.generateNewPosition(this.lastPointPosition),
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

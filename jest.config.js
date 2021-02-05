module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    'src(.*)$': '<rootDir>/src/$1',
  },
  clearMocks: true,
  // resetMocks: true
};

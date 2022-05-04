import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    collectCoverage: true,
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>tests/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/tests/testsSetup/setupTests.js'],
};
export default config;

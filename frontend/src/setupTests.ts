/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import '@testing-library/jest-dom';

// import { jest } from '@jest/globals';

// (global as any).jest = jest;

expect.extend(matchers);

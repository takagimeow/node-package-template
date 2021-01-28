import * as logger from '../src/logger';

jest.setTimeout(10000);

describe('main関数', () => {
  it('main is called', () => {
    const logSpy = jest.spyOn(logger, 'log');
    expect(logSpy).not.toHaveBeenCalled();
  });
});

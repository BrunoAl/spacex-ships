import { isEmailValid, addPagesToPaths } from './';

describe('utils', () => {
  describe('isEmailValid', () => {
    it('should return false', () => {
      expect(isEmailValid('')).toBe(false);
      expect(isEmailValid('112233')).toBe(false);
      expect(isEmailValid('random.string')).toBe(false);
      expect(isEmailValid('random@string')).toBe(false);
      expect(isEmailValid('random.string.com')).toBe(false);
    });
    it('should return true', () => {
      expect(isEmailValid('bruno@gmail.com')).toBe(true);
      expect(isEmailValid('bruno@yahoo.ig')).toBe(true);
    });
  });

  describe('addPagesToPaths', () => {
    const testPaths = [
      { params: { sortBy: 'name' } },
      { params: { sortBy: 'type' } },
      { params: { sortBy: 'active' } },
      { params: { sortBy: 'year_built' } },
      { params: { sortBy: 'home_port' } },
    ];

    it('should add pages 1 to 3 to the paths', () => {
      expect(addPagesToPaths(testPaths, ['1', '2', '3'])).toEqual([
        { params: { sortBy: 'name', page: '1' } },
        { params: { sortBy: 'type', page: '1' } },
        { params: { sortBy: 'active', page: '1' } },
        { params: { sortBy: 'year_built', page: '1' } },
        { params: { sortBy: 'home_port', page: '1' } },
        { params: { sortBy: 'name', page: '2' } },
        { params: { sortBy: 'type', page: '2' } },
        { params: { sortBy: 'active', page: '2' } },
        { params: { sortBy: 'year_built', page: '2' } },
        { params: { sortBy: 'home_port', page: '2' } },
        { params: { sortBy: 'name', page: '3' } },
        { params: { sortBy: 'type', page: '3' } },
        { params: { sortBy: 'active', page: '3' } },
        { params: { sortBy: 'year_built', page: '3' } },
        { params: { sortBy: 'home_port', page: '3' } },
      ]);
    });

    it('should add pages 1 to 2 to the paths', () => {
      expect(addPagesToPaths(testPaths, ['1', '2'])).toEqual([
        { params: { sortBy: 'name', page: '1' } },
        { params: { sortBy: 'type', page: '1' } },
        { params: { sortBy: 'active', page: '1' } },
        { params: { sortBy: 'year_built', page: '1' } },
        { params: { sortBy: 'home_port', page: '1' } },
        { params: { sortBy: 'name', page: '2' } },
        { params: { sortBy: 'type', page: '2' } },
        { params: { sortBy: 'active', page: '2' } },
        { params: { sortBy: 'year_built', page: '2' } },
        { params: { sortBy: 'home_port', page: '2' } },
      ]);
    });
  });
});

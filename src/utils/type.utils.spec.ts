import { isExactType } from './type.utils';

class TestClass {}

describe('Type utils', () => {
  describe('class recognition', () => {
    // -- STRINGS
    it('should recognize string', () => {
      const computed = isExactType('test', String);
      expect(computed).toBe(true);
    });

    it('should not recognize string as number', () => {
      const computed = isExactType('test', Number);
      expect(computed).toBe(false);
    });

    it('should not recognize string as object', () => {
      const computed = isExactType('test', Object);
      expect(computed).toBe(false);
    });

    it('should not recognize string as class', () => {
      const computed = isExactType('test', TestClass);
      expect(computed).toBe(false);
    });

    // - NUMBER
    it('should recognize number', () => {
      const computed = isExactType(1, Number);
      expect(computed).toBe(true);
    });

    it('should not recognize number as string', () => {
      const computed = isExactType(1, String);
      expect(computed).toBe(false);
    });

    it('should not recognize number as object', () => {
      const computed = isExactType(1, Object);
      expect(computed).toBe(false);
    });

    it('should not recognize number as class', () => {
      const computed = isExactType(1, TestClass);
      expect(computed).toBe(false);
    });

    // -- OBJECT
    it('should recognize object', () => {
      const computed = isExactType({ msg: 'test' }, Object);
      expect(computed).toBe(true);
    });

    it('should not recognize object as string', () => {
      const computed = isExactType({ msg: 'test' }, String);
      expect(computed).toBe(false);
    });

    it('should not recognize object as number', () => {
      const computed = isExactType({ msg: 'test' }, Number);
      expect(computed).toBe(false);
    });

    it('should not recognize object as class', () => {
      const computed = isExactType({ msg: 'test' }, TestClass);
      expect(computed).toBe(false);
    });

    // - CLASS
    it('should recognize class', () => {
      const val = new TestClass();
      const computed = isExactType(val, TestClass);
      expect(computed).toBe(true);
    });

    it('should not recognize class as string', () => {
      const val = new TestClass();
      const computed = isExactType(val, String);
      expect(computed).toBe(false);
    });

    it('should not recognize class as number', () => {
      const val = new TestClass();
      const computed = isExactType(val, Number);
      expect(computed).toBe(false);
    });

    it('should not recognize class as object', () => {
      const val = new TestClass();
      const computed = isExactType(val, Object);
      expect(computed).toBe(false);
    });
  });
});

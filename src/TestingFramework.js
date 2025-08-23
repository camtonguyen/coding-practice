class TestingFramework {
  static describe(description, callback) {
    console.log(`beginning test suite ${description}`);
    try {
      callback();
      console.log(`successfully completed test suite ${description}`);
    } catch (error) {
      const { testCaseName, errorMessage } = error;
      console.error(
        `failed running test suite ${description} on test case ${testCaseName} with error message ${errorMessage}`
      );
    } finally {
      console.log(`test suite ${description} completed`);
    }
  }

  static it(description, callback) {
    console.log(`beginning test case ${description}`);
    try {
      callback();
      console.log(`successfully completed test case ${description}`);
    } catch (errorMessage) {
      // If an assertion fails, throw an error object with details for the describe method to catch
      throw { testCaseName: description, errorMessage };
    } finally {
      console.log(`test case ${description} completed`);
    }
  }

  static expect(actual) {
    return new Expect(actual);
  }
}

class Expect {
  constructor(actual) {
    this.actual = actual;
  }

  toBe(expected) {
    if (this.actual !== expected) {
      throw new Error(`Expected ${this.actual} to be ${expected}`);
    }
  }
  toExist() {
    if (this.actual === undefined || this.actual === null) {
      throw new Error(`Expected ${JSON.stringify(this.actual)} to exist`);
    }
    return this;
  }
  toBeGreaterThan(expected) {
    if (this.actual <= expected) {
      throw new Error(
        `Expected ${JSON.stringify(
          this.actual
        )} to be greater than ${JSON.stringify(expected)}`
      );
    }
  }
  toBeLessThan(expected) {
    if (this.actual >= expected) {
      throw new Error(
        `Expected ${JSON.stringify(
          this.actual
        )} to be less than ${JSON.stringify(expected)}`
      );
    }
  }
  toBeType(expectedType) {
    if (typeof this.actual !== expectedType) {
      throw new Error(
        `Expected ${JSON.stringify(this.actual)} to be of type ${expectedType}`
      );
    }
  }
}

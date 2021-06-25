export default class ErrorRepository {
  constructor() {
    this.library = new Map();
  }

  add(code, errorType) {
    this.library.set(code, errorType);
  }

  translate(code) {
    if (this.library.has(code)) {
      return this.library.get(code);
    }
    return 'Unknown error';
  }
}

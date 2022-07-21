// const keys = new Map([
//   [235, 'Unuseless attempt'],
//   [480, 'Destroying system'],
//   [857, 'Inapropriate symbols'],
// ]);

export default class ErrorRepository {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.keys = new Map([
      [235, 'Unuseless attempt'],
      [480, 'Destroying system'],
      [857, 'Inapropriate symbols'],
    ]);

    this.keys.set({
      key,
      value,
    });
  }

  translate(code) {
    let result;
    if (this.keys.has(code)) {
      result = this.keys.get(code);
    } else {
      result = 'Unknown error';
    }
    return result;
  }
}

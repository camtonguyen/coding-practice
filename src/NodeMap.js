class NodeMap {
  constructor() {
    this._nodeMap = new WeakMap();
  }

  set(node, value) {
    this._nodeMap.set(node, value);
  }

  get(node) {
    return this._nodeMap.get(node);
  }

  has(node) {
    return this._nodeMap.has(node);
  }
}

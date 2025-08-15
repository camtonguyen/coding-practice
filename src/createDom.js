// recursive approach
export function createDom(root) {
  let rootDom = null;
  if (typeof root === 'string') {
    rootDom = document.createElement('p');
    rootDom.textContent = root;
  } else {
    rootDom = document.createElement(root.type);
    if (root.attributes) {
      Object.keys(root.attributes).forEach((key) => {
        rootDom.setAttribute(key, root.attributes[key]);
      });
    }
    if (root.children) {
      root.children.forEach((child) => {
        const childDom = createDom(child);
        rootDom.appendChild(childDom);
      });
    }
  }
  return rootDom;
}

// iterative approach
export function createDomIterative(root) {
  if (typeof root === 'string') {
    return document.createTextNode(root);
  }
  const stack = [{ vnode: root, parent: null }];
  let rootElement = null;
  while (stack.length > 0) {
    const { vnode, parent } = stack.pop();
    let element = null;
    if (typeof vnode === 'string') {
      element = document.createTextNode(vnode);
    } else {
      element = document.createElement(vnode.type);
      if (vnode.attributes) {
        Object.entries(vnode.attributes).forEach(([key, value]) => {
          if (key in element) {
            element[key] = value;
          } else {
            element.setAttribute(key, value);
          }
        });
      }
      if (vnode.children) {
        for (let i = vnode.children.length - 1; i >= 0; i--) {
          const child = vnode.children[i];
          stack.push({ vnode: child, parent: element });
        }
      }
    }
    if (parent) {
      parent.appendChild(element);
    } else {
      rootElement = element;
    }
  }
  return rootElement;
}

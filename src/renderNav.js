export function renderNav(data, targetNode = document.body) {
  if (!Array.isArray(data)) {
    throw new Error('Data must be an array');
  }
  if (data.length === 0) {
    return;
  }
  let ul = document.createElement('ul');
  let title;
  data.forEach((item) => {
    title = item?.title || item?.name || '';
    let li = document.createElement('li');
    let textNode = document.createTextNode(title);
    li.appendChild(textNode);
    ul.appendChild(li);
    if (item.children && item.children.length > 0) {
      renderNav(item.children, li);
    }
  });
  targetNode.appendChild(ul);
}

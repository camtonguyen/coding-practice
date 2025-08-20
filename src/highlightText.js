export function highlightText(element, searchTerm, color = 'yellow') {
  if (!element || !searchTerm) {
    return element;
  }

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  element.innerHTML = element.innerHTML.replaceAll(
    regex,
    `<span style="background-color: ${color}">${searchTerm}</span>`
  );
}

// Simulated API with a list of names
let api = {
  list: ['Alex', 'David', 'Aleksandra', 'Sarah', 'John', 'Matt', 'Mike'],
};

// Function to return the list of names from the simulated API
function fetchResults(data) {
  return data.list;
}

// Reference to the input field and the container for displaying autocomplete results
const input = document.getElementById('target');
const resultsContainer = document.getElementById('results');

// Handler for input changes to implement autocomplete functionality
const onChangeHandler = (e) => {
  if (!input || !resultsContainer || !e.target.value.trim()) return;

  resultsContainer.innerHTML = '';
  const inputValue = e.target.value.toLowerCase();
  const filteredResults = fetchResults(api).filter((name) =>
    name.toLowerCase().includes(inputValue)
  );

  filteredResults.forEach((name) => {
    const resultElement = document.createElement('div');
    resultElement.textContent = name;
    resultElement.className = 'suggestion-item';
    resultElement.dataset.value = name; // Store the value
    resultsContainer.appendChild(resultElement);
  });
};

// Single click handler using event delegation
resultsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('suggestion-item')) {
    input.value = e.target.dataset.value;
    resultsContainer.innerHTML = '';
  }
});

input.addEventListener('keyup', onChangeHandler);

// Do not edit below this line
export default onChangeHandler;

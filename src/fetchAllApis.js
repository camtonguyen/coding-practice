export function fetchAllSettledApis(apiUrls) {
  if (!apiUrls || !Array.isArray(apiUrls)) return [];
  const promises = apiUrls.map((url) =>
    fetch(url).then((res) => {
      if (!res.ok) {
        throw new Error('API call failed');
      }
      return res;
    })
  );

  return Promise.allSettled(promises).then((results) => {
    // Iterate through the results to find the first successful response
    for (const result of results) {
      if (result.status === 'fulfilled') {
        return result.value; // Return the result of the first successful API call
      }
    }
    // If all API calls fail, throw an error
    throw new Error('All APIs failed');
  });
}

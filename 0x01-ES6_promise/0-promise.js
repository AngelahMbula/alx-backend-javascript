function getResponseFromAPI() {
 // implementation
}

function getResponseFromAPIWithPromise() {
  return new Promise((resolve, reject) => {
    const result = getResponseFromAPI();
    if (result) {
      resolve(result);
    } else {
      reject(new Error('Failed to get response from API'));
    }
  });
}


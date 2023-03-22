export function getResponseFromAPI() {
 // implementation
}
export function getResponseFromAPIWithPromise() {
  return new Promise(function(resolve, reject) {
    const result = getResponseFromAPI();
    if (result) {
      resolve(result);
    } else {
      reject(new Error('Failed to get response from API'));
    }
  });
}

export default getResponseFromAPI()


export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  if (promise.then(true)) {
    return { status: 200, body: 'Success' };
  }
  return new Error();
}

function done() {
  console.log('Got a response from the API');
  return { status: 200, body: 'Success' };
}

function failed() {
  console.log('Got a response from the API');
  return new Error();
}

export default function handleResponseFromAPI(promise) {
  promise.then(done, failed);
}

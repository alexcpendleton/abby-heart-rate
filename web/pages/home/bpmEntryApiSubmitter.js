class BpmEntryApiSubmitter {
  constructor(uri) {
    this.uri = uri;
  }
  submitEntry(entry) {
    return fetch(this.uri, {
      method:"POST", 
      body: JSON.stringify(entry),
      mode: 'no-cors',
    })
  }
}

export default BpmEntryApiSubmitter;
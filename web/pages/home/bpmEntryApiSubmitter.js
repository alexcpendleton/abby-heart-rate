
class BpmEntryApiSubmitter {
  constructor(uri) {
    this.uri = uri;
  }
  submitEntry(entry) {
    var toSend = entry;
    return fetch(this.uri, {
      method:"POST", 
      body: JSON.stringify(toSend),
      mode: 'no-cors',
    })
  }
}

export default BpmEntryApiSubmitter;
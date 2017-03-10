class ConsoleLoggerSubmitter {
  constructor() {

  }
  submitEntry(entry) {
    console.log("Submitted BPM entry: ", entry)
    return Promise.resolve({});
  }
}

export default ConsoleLoggerSubmitter;

import moment from 'moment';

class BpmEntryMassager {
  constructor() {

  }
  massage(entry) {
    var output = Object.assign({}, entry);
    var occurredAt;
    if(!output.occurredAt) {
      occurredAt = moment.utc();
    } else {
      occurredAt = this.inferUtcDateTime(entry.occurredAt);
    }
    output.occurredAt = occurredAt.utc().format();
    output.occurredAtLocal = occurredAt.local().format();
    return output;
  }
  inferUtcDateTime(from) {
    if(!from) {
      return "";
    }
    return moment.utc(from);
  }
}

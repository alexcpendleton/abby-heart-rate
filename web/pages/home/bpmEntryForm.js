import React, { PropTypes } from 'react';
import Button from '../../components/Button';
import s from './styles.css';
import { title, html } from './index.md';

class BpmEntryForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      bpm: "",
      painful: false,
      occurredAt: "",
      notes: ""
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="bpm">BPM:<input type="text" id="bpm" name="bpm" onChange={this.handleChange} />
          </label> <br />

          <label htmlFor="painful">Painful?:<input type="checkbox" id="painful" name="painful" checked={this.state.painful} onChange={this.handleChange} />
          </label> <br />

          <label htmlFor="occurredAt">When: <input type="datetime" id="occurredAt" name="occurredAt" onChange={this.handleChange} />
          </label><br />

          <label htmlFor="notes">Notes: <input type="text" id="notes" name="notes" onChange={this.handleChange} />
          </label><br />

          <input type="submit" value="Submit" />
        </form>
    );
}
}

export default BpmEntryForm;
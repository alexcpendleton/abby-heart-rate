/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import BpmEntryForm from './bpmEntryForm.js';
import s from './styles.css';
import { title, html } from './index.md';

import Submitter from './bpmEntryApiSubmitter.js'

class HomePage extends React.Component {
  constructor() {
    super()
    this.submitter = new Submitter("http://requestb.in/19vo4p81");
    this.onBpmSubmit = this.onBpmSubmit.bind(this);
  }
  static propTypes = {
  };

  componentDidMount() {
    document.title = title;
  }
  onBpmSubmit(entry) {
    this.submitter.submitEntry(entry)
      .then(function bpmSubmitSuccess() {
        console.log("bpmSubmitSuccess!");
      });
  }
  render() {
    return (
      <Layout className={s.content}>
        <BpmEntryForm onSubmit={this.onBpmSubmit}></BpmEntryForm>
      </Layout>
    );
  }
}

export default HomePage;

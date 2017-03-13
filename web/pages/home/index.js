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
import BpmEntryMassager from './bpmEntryMassager.js'


class HomePage extends React.Component {
  constructor() {
    super()
    this.onBpmSubmit = this.onBpmSubmit.bind(this);
    // todo: these instantiations smell, should probably be pulled from IOC or something?
    // look up patterns for this in React ecosystem
    this.submitter = new Submitter("http://requestb.in/18qtz1q1");
    this.massager = new BpmEntryMassager();
  }
  static propTypes = {
  };

  componentDidMount() {
    document.title = title;
  }
  onBpmSubmit(entry) {
    var toSubmit = this.massager.massage(entry);
    console.log("submitting:", toSubmit);
    this.submitter.submitEntry(toSubmit)
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

import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { Section } from "components/Section/Section";
import { Statistics } from 'components/Statistics/Statistics'
import { Options } from 'components/FeedbackOptions/Options'


export class Feedback extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  // static propTypes = {};

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
}

  handleChange = event => {
    // console.log([event.target.name])
        this.setState(prevState => ({[event.target.name]: prevState[event.target.name] + 1}));
    };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((100 * good) / (good + neutral + bad));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const optionsArr = Object.keys(this.state)
    // console.log(optionsArr)
    return (
      <div>
        <Section title="Please leave your feedback">
          <Options options={optionsArr} onLeaveFeedback={this.handleChange} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
      </div>
    );
  }
}


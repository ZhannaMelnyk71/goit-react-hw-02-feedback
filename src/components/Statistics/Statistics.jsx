
import PropTypes from 'prop-types'
import { Fragment } from 'react';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <Fragment>{total === 0 ? (<Notification message="There is no feedback"/>) :
        (<ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>)}
    </Fragment>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
import PropTypes from 'prop-types'
import css from './Options.module.css'

export const Options = ({ options, onLeaveFeedback }) => (

    <div className= {css.options}>
        {options.map((option, index) =>
        (<button className= {css.options} key={index} type="button" onClick={onLeaveFeedback} name={option}>{option}</button>))}
    </div>
)

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
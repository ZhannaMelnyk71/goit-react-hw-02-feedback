import PropTypes from 'prop-types'

export const Options = ({ options, onLeaveFeedback }) => (

    <div>
        {options.map((option, index) =>
        (<button key={index} type="button" onClick={onLeaveFeedback} name={option}>{option}</button>))}
    </div>
)

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
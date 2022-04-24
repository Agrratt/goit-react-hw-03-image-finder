import { ButtonBlock } from 'components/Button/Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => (
    <ButtonBlock type='button' onClick={loadMore}>
        Load more
    </ButtonBlock>
);

Button.propTypes = {
    loadMore: PropTypes.func.isRequired
}
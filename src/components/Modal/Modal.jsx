import React, { Component } from "react";
import { Overlay, ModalContent } from 'components/Modal/Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
    static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
        };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)

    };

    handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleOverlayClick = (evt) => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    }

    render() {
        return (
            
            <Overlay onClick={this.handleOverlayClick }>
                <ModalContent>
                    <img
                        src={this.props.largeImage}
                        alt=''
                        loading='lazy'
                        
                    />
                </ModalContent>
            </Overlay>
        );
    }
}
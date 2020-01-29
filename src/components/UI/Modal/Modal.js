import React, { Component } from 'react';

import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        visibility: this.props.show ? 'visible' : 'hidden'
                    }}>
                    {this.props.children}
                </div>
            </Auxiliary>);
    }
};

// = (props) => (
//     <Aux>
//         <Backdrop show={props.show} clicked={props.modalClosed} />
//         <div
//             className={classes.Modal}
//             style={{
//                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                 opacity: props.show ? '1' : '0',
//                 visibility: props.show ? 'visible' : 'hidden'
//             }}>
//             {props.children}
//         </div>
//     </Aux>
// );

export default Modal;
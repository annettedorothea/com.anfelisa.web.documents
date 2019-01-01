import React from 'react';
import Toast from "./Toast";

export default class ToastContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toasts: []
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.toast !== undefined && this.props.toast === undefined) {
            let toasts = this.state.toasts;
            toasts.push(nextProps.toast);
            this.setState({toasts});
            setTimeout(() => {
                let toasts = Object.assign([],this.state.toasts);
                toasts.shift();
                this.setState({toasts});
            }, 7000);
            return true;
        }
        return nextState.toasts.length !== this.state.toasts.length;

    }

    render() {
        const toasts = this.state.toasts ? this.state.toasts.map((toast, index) => {
            return <Toast type={toast.type} key={index} text={toast.text}/>;
        }) : [];
        return (
            <div className="toastContainer">
                {toasts}
            </div>
        );
    }
}


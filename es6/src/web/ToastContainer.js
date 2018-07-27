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
                let toasts = Object.assign([], this.state.toasts);
                toasts[toasts.length - 1].visible = true;
                this.setState({toasts});
                setTimeout(() => {
                    let toasts = Object.assign([], this.state.toasts);
                    toasts[toasts.length - 1].visible = false;
                    this.setState({toasts});
                    setTimeout(() => {
                        let toasts = Object.assign([], this.state.toasts);
                        toasts.shift();
                        this.setState({toasts});
                    }, 100);
                }, 5000);
            }, 100);
            return true;
        }
        if (nextState.toasts.length !== this.state.toasts.length) {
            return true;
        }
        for (let i = 0; i < this.state.toasts.length; i++) {
            if (this.state.toasts[i].visible !== undefined) {
                return true;
            }
        }
        return false;
    }

    render() {
        const toasts = this.state.toasts ? this.state.toasts.map((toast, index) => {
            return <Toast type={toast.type} key={index} text={toast.text} visible={toast.visible === true}/>;
        }) : [];
        return (
            <div className="toastContainer">
                {toasts}
            </div>
        );
    }
}


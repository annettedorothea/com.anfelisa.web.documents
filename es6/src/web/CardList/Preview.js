import React from "react";

export default class Preview extends React.Component {

    render() {
        return (
            <td className="preview input">
                <img src={this.props.image}/>
                <button className="danger" onClick={this.props.onRemoveImage}>
                    <i className="fas fa-times"/>
                </button>
            </td>
        );
    }
}


import React from "react";

export default class FileInput extends React.Component {

    render() {
        return (
            <td className="hCenter">
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="inputfile"
                    onChange={this.props.onWantedFileChange}
                    value={this.props.file}/>
                <label htmlFor="file">{this.props.texts.cardList.chooseFile[this.props.language]}</label>
            </td>
        );
    }
}


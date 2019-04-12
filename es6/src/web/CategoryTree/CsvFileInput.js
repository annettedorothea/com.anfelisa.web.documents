import React from "react";

export default class CsvFileInput extends React.Component {

    render() {
        return (
            <span>
                <input
                    disabled={this.props.disabled}
                    type="file"
                    name="file"
                    id="csvfile"
                    className="inputfile"
                    onChange={this.props.onCsvFileChange}
                    value={this.props.file}/>
                <label htmlFor="csvfile" title={this.props.texts.categoryTree.csvUpload[this.props.language]}><i className="fa fa-upload"/></label>
            </span>
        );
    }
}


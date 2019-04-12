import React from 'react';
import {cancelPreviewCsv, importCsv, swapPreviewCsv} from "../../../gen/category/ActionFunctions";

export default class CsvPreview extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let csv = this.props.previewCsv.map((row) => {
            return <tr key={row[2]}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
            </tr>
        });

        return (
            <div className="modal">
                <div className="modalContent">
                    <h2>{this.props.texts.categoryTree.csvPreview.title[this.props.language]}</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>
                                {this.props.texts.categoryTree.csvPreview.given[this.props.language]}
                                {this.props.givenLanguage ? ' (' + this.props.texts.categoryTree.csvPreview.languages[this.props.givenLanguage][this.props.language] + ')' : ""}
                            </th>
                            <th>
                                {this.props.texts.categoryTree.csvPreview.wanted[this.props.language]}
                                {this.props.wantedLanguage ? ' (' + this.props.texts.categoryTree.csvPreview.languages[this.props.wantedLanguage][this.props.language] + ')' : ""}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {csv}
                        </tbody>
                    </table>
                    <button onClick={() => swapPreviewCsv()}>{this.props.texts.categoryTree.csvPreview.swap[this.props.language]}</button>
                    <button onClick={() => importCsv()}>{this.props.texts.categoryTree.csvPreview.ok[this.props.language]}</button>
                    <button onClick={() => cancelPreviewCsv()}>{this.props.texts.categoryTree.csvPreview.cancel[this.props.language]}</button>
                </div>
            </div>
        )
            ;
    }
}


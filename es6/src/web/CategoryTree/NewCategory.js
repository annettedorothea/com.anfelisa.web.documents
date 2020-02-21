import React from 'react';
import {cancelNewCategory, categoryNameChanged, createCategory} from "../../../gen/category/ActionFunctions";

export default class NewCategory extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const disabled =
            !this.props.categoryName ||
            this.props.categoryName.length === 0 ||
            this.props.dictionaryLookup && (this.props.givenLanguage.length === 0 || this.props.wantedLanguage.length === 0);
        return (
            <div className="modal">
                <div className="modalContent form">
                    <h2>{this.props.texts.categoryTree.newCategory.title[this.props.language]}</h2>
                    <div className="line">
                        <input
                            type={"text"}
                            onChange={(event) => categoryNameChanged(event.target.value)}
                            autoComplete="off"
                            value={this.props.categoryName}
                            placeholder={this.props.selectedCategory === undefined ? this.props.texts.categoryTree.newCategory.newRootCategory[this.props.language] : this.props.texts.categoryTree.newCategory.newChildCategory[this.props.language]}
                        />
                    </div>
                    <button
                        disabled={disabled}
                        onClick={() => createCategory()}
                    >{this.props.texts.categoryTree.newCategory.ok[this.props.language]}</button>
                    <button
                        onClick={() => cancelNewCategory()}
                    >{this.props.texts.categoryTree.newCategory.cancel[this.props.language]}</button>
                </div>
            </div>
        );
    }
}


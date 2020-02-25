import React from 'react';
import {cancelEditCategory, categoryNameChanged, updateCategory} from "../../../gen/category/ActionFunctions";

export default class EditCategory extends React.Component {

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
                    <h2>{this.props.texts.categoryTree.editCategory.title[this.props.language]}</h2>
                    <div className="line">
                        <input
                            type={"text"}
                            onChange={(event) => categoryNameChanged(event.target.value)}
                            autoComplete="off"
                            value={this.props.categoryName}
                            placeholder={this.props.selectedCategory.parentCategoryId === undefined ? this.props.texts.categoryTree.editCategory.rootCategory[this.props.language] : this.props.texts.categoryTree.editCategory.childCategory[this.props.language]}
                        />
                    </div>
                    <button
                        disabled={disabled}
                        onClick={() => updateCategory()}
                    >{this.props.texts.categoryTree.editCategory.ok[this.props.language]}</button>
                    <button
                        onClick={() => cancelEditCategory()}
                    >{this.props.texts.categoryTree.editCategory.cancel[this.props.language]}</button>
                </div>
            </div>
        )
            ;
    }
}


import React from 'react';
import NewCategory from "./NewCategory";
import ConfirmDanger from "../ConfirmDanger";
import EditCategory from "./EditCategory";
import {
    cancelDeleteCategory,
    deleteCategory,
    deleteCategoryClick,
    editCategoryClick,
    newCategoryClick,
    previewCsv
} from "../../../gen/category/ActionFunctions";
import {route} from "../../../gen/common/ActionFunctions";
import CsvFileInput from "./CsvFileInput";
import CsvPreview from "./CsvPreview";
import RootCategoryItem from "./RootCategoryItem";
import {filterNonScheduledCards} from "../../../gen/category/ActionFunctions";
import FilterPriority from "./FilterPriority";

export default class CategoryTree extends React.Component {

    constructor(props) {
        super(props);
    }

    onCsvFileChange(event) {
        let files = event.target.files;

        if (files.length > 0) {
            const file = files[0];
            event.target.value = null;
            let reader = new FileReader();
            reader.onload = function () {
                previewCsv(reader.result);
            };
            reader.readAsText(file);
        }
    }


    render() {
        return (
            <div className="categoryTree">
                {this.props.previewCsv && this.props.previewCsv.length > 0 &&
                <CsvPreview
                    previewCsv={this.props.previewCsv}
                    givenLanguage={this.props.selectedCategory.givenLanguage}
                    wantedLanguage={this.props.selectedCategory.wantedLanguage}
                    texts={this.props.texts}
                    language={this.props.language}
                />}
                {this.props.displayNewCategory &&
                <NewCategory
                    selectedCategory={this.props.selectedCategory}
                    categoryName={this.props.categoryName}
                    givenLanguage={this.props.givenLanguage}
                    wantedLanguage={this.props.wantedLanguage}
                    dictionaryLookup={this.props.dictionaryLookup}
                    texts={this.props.texts}
                    language={this.props.language}
                />}
                {this.props.displayEditCategory &&
                <EditCategory
                    selectedCategory={this.props.selectedCategory}
                    categoryName={this.props.categoryName}
                    givenLanguage={this.props.givenLanguage}
                    wantedLanguage={this.props.wantedLanguage}
                    dictionaryLookup={this.props.dictionaryLookup}
                    texts={this.props.texts}
                    language={this.props.language}
                />}
                {this.props.displayDeleteCategory === true &&
                <ConfirmDanger {...
                    {
                        title: this.props.texts.categoryTree.confirmDelete.title[this.props.language],
                        message: this.props.texts.categoryTree.confirmDelete.message[this.props.language],
                        okText: this.props.texts.categoryTree.confirmDelete.ok[this.props.language],
                        cancelText: this.props.texts.categoryTree.confirmDelete.cancel[this.props.language],
                        ok: () => deleteCategory(),
                        cancel: () => cancelDeleteCategory()
                    }}/>
                }
                <button className="backButton"
                        onClick={() => route("#dashboard")}
                        title={this.props.texts.categoryTree.back[this.props.language]}>
                    <i className="fa fa-arrow-left"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory}
                    onClick={() => newCategoryClick()}
                    title={this.props.selectedCategory === undefined ? this.props.texts.categoryTree.newCategory.newRootCategory[this.props.language] : this.props.texts.categoryTree.newCategory.newChildCategory[this.props.language]}>
                    <i className="fas fa-plus"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory}
                    onClick={() => editCategoryClick()}
                    title={this.props.texts.categoryTree.editCategory.title[this.props.language]}>
                    <i className="fas fa-pen"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory || !this.props.selectedCategory.empty}
                    onClick={() => deleteCategoryClick()}
                    title={this.props.texts.categoryTree.delete[this.props.language]}>
                    <i className="fas fa-times"/>
                </button>
                <CsvFileInput
                    onCsvFileChange={this.onCsvFileChange}
                    file={this.props.file}
                    texts={this.props.texts}
                    language={this.props.language}
                    disabled={!this.props.selectedCategory}
                />
                <input
                    type={"checkbox"}
                    onChange={() => filterNonScheduledCards()}
                    checked={this.props.filterNonScheduled}
                /> {this.props.texts.categoryTree.filterNonScheduled[this.props.language]}
                {this.props.filterNonScheduled === true && <FilterPriority />}


                <div className="categoryTreeItems">
                    {this.props.rootCategory && <RootCategoryItem
                        {...this.props.rootCategory}
                        childCategories={this.props.rootCategory.childCategories}
                        selectedCategory={this.props.selectedCategory}
                        texts={this.props.texts}
                        language={this.props.language}
                        key={this.props.rootCategory.categoryId}
                        dropAllowed={this.props.dropAllowed}
                        dropTargetCategoryId={this.props.dropTargetCategoryId}
                    />
                    }
                </div>

            </div>
        );
    }
}



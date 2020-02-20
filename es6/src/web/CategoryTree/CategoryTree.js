import React from 'react';
import CategoryItem from "./CategoryItem";
import NewCategory from "./NewCategory";
import Confirm from "../Confirm";
import InviteUser from "./InviteUser";
import EditCategory from "./EditCategory";
import {
    cancelDeleteCategory,
    deleteCategory,
    deleteCategoryClick,
    editCategoryClick,
    inviteUserClick,
    newCategoryClick
} from "../../../gen/category/ActionFunctions";
import {route} from "../../../gen/common/ActionFunctions";
import {previewCsv} from "../../../gen/category/ActionFunctions";
import CsvFileInput from "./CsvFileInput";
import CsvPreview from "./CsvPreview";

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
        const categoryItems = this.props.categoryList.map((category) => {
            return <CategoryItem
                {...category}
                childCategories={category.childCategories}
                depth={0}
                selectedCategory={this.props.selectedCategory}
                texts={this.props.texts}
                language={this.props.language}
                key={category.categoryId}
                dropAllowed={this.props.dropAllowed}
                dropTargetCategoryId={this.props.dropTargetCategoryId}
            />
        });

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
                <Confirm {...
                    {
                        title: this.props.texts.categoryTree.confirmDelete.title[this.props.language],
                        message: this.props.texts.categoryTree.confirmDelete.message[this.props.language],
                        okText: this.props.texts.categoryTree.confirmDelete.ok[this.props.language],
                        cancelText: this.props.texts.categoryTree.confirmDelete.cancel[this.props.language],
                        ok: () => deleteCategory(),
                        cancel: () => cancelDeleteCategory()
                    }}/>
                }
                {this.props.displayInviteUser === true &&
                <InviteUser
                    texts={this.props.texts}
                    language={this.props.language}
                    invitedUsername={this.props.invitedUsername}
                    userList={this.props.userList}
                />
                }

                <button className="backButton"
                        onClick={() => route("#dashboard")}
                        title={this.props.texts.categoryTree.back[this.props.language]}>
                    <i className="fa fa-arrow-left"/>
                </button>
                <button
                    disabled={this.props.selectedCategory && !this.props.selectedCategory.editable}
                    onClick={() => newCategoryClick()}
                    title={this.props.selectedCategory === undefined ? this.props.texts.categoryTree.newCategory.newRootCategory[this.props.language] : this.props.texts.categoryTree.newCategory.newChildCategory[this.props.language]}>
                    <i className="fas fa-plus"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory || !this.props.selectedCategory.editable}
                    onClick={() => editCategoryClick()}
                    title={this.props.texts.categoryTree.editCategory.title[this.props.language]}>
                    <i className="fas fa-pen"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory || !this.props.selectedCategory.editable || !this.props.selectedCategory.empty}
                    onClick={() => deleteCategoryClick()}
                    title={this.props.texts.categoryTree.delete[this.props.language]}>
                    <i className="fas fa-times"/>
                </button>
                <button
                    disabled={!this.props.selectedCategory || !this.props.selectedCategory.editable || this.props.selectedCategory.parentCategoryId !== undefined}
                    onClick={() => {
                        inviteUserClick();
                    }}
                    title={this.props.texts.categoryTree.inviteUser.title[this.props.language]}>
                    <i className="fas fa-users"/>
                </button>
                <CsvFileInput
                    onCsvFileChange={this.onCsvFileChange}
                    file={this.props.file}
                    texts={this.props.texts}
                    language={this.props.language}
                    disabled={!this.props.selectedCategory || !this.props.selectedCategory.editable}
                />

                <div className="categoryTreeItems">
                    {categoryItems}
                </div>

            </div>
        );
    }
}



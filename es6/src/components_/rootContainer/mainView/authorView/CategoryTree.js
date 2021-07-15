/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/


import {
    createReverseBox,
    deleteCategoryClick,
    editCategoryClick, filterNonScheduledCards,
    inviteUserClick,
    newCategoryClick, priorityChanged
} from "../../../../../gen/category/ActionFunctions";
import {route} from "../../../../../gen/common/ActionFunctions";
import React from "react";
import {Texts} from "../../../../app/Texts";
import {CategoryDialogComponent} from "../../../../../gen/components/rootContainer/mainView/authorView/categoryTree/CategoryDialogComponent";
import {InviteUserDialogComponent} from "../../../../../gen/components/rootContainer/mainView/authorView/categoryTree/InviteUserDialogComponent";
import {DeleteCategoryDialogComponent} from "../../../../../gen/components/rootContainer/mainView/authorView/categoryTree/DeleteCategoryDialogComponent";
import {RootCategoryComponent} from "../../../../../gen/components/rootContainer/mainView/authorView/categoryTree/RootCategoryComponent";

export function uiElement(props) {

    if (!props.rootCategory) {
        return null;
    }

    const filterPriority = (priority) => {
        const priorityClass = (index) => {
            if (priority && index <= priority) {
                return "fa fa-star";
            }
            return "far fa-star";
        }
        return <span className="priority noBreak">
            <i
                className={priorityClass(1)}
                onClick={() => priorityChanged(priority === 1 ? null: 1)}
            />
            <i
                className={priorityClass(2)}
                onClick={() => priorityChanged(priority === 2 ? null: 1)}
            />
            <i
                className={priorityClass(3)}
                onClick={() => priorityChanged(priority === 3 ? null: 1)}
            />
        </span>
    }

    return <div className="categoryTree">
        <CategoryDialogComponent {...props.categoryDialog} language={props.language} />
        <InviteUserDialogComponent {...props.inviteUserDialog} language={props.language} />
        <DeleteCategoryDialogComponent {...props.deleteCategoryDialog} language={props.language} />
        <div>
            <button
                onClick={() => route("#dashboard")}
                title={Texts.categoryTree.back[props.language]}
            >
                <i className="fa fa-arrow-left"/>
            </button>
            {props.rootCategory.editable ?
                <button
                    disabled={!props.selectedCategory}
                    onClick={newCategoryClick}
                    title={Texts.categoryTree.newCategory.newChildCategory[props.language]}
                >
                    <i className="fas fa-plus"/>
                </button> :
                null
            }
            {props.rootCategory.editable ?
                <button
                    disabled={!props.selectedCategory}
                    onClick={editCategoryClick}
                    title={Texts.categoryTree.editCategory.title[props.language]}
                >
                    <i className="fas fa-pen"/>
                </button> :
                null
            }
            {props.rootCategory.editable ?
                <button
                    disabled={!props.selectedCategory}
                    onClick={inviteUserClick}
                    title={Texts.categoryTree.inviteUser.title[props.language]}
                >
                    <i className="fas fa-share"/>
                </button> :
                null
            }
            {props.rootCategory.editable ?
                <button
                    disabled={
                        !props.selectedCategory ||
                        props.selectedCategory.empty === false ||
                        props.rootCategory.categoryId === props.selectedCategory.categoryId
                    }
                    onClick={deleteCategoryClick}
                    title={Texts.categoryTree.delete[props.language]}
                >
                    <i className="far fa-trash-alt"/>
                </button> :
                null
            }
            {props.reverseBoxExists === false ?
                <button
                    onClick={createReverseBox}
                    title={Texts.categoryTree.createReverseBox[props.language]}
                >
                    <i className="fas fa-plus-circle"/>
                </button> :
                null
            }
        </div>
        <div className="form">
            <input
                type="checkbox"
                onClick={(event) => filterNonScheduledCards(event.target.value)}
                value={props.filterNonScheduled}
                id="filterNonScheduled"
            />
            <label htmlFor="filterNonScheduled">{Texts.categoryTree.filterNonScheduled[props.language]}</label>
            {props.filterNonScheduled === true ? filterPriority(props.priority) : null}
        </div>
        <div className="categoryTreeItems">
            <RootCategoryComponent
                {...props.rootCategory}
                selectedCategory={props.selectedCategory}
                language={props.language}
                dropAllowed={props.dropAllowed && props.rootCategory.editable}
                dropTargetCategoryId={props.dropTargetCategoryId}
            />
        </div>
    </div>
}


/******* S.D.G. *******/



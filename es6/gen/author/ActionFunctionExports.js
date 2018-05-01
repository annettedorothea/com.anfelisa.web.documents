import LoadCategoriesAction from "../../src/author/actions/LoadCategoriesAction";
import CreateCategoryAction from "../../src/author/actions/CreateCategoryAction";
import UpdateCategoryAction from "../../src/author/actions/UpdateCategoryAction";
import DeleteCategoryAction from "../../src/author/actions/DeleteCategoryAction";

export function loadCategories(actionParam) {
    new LoadCategoriesAction(actionParam).apply();
}

export function createCategory(actionParam) {
    new CreateCategoryAction(actionParam).apply();
}

export function updateCategory(actionParam) {
    new UpdateCategoryAction(actionParam).apply();
}

export function deleteCategory(actionParam) {
    new DeleteCategoryAction(actionParam).apply();
}


/*       S.D.G.       */

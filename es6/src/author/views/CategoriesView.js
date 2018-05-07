import * as App from "../../app/App";

export default class CategoriesView {
    static render(eventData) {
        let data = App.container.state.data;
        if (!data) {
            data = {
                newCategory: {
                    name: "",
                    nameAlreadyExists: false,
                    index: ""
                },
                editedCategory: {
                    categoryId: "",
                    name: "",
                    nameAlreadyExists: false,
                    index: ""
                },
                deleteCategory: {
                    confirmDelete: false,
                    categoryId: ""
                }
            };
        }
        data.categoryList = eventData.data.categoryList;
        data.grandParentCategoryId = eventData.data.grandParentCategoryId;
        data.parentCategoryId = eventData.data.parentCategoryId;
        data.parentCategoryName = eventData.data.parentCategoryName;
        App.container.setState({
            route: "category-list",
            data
        });
    };

    static indexOfNewCategoryChanged(eventData) {
        let data = App.container.state.data;
        data.newCategory.index = eventData.index;
        App.container.setState({
            data
        });
    };

    static nameOfNewCategoryChanged(eventData) {
        let data = App.container.state.data;
        data.newCategory.name = eventData.name;
        data.newCategory.nameAlreadyExists = eventData.nameAlreadyExists;
        App.container.setState({
            data
        });
    };

    static resetNewValues(eventData) {
        let data = App.container.state.data;
        data.newCategory = {
            name: "",
            nameAlreadyExists: false,
            index: ""
        };
        App.container.setState({
            data
        });
    };

    static nameOfEditedCategoryChanged(eventData) {
        let data = App.container.state.data;
        data.editedCategory.name = eventData.name;
        data.editedCategory.nameAlreadyExists = eventData.nameAlreadyExists;
        App.container.setState({
            data
        });
    };

    static indexOfEditedCategoryChanged(eventData) {
        let data = App.container.state.data;
        data.editedCategory.index = eventData.index;
        App.container.setState({
            data
        });
    };

    static resetEditValues(eventData) {
        let data = App.container.state.data;
        data.editedCategory = {
            name: "",
            nameAlreadyExists: false,
            index: "",
            categoryId: ""
        };
        App.container.setState({
            data
        });
    };

    static editCategory(eventData) {
        let data = App.container.state.data;
        data.editedCategory = {
            categoryId: eventData.categoryId,
            name: eventData.name,
            nameAlreadyExists: false,
            index: eventData.index
        };
        App.container.setState({
            data
        });
    };

    static displayConfirmDelete(eventData) {
        let data = App.container.state.data;
        data.deleteCategory = {
            confirmDelete: true,
            categoryId: eventData.categoryId
        };
        App.container.setState({
            data
        });
    };

    static hideConfirmDelete(eventData) {
        let data = App.container.state.data;
        data.deleteCategory = {
            confirmDelete: false,
            categoryId: ""
        };
        App.container.setState({
            data
        });
    };

}

/*                    S.D.G.                    */

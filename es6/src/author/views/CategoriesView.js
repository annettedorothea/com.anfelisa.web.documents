import * as App from "../../app/App";

export default class CategoriesView {
    static render(eventData) {
        let data = App.container.state.data;
        if (!data) {
            data = {
                newCategory: {
                    name: "",
                    nameAlreadyExists: false,
                    index: "",
                    dictionaryLookup: false,
                    givenLanguage: "",
                    wantedLanguage: ""

                },
                editedCategory: {
                    categoryId: "",
                    name: "",
                    nameAlreadyExists: false,
                    index: "",
                    dictionaryLookup: false,
                    givenLanguage: "",
                    wantedLanguage: ""
                },
                deleteCategory: {
                    confirmDelete: false,
                    categoryId: ""
                },
                newCard: {
                    given: "",
                    wanted: "",
                    index: "",
                    displaySpinner: false,
                    dictionaryLookup: false,
                    givenLanguage: "",
                    wantedLanguage: ""
                },
                editedCard: {
                    cardId: "",
                    given: "",
                    wanted: "",
                    index: ""
                },
                cardDuplicates: [],
                deleteCard: {
                    confirmDelete: false,
                    cardId: ""
                },
                filter: "",
                displayTranslateSpinner: false
            };
        }
        data.categoryList = eventData.data.categoryList;
        data.cardList = eventData.data.cardList;
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

    static resetNewCategoryValues(eventData) {
        let data = App.container.state.data;
        if (data) {
            data.newCategory = {
                name: "",
                nameAlreadyExists: false,
                index: "",
                dictionaryLookup: eventData.data.parentDictionaryLookup ? eventData.data.parentDictionaryLookup : false,
                givenLanguage: eventData.data.parentGivenLanguage ? eventData.data.parentGivenLanguage : "",
                wantedLanguage: eventData.data.parentWantedLanguage ? eventData.data.parentWantedLanguage : ""
            };
            App.container.setState({
                data
            });
        }
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

    static resetEditCategoryValues(eventData) {
        let data = App.container.state.data;
        if (data) {
            data.editedCategory = {
                name: "",
                nameAlreadyExists: false,
                index: "",
                categoryId: "",
                dictionaryLookup: false,
                givenLanguage: "",
                wantedLanguage: ""
            };
            App.container.setState({
                data
            });
        }
    };

    static editCategory(eventData) {
        let data = App.container.state.data;
        data.editedCategory = {
            categoryId: eventData.categoryId,
            name: eventData.name,
            nameAlreadyExists: false,
            index: eventData.index,
            dictionaryLookup: eventData.dictionaryLookup ? eventData.dictionaryLookup : false,
            givenLanguage: eventData.givenLanguage ? eventData.givenLanguage : "",
            wantedLanguage: eventData.wantedLanguage ? eventData.wantedLanguage : ""
        };
        App.container.setState({
            data
        });
    };

    static displayConfirmCategoryDelete(eventData) {
        let data = App.container.state.data;
        data.deleteCategory = {
            confirmDelete: true,
            categoryId: eventData.categoryId
        };
        App.container.setState({
            data
        });
    };

    static hideConfirmCategoryDelete(eventData) {
        let data = App.container.state.data;
        data.deleteCategory = {
            confirmDelete: false,
            categoryId: ""
        };
        App.container.setState({
            data
        });
    };

    static givenOfNewCardChanged(eventData) {
        let data = App.container.state.data;
        data.newCard.given = eventData.given;
        App.container.setState({
            data
        });
    };

    static wantedOfNewCardChanged(eventData) {
        let data = App.container.state.data;
        data.newCard.wanted = eventData.wanted;
        App.container.setState({
            data
        });
    };

    static indexOfNewCardChanged(eventData) {
        let data = App.container.state.data;
        data.newCard.index = eventData.index;
        App.container.setState({
            data
        });
    };

    static resetNewCardValues(eventData) {
        let data = App.container.state.data;
        if (data) {
            data.newCard = {
                wanted: "",
                given: "",
                index: "",
                dictionaryLookup: eventData.data.parentDictionaryLookup ? eventData.data.parentDictionaryLookup : false,
                givenLanguage: eventData.data.parentGivenLanguage ? eventData.data.parentGivenLanguage : "",
                wantedLanguage: eventData.data.parentWantedLanguage ? eventData.data.parentWantedLanguage : ""
            };
            App.container.setState({
                data
            });
        }
    };

    static givenOfEditedCardChanged(eventData) {
        let data = App.container.state.data;
        data.editedCard.given = eventData.given;
        App.container.setState({
            data
        });
    };

    static wantedOfEditedCardChanged(eventData) {
        let data = App.container.state.data;
        data.editedCard.wanted = eventData.wanted;
        App.container.setState({
            data
        });
    };

    static indexOfEditedCardChanged(eventData) {
        let data = App.container.state.data;
        data.editedCard.index = eventData.index;
        App.container.setState({
            data
        });
    };

    static resetEditCardValues(eventData) {
        let data = App.container.state.data;
        if (data) {
            data.editedCard = {
                wanted: "",
                given: "",
                index: ""
            };
            App.container.setState({
                data
            });
        }
    };

    static editCard(eventData) {
        let data = App.container.state.data;
        data.editedCard = {
            cardId: eventData.cardId,
            given: eventData.given,
            wanted: eventData.wanted,
            index: eventData.index
        };
        App.container.setState({
            data
        });
    };

    static displayConfirmCardDelete(eventData) {
        let data = App.container.state.data;
        data.deleteCard = {
            confirmDelete: true,
            cardId: eventData.cardId
        };
        App.container.setState({
            data
        });
    };

    static hideConfirmCardDelete() {
        let data = App.container.state.data;
        data.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
        App.container.setState({
            data
        });
    };

    static displayNewCardSpinner() {
        let data = App.container.state.data;
        data.newCard.displaySpinner = true;
        App.container.setState({
            data
        });
    };

    static hideNewCardSpinner() {
        let data = App.container.state.data;
        data.newCard.displaySpinner = false;
        App.container.setState({
            data
        });
    };

    static displayTranslateSpinner() {
        let data = App.container.state.data;
        data.displayTranslateSpinner = true;
        App.container.setState({
            data
        });
    };

    static hideTranslateSpinner() {
        let data = App.container.state.data;
        data.displayTranslateSpinner = false;
        App.container.setState({
            data
        });
    };

    static initDuplicates(eventData) {
        let data = App.container.state.data;
        data.cardDuplicates = eventData.data.cardList;
        App.container.setState({
            data
        });
    };

    static resetDuplicates(eventData) {
        let data = App.container.state.data;
        data.cardDuplicates = [];
        App.container.setState({
            data
        });
    };

    static filterChanged(eventData) {
        let data = App.container.state.data;
        data.filter = eventData.filter;
        App.container.setState({
            data
        });
    };

    static toggleDictionaryLookupOfNewCategory() {
        let data = App.container.state.data;
        data.newCategory.dictionaryLookup = !data.newCategory.dictionaryLookup;
        if (data.newCategory.dictionaryLookup === false) {
            data.newCategory.givenLanguage = "";
            data.newCategory.wantedLanguage = "";
        }
        App.container.setState({
            data
        });
    };

    static toggleDictionaryLookupOfEditedCategory() {
        let data = App.container.state.data;
        data.editedCategory.dictionaryLookup = !data.editedCategory.dictionaryLookup;
        if (data.editedCategory.dictionaryLookup === false) {
            data.editedCategory.givenLanguage = "";
            data.editedCategory.wantedLanguage = "";
        }
        App.container.setState({
            data
        });
    };

    static givenLanguageOfNewCategoryChanged(eventData) {
        let data = App.container.state.data;
        data.newCategory.givenLanguage = eventData.givenLanguage;
        App.container.setState({
            data
        });
    };

    static givenLanguageOfEditedCategoryChanged(eventData) {
        let data = App.container.state.data;
        data.editedCategory.givenLanguage = eventData.givenLanguage;
        App.container.setState({
            data
        });
    };

    static wantedLanguageOfNewCategoryChanged(eventData) {
        let data = App.container.state.data;
        data.newCategory.wantedLanguage = eventData.wantedLanguage;
        App.container.setState({
            data
        });
    };

    static wantedLanguageOfEditedCategoryChanged(eventData) {
        let data = App.container.state.data;
        data.editedCategory.wantedLanguage = eventData.wantedLanguage;
        App.container.setState({
            data
        });
    };

}


/*                    S.D.G.                    */

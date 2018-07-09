import * as App from "../../app/App";

export default class CategoriesView {
    static render(eventData) {
        const data = {
            newCategory: {
                name: "",
                nameAlreadyExists: false,
                dictionaryLookup: eventData.data.parentDictionaryLookup ? eventData.data.parentDictionaryLookup : false,
                givenLanguage: eventData.data.parentGivenLanguage ? eventData.data.parentGivenLanguage : "",
                wantedLanguage: eventData.data.parentWantedLanguage ? eventData.data.parentWantedLanguage : ""
            },
            editedCategory: {
                categoryId: "",
                name: "",
                index: "",
                nameAlreadyExists: false,
                dictionaryLookup: eventData.data.parentDictionaryLookup ? eventData.data.parentDictionaryLookup : false,
                givenLanguage: eventData.data.parentGivenLanguage ? eventData.data.parentGivenLanguage : "",
                wantedLanguage: eventData.data.parentWantedLanguage ? eventData.data.parentWantedLanguage : ""
            },
            deleteCategory: {
                confirmDelete: false,
                categoryId: ""
            },
            newCard: {
                given: "",
                wanted: "",
                image: "",
                displaySpinner: false,
                displayTranslateSpinner: false,
                dictionaryLookup: eventData.data.parentDictionaryLookup ? eventData.data.parentDictionaryLookup : false,
                givenLanguage: eventData.data.parentGivenLanguage ? eventData.data.parentGivenLanguage : "",
                wantedLanguage: eventData.data.parentWantedLanguage ? eventData.data.parentWantedLanguage : ""
            },
            editedCard: {
                cardId: "",
                given: "",
                wanted: "",
                image: "",
                index: ""
            },
            cardDuplicates: [],
            deleteCard: {
                confirmDelete: false,
                cardId: ""
            },
            filter: "",
            naturalInputOrder: App.container.state && App.container.state.data && App.container.state.data.naturalInputOrder !== undefined ? App.container.state.data.naturalInputOrder : true,
            useDictionary: App.container.state && App.container.state.data && App.container.state.data.useDictionary !== undefined ? App.container.state.data.useDictionary : false,
            dictionaryValue: "",
            categoryList: eventData.data.categoryList,
            cardList: eventData.data.cardList,
            grandParentCategoryId: eventData.data.grandParentCategoryId,
            parentCategoryId: eventData.data.parentCategoryId,
            parentCategoryName: eventData.data.parentCategoryName,
            parentEditable: eventData.data.parentEditable,
            rootDictionaryLookup: eventData.data.rootDictionaryLookup,
            scheduleCardSelection: [],
            hasBox: eventData.data.hasBox
        };
        App.container.setState({
            route: "category-list",
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

    static resetEditCategoryValues(eventData) {
        let data = App.container.state.data;
        if (data) {
            data.editedCategory = {
                name: "",
                index: "",
                nameAlreadyExists: false,
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
            index: eventData.index,
            nameAlreadyExists: false,
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

    static resetNewCardValues(eventData) {
        let data = App.container.state.data;
        if (data) {
            data.newCard.wanted = "";
            data.newCard.given = "";
            data.newCard.image = "";
            data.cardDuplicates = [];
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

    static resetEditCardValues(eventData) {
        let data = App.container.state.data;
        if (data) {
            data.editedCard = {
                wanted: "",
                given: "",
                image: "",
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
            index: eventData.index,
            image: eventData.image
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
        data.newCard.displayTranslateSpinner = true;
        App.container.setState({
            data
        });
    };

    static hideTranslateSpinner() {
        let data = App.container.state.data;
        data.newCard.displayTranslateSpinner = false;
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

    static toggleInputOrder() {
        let data = App.container.state.data;
        data.naturalInputOrder = !data.naturalInputOrder;
        App.container.setState({
            data
        });
    };

    static setDictionaryValue(eventData) {
        let data = App.container.state.data;
        data.dictionaryValue = eventData.dictionaryValue;
        App.container.setState({
            data
        });
    };

    static toggleUseDictionary() {
        let data = App.container.state.data;
        data.useDictionary = !data.useDictionary;
        App.container.setState({
            data
        });
    };

    static displayImageOfNewCard(eventData) {
        let data = App.container.state.data;
        data.newCard.image = eventData.image;
        App.container.setState({
            data
        });
    }

    static displayImageOfEditedCard(eventData) {
        let data = App.container.state.data;
        data.editedCard.image = eventData.image;
        App.container.setState({
            data
        });
    }

    static removeNewCardImage() {
        let data = App.container.state.data;
        data.newCard.image = "";
        App.container.setState({
            data
        });
    }

    static removeEditedCardImage() {
        let data = App.container.state.data;
        data.editedCard.image = "";
        App.container.setState({
            data
        });
    }

    static toggleScheduleCardSelection(eventData) {
        let data = App.container.state.data;
        const index = data.scheduleCardSelection.indexOf(eventData.cardId);
        if (index !== -1) {
            data.scheduleCardSelection.splice(index, 1);
        } else {
            data.scheduleCardSelection.push(eventData.cardId);
        }
        App.container.setState({
            data
        });
    }

    static toggleAllScheduleCardSelection(eventData) {
        let data = App.container.state.data;
        data.scheduleCardSelection = [];
        if (eventData.selectAll === true) {
            data.cardList.forEach(card => {data.scheduleCardSelection.push(card.cardId)});
        }
        App.container.setState({
            data
        });
    }

}


/*                    S.D.G.                    */

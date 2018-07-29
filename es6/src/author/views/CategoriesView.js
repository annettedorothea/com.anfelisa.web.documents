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
            naturalInputOrder: eventData.data.naturalInputOrder,
            useDictionary: eventData.useDictionary,
            dictionaryValue: "",
            categoryList: eventData.data.categoryList,
            cardList: eventData.data.cardList,
            grandParentCategoryId: eventData.data.grandParentCategoryId,
            parentCategoryId: eventData.data.parentCategoryId,
            parentCategoryName: eventData.data.parentCategoryName,
            parentEditable: eventData.data.parentEditable,
            rootDictionaryLookup: eventData.data.rootDictionaryLookup,
            scheduleCardSelection: [],
            hasBox: eventData.data.hasBox,
            userList: eventData.data.userList,
            revokeUserAccess: {
                confirmDelete: false,
                userId: ""
            }
        };
        App.mergeState({
            route: "category-list",
            data
        });
    };

    static nameOfNewCategoryChanged(eventData) {
        const data = {
            newCategory: {
                name: eventData.name,
                nameAlreadyExists: eventData.nameAlreadyExists
            }
        };
        App.deepMergeState({
            data
        });
    };

    static resetNewCategoryValues(eventData) {
        const data = {
            newCategory: {
                name: "",
                nameAlreadyExists: false,
                dictionaryLookup: eventData.parentDictionaryLookup ? eventData.parentDictionaryLookup : false,
                givenLanguage: eventData.parentGivenLanguage ? eventData.parentGivenLanguage : "",
                wantedLanguage: eventData.parentWantedLanguage ? eventData.parentWantedLanguage : ""
            }
        };
        App.deepMergeState({
            data
        });
    };

    static nameOfEditedCategoryChanged(eventData) {
        const data = {
            editedCategory: {
                name: eventData.name,
                nameAlreadyExists: eventData.nameAlreadyExists

            }
        };
        App.deepMergeState({
            data
        });
    };

    static resetEditCategoryValues(eventData) {
        const data = {
            editedCategory: {
                name: "",
                index: "",
                nameAlreadyExists: false,
                categoryId: "",
                dictionaryLookup: false,
                givenLanguage: "",
                wantedLanguage: ""
            }
        };
        App.deepMergeState({
            data
        });
    };

    static editCategory(eventData) {
        const data = {
            editedCategory: {
                categoryId: eventData.categoryId,
                name: eventData.name,
                index: eventData.index,
                nameAlreadyExists: false,
                dictionaryLookup: eventData.dictionaryLookup ? eventData.dictionaryLookup : false,
                givenLanguage: eventData.givenLanguage ? eventData.givenLanguage : "",
                wantedLanguage: eventData.wantedLanguage ? eventData.wantedLanguage : ""
            }
        };
        App.deepMergeState({
            data
        });
    };

    static displayConfirmCategoryDelete(eventData) {
        const data = {
            deleteCategory: {
                confirmDelete: true,
                categoryId: eventData.categoryId
            }
        };
        App.deepMergeState({
            data
        });
    };

    static hideConfirmCategoryDelete(eventData) {
        const data = {
            deleteCategory: {
                confirmDelete: false,
                categoryId: ""
            }
        };
        App.deepMergeState({
            data
        });
    };

    static givenOfNewCardChanged(eventData) {
        const data = {
            newCard: {
                given: eventData.given
            }
        };
        App.deepMergeState({
            data
        });
    };

    static wantedOfNewCardChanged(eventData) {
        const data = {
            newCard: {
                wanted: eventData.wanted
            }
        };
        App.deepMergeState({
            data
        });
    };

    static resetNewCardValues(eventData) {
        const data = {
            newCard: {
                wanted: "",
                given: "",
                image: "",
            },
            cardDuplicates: []
        };
        App.deepMergeState({
            data
        });
    };

    static givenOfEditedCardChanged(eventData) {
        const data = {
            editedCard: {
                given: eventData.given
            }
        };
        App.deepMergeState({
            data
        });
    };

    static wantedOfEditedCardChanged(eventData) {
        const data = {
            editedCard: {
                wanted: eventData.wanted
            }
        };
        App.deepMergeState({
            data
        });
    };

    static resetEditCardValues(eventData) {
        const data = {
            editedCard: {
                wanted: "",
                given: "",
                image: "",
                index: "",
                cardId: ""
            }
        };
        App.deepMergeState({
            data
        });
    };

    static editCard(eventData) {
        const data = {
            editedCard: {
                cardId: eventData.cardId,
                given: eventData.given,
                wanted: eventData.wanted,
                index: eventData.index,
                image: eventData.image
            }
        };
        App.deepMergeState({
            data
        });
    };

    static displayConfirmCardDelete(eventData) {
        const data = {
            deleteCard: {
                confirmDelete: true,
                cardId: eventData.cardId
            }
        };
        App.deepMergeState({
            data
        });
    };

    static hideConfirmCardDelete() {
        const data = {
            deleteCard: {
                confirmDelete: false,
                cardId: ""
            }
        };
        App.deepMergeState({
            data
        });
    };

    static displayNewCardSpinner() {
        const data = {
            newCard: {
                displaySpinner: true
            }
        };
        App.deepMergeState({
            data
        });
    };

    static hideNewCardSpinner() {
        const data = {
            newCard: {
                displaySpinner: false
            }
        };
        App.deepMergeState({
            data
        });
    };

    static displayTranslateSpinner() {
        const data = {
            newCard: {
                displayTranslateSpinner: true
            }
        };
        App.deepMergeState({
            data
        });
    };

    static hideTranslateSpinner() {
        const data = {
            newCard: {
                displayTranslateSpinner: true
            }
        };
        App.deepMergeState({
            data
        });
    };

    static initDuplicates(eventData) {
        const data = {
            cardDuplicates: eventData.data.cardList
        };
        App.deepMergeState({
            data
        });
    };

    static resetDuplicates(eventData) {
        const data = {
            cardDuplicates: []
        };
        App.deepMergeState({
            data
        });
    };

    static filterChanged(eventData) {
        const data = {
            filter: eventData.filter
        };
        App.deepMergeState({
            data
        });
    };

    static toggleDictionaryLookupOfNewCategory(eventData) {
        const data = {
            newCategory: {
                dictionaryLookup: eventData.dictionaryLookup,
                givenLanguage: "",
                wantedLanguage: ""
            }
        };
        App.deepMergeState({
            data
        });
    };

    static toggleDictionaryLookupOfEditedCategory(eventData) {
        const data = {
            editedCategory: {
                dictionaryLookup: eventData.dictionaryLookup,
                givenLanguage: "",
                wantedLanguage: ""
            }
        };
        App.deepMergeState({
            data
        });
    };

    static givenLanguageOfNewCategoryChanged(eventData) {
        const data = {
            newCategory: {
                givenLanguage: eventData.givenLanguage
            }
        };
        App.deepMergeState({
            data
        });
    };

    static givenLanguageOfEditedCategoryChanged(eventData) {
        const data = {
            editedCategory: {
                givenLanguage: eventData.givenLanguage
            }
        };
        App.deepMergeState({
            data
        });
    };

    static wantedLanguageOfNewCategoryChanged(eventData) {
        const data = {
            newCategory: {
                wantedLanguage: eventData.wantedLanguage
            }
        };
        App.deepMergeState({
            data
        });
    };

    static wantedLanguageOfEditedCategoryChanged(eventData) {
        const data = {
            editedCategory: {
                wantedLanguage: eventData.wantedLanguage
            }
        };
        App.deepMergeState({
            data
        });
    };

    static toggleInputOrder(eventData) {
        const data = {
            naturalInputOrder: eventData.naturalInputOrder
        };
        App.deepMergeState({
            data
        });
    };

    static setDictionaryValue(eventData) {
        const data = {
            dictionaryValue: eventData.dictionaryValue
        };
        App.deepMergeState({
            data
        });
    };

    static toggleUseDictionary(eventData) {
        const data = {
            useDictionary: eventData.useDictionary
        };
        App.deepMergeState({
            data
        });
    };

    static displayImageOfNewCard(eventData) {
        const data = {
            newCard:
                {
                    image: eventData.image
                }
        };
        App.deepMergeState({
            data
        });
    }

    static displayImageOfEditedCard(eventData) {
        const data = {
            editedCard:
                {
                    image: eventData.image
                }
        };
        App.deepMergeState({
            data
        });
    }

    static removeNewCardImage() {
        const data = {
            newCard:
                {
                    image: ""
                }
        };
        App.deepMergeState({
            data
        });
    }

    static removeEditedCardImage() {
        const data = {
            editedCard:
                {
                    image: ""
                }
        };
        App.deepMergeState({
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
            data.cardList.forEach(card => {
                data.scheduleCardSelection.push(card.cardId)
            });
        }
        App.container.setState({
            data
        });
    }

    static displayRevokeUserAccess(eventData) {
        const data = {
            revokeUserAccess: {
                confirmDelete: true,
                userId: eventData.userId
            }
        };
        App.deepMergeState({
            data
        });
    };

    static hideRevokeUserAccess(eventData) {
        const data = {
            revokeUserAccess: {
                confirmDelete: false,
                userId: ""
            }
        };
        App.deepMergeState({
            data
        });
    };


}


/*                    S.D.G.                    */

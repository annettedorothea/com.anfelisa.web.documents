import {mergeState, getAppState, deepMergeState} from "../../app/App";

export default class CardListView {
    static render(eventData) {
        const data = {
            newCard: {
                given: "",
                wanted: "",
                image: "",
                displaySpinner: false,
                displayTranslateSpinner: false
            },
            editedCard: {
                cardId: "",
                given: "",
                wanted: "",
                image: ""
            },
            cardDuplicates: [],
            deleteCard: {
                confirmDelete: false,
                cardId: ""
            },
            filter: "",
            naturalInputOrder: eventData.naturalInputOrder,
            useDictionary: eventData.useDictionary,
            dictionaryValue: "",
            cardList: eventData.cardList,
            scheduleCardSelection: [],
        };
        deepMergeState({
            data
        });
    };

    static hide() {
        const data = getAppState().data;
        data.cardList = undefined;
        data.newCard = undefined;
        data.editedCard = undefined;
        data.cardDuplicates = undefined;
        data.deleteCard = undefined;
        data.filter = undefined;
        data.naturalInputOrder = undefined;
        data.useDictionary = undefined;
        data.dictionaryValue = undefined;
        data.scheduleCardSelection = undefined;
        mergeState({
            data
        });
    };

    static givenOfNewCardChanged(eventData) {
        const data = {
            newCard: {
                given: eventData.given
            }
        };
        deepMergeState({
            data
        });
    };

    static wantedOfNewCardChanged(eventData) {
        const data = {
            newCard: {
                wanted: eventData.wanted
            }
        };
        deepMergeState({
            data
        });
    };

    static resetNewCardValues() {
        const data = {
            newCard: {
                wanted: "",
                given: "",
                image: "",
            },
            cardDuplicates: []
        };
        deepMergeState({
            data
        });
    };

    static givenOfEditedCardChanged(eventData) {
        const data = {
            editedCard: {
                given: eventData.given
            }
        };
        deepMergeState({
            data
        });
    };

    static wantedOfEditedCardChanged(eventData) {
        const data = {
            editedCard: {
                wanted: eventData.wanted
            }
        };
        deepMergeState({
            data
        });
    };

    static resetEditCardValues() {
        const data = {
            editedCard: {
                wanted: "",
                given: "",
                image: "",
                cardId: ""
            }
        };
        deepMergeState({
            data
        });
    };

    static editCard(eventData) {
        const data = {
            editedCard: eventData
        };
        deepMergeState({
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
        deepMergeState({
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
        deepMergeState({
            data
        });
    };

    static displayNewCardSpinner() {
        const data = {
            newCard: {
                displaySpinner: true
            }
        };
        deepMergeState({
            data
        });
    };

    static hideNewCardSpinner() {
        const data = {
            newCard: {
                displaySpinner: false
            }
        };
        deepMergeState({
            data
        });
    };

    static displayTranslateSpinner() {
        const data = {
            newCard: {
                displayTranslateSpinner: true
            }
        };
        deepMergeState({
            data
        });
    };

    static hideTranslateSpinner() {
        const data = {
            newCard: {
                displayTranslateSpinner: false
            }
        };
        deepMergeState({
            data
        });
    };

    static initDuplicates(eventData) {
        const data = {
            cardDuplicates: eventData.cardList
        };
        deepMergeState({
            data
        });
    };

    static resetDuplicates() {
        const data = {
            cardDuplicates: []
        };
        deepMergeState({
            data
        });
    };

    static filterChanged(eventData) {
        const data = {
            filter: eventData.filter
        };
        deepMergeState({
            data
        });
    };

    static givenLanguageOfNewCategoryChanged(eventData) {
        const data = {
            newCategory: {
                givenLanguage: eventData.givenLanguage
            }
        };
        deepMergeState({
            data
        });
    };

    static givenLanguageOfEditedCategoryChanged(eventData) {
        const data = {
            editedCategory: {
                givenLanguage: eventData.givenLanguage
            }
        };
        deepMergeState({
            data
        });
    };

    static wantedLanguageOfNewCategoryChanged(eventData) {
        const data = {
            newCategory: {
                wantedLanguage: eventData.wantedLanguage
            }
        };
        deepMergeState({
            data
        });
    };

    static wantedLanguageOfEditedCategoryChanged(eventData) {
        const data = {
            editedCategory: {
                wantedLanguage: eventData.wantedLanguage
            }
        };
        deepMergeState({
            data
        });
    };

    static toggleInputOrder(eventData) {
        const data = {
            naturalInputOrder: eventData.naturalInputOrder
        };
        deepMergeState({
            data
        });
    };

    static setDictionaryValue(eventData) {
        const data = {
            dictionaryValue: eventData.dictionaryValue
        };
        deepMergeState({
            data
        });
    };

    static toggleUseDictionary(eventData) {
        const data = {
            useDictionary: eventData.useDictionary
        };
        deepMergeState({
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
        deepMergeState({
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
        deepMergeState({
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
        deepMergeState({
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
        deepMergeState({
            data
        });
    }

    static setScheduleCardSelection(eventData) {
        let data = getAppState().data;
        data.scheduleCardSelection = eventData.scheduleCardSelection;
        mergeState({
            data
        });
    }

}

/*                    S.D.G.                    */

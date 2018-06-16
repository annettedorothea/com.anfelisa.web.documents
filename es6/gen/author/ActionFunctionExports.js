import LoadCategoriesAction from "../../src/author/actions/LoadCategoriesAction";
import CreateCategoryAction from "../../src/author/actions/CreateCategoryAction";
import UpdateCategoryAction from "../../src/author/actions/UpdateCategoryAction";
import DeleteCategoryAction from "../../src/author/actions/DeleteCategoryAction";
import NameOfNewCategoryChangedAction from "../../src/author/actions/NameOfNewCategoryChangedAction";
import CancelNewCategoryAction from "../../src/author/actions/CancelNewCategoryAction";
import NameOfEditedCategoryChangedAction from "../../src/author/actions/NameOfEditedCategoryChangedAction";
import CancelEditCategoryAction from "../../src/author/actions/CancelEditCategoryAction";
import EditCategoryAction from "../../src/author/actions/EditCategoryAction";
import DeleteCategoryClickAction from "../../src/author/actions/DeleteCategoryClickAction";
import CancelDeleteCategoryAction from "../../src/author/actions/CancelDeleteCategoryAction";
import CreateCardAction from "../../src/author/actions/CreateCardAction";
import UpdateCardAction from "../../src/author/actions/UpdateCardAction";
import DeleteCardAction from "../../src/author/actions/DeleteCardAction";
import GivenOfNewCardChangedAction from "../../src/author/actions/GivenOfNewCardChangedAction";
import SearchDuplicateCardsAction from "../../src/author/actions/SearchDuplicateCardsAction";
import WantedOfNewCardChangedAction from "../../src/author/actions/WantedOfNewCardChangedAction";
import CancelNewCardAction from "../../src/author/actions/CancelNewCardAction";
import GivenOfEditedCardChangedAction from "../../src/author/actions/GivenOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../../src/author/actions/WantedOfEditedCardChangedAction";
import CancelEditCardAction from "../../src/author/actions/CancelEditCardAction";
import EditCardAction from "../../src/author/actions/EditCardAction";
import DeleteCardClickAction from "../../src/author/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../src/author/actions/CancelDeleteCardAction";
import FilterCardsAction from "../../src/author/actions/FilterCardsAction";
import TranslateAction from "../../src/author/actions/TranslateAction";
import PassValueToDictionaryAction from "../../src/author/actions/PassValueToDictionaryAction";
import ToggleDictionaryLookupOfNewCategoryAction from "../../src/author/actions/ToggleDictionaryLookupOfNewCategoryAction";
import ToggleDictionaryLookupOfEditedCategoryAction from "../../src/author/actions/ToggleDictionaryLookupOfEditedCategoryAction";
import GivenLanguageOfNewCategoryChangedAction from "../../src/author/actions/GivenLanguageOfNewCategoryChangedAction";
import GivenLanguageOfEditedCategoryChangedAction from "../../src/author/actions/GivenLanguageOfEditedCategoryChangedAction";
import WantedLanguageOfNewCategoryChangedAction from "../../src/author/actions/WantedLanguageOfNewCategoryChangedAction";
import WantedLanguageOfEditedCategoryChangedAction from "../../src/author/actions/WantedLanguageOfEditedCategoryChangedAction";
import ToggleInputOrderAction from "../../src/author/actions/ToggleInputOrderAction";
import ToggleUseDictionaryAction from "../../src/author/actions/ToggleUseDictionaryAction";
import LoadWantedImageOfNewCardAction from "../../src/author/actions/LoadWantedImageOfNewCardAction";
import LoadWantedImageOfEditedCardAction from "../../src/author/actions/LoadWantedImageOfEditedCardAction";
import RemoveNewCardImageAction from "../../src/author/actions/RemoveNewCardImageAction";
import RemoveEditedCardImageAction from "../../src/author/actions/RemoveEditedCardImageAction";

export function loadCategories(actionData) {
    new LoadCategoriesAction(actionData).apply();
}

export function createCategory(actionData) {
    new CreateCategoryAction(actionData).apply();
}

export function updateCategory(actionData) {
    new UpdateCategoryAction(actionData).apply();
}

export function deleteCategory(actionData) {
    new DeleteCategoryAction(actionData).apply();
}

export function nameOfNewCategoryChanged(actionData) {
    new NameOfNewCategoryChangedAction(actionData).apply();
}

export function cancelNewCategory(actionData) {
    new CancelNewCategoryAction(actionData).apply();
}

export function nameOfEditedCategoryChanged(actionData) {
    new NameOfEditedCategoryChangedAction(actionData).apply();
}

export function cancelEditCategory(actionData) {
    new CancelEditCategoryAction(actionData).apply();
}

export function editCategory(actionData) {
    new EditCategoryAction(actionData).apply();
}

export function deleteCategoryClick(actionData) {
    new DeleteCategoryClickAction(actionData).apply();
}

export function cancelDeleteCategory(actionData) {
    new CancelDeleteCategoryAction(actionData).apply();
}

export function createCard(actionData) {
    new CreateCardAction(actionData).apply();
}

export function updateCard(actionData) {
    new UpdateCardAction(actionData).apply();
}

export function deleteCard(actionData) {
    new DeleteCardAction(actionData).apply();
}

export function givenOfNewCardChanged(actionData) {
    new GivenOfNewCardChangedAction(actionData).apply();
}

export function searchDuplicateCards(actionData) {
    new SearchDuplicateCardsAction(actionData).apply();
}

export function wantedOfNewCardChanged(actionData) {
    new WantedOfNewCardChangedAction(actionData).apply();
}

export function cancelNewCard(actionData) {
    new CancelNewCardAction(actionData).apply();
}

export function givenOfEditedCardChanged(actionData) {
    new GivenOfEditedCardChangedAction(actionData).apply();
}

export function wantedOfEditedCardChanged(actionData) {
    new WantedOfEditedCardChangedAction(actionData).apply();
}

export function cancelEditCard(actionData) {
    new CancelEditCardAction(actionData).apply();
}

export function editCard(actionData) {
    new EditCardAction(actionData).apply();
}

export function deleteCardClick(actionData) {
    new DeleteCardClickAction(actionData).apply();
}

export function cancelDeleteCard(actionData) {
    new CancelDeleteCardAction(actionData).apply();
}

export function filterCards(actionData) {
    new FilterCardsAction(actionData).apply();
}

export function translate(actionData) {
    new TranslateAction(actionData).apply();
}

export function passValueToDictionary(actionData) {
    new PassValueToDictionaryAction(actionData).apply();
}

export function toggleDictionaryLookupOfNewCategory(actionData) {
    new ToggleDictionaryLookupOfNewCategoryAction(actionData).apply();
}

export function toggleDictionaryLookupOfEditedCategory(actionData) {
    new ToggleDictionaryLookupOfEditedCategoryAction(actionData).apply();
}

export function givenLanguageOfNewCategoryChanged(actionData) {
    new GivenLanguageOfNewCategoryChangedAction(actionData).apply();
}

export function givenLanguageOfEditedCategoryChanged(actionData) {
    new GivenLanguageOfEditedCategoryChangedAction(actionData).apply();
}

export function wantedLanguageOfNewCategoryChanged(actionData) {
    new WantedLanguageOfNewCategoryChangedAction(actionData).apply();
}

export function wantedLanguageOfEditedCategoryChanged(actionData) {
    new WantedLanguageOfEditedCategoryChangedAction(actionData).apply();
}

export function toggleInputOrder(actionData) {
    new ToggleInputOrderAction(actionData).apply();
}

export function toggleUseDictionary(actionData) {
    new ToggleUseDictionaryAction(actionData).apply();
}

export function loadWantedImageOfNewCard(actionData) {
    new LoadWantedImageOfNewCardAction(actionData).apply();
}

export function loadWantedImageOfEditedCard(actionData) {
    new LoadWantedImageOfEditedCardAction(actionData).apply();
}

export function removeNewCardImage(actionData) {
    new RemoveNewCardImageAction(actionData).apply();
}

export function removeEditedCardImage(actionData) {
    new RemoveEditedCardImageAction(actionData).apply();
}


/*       S.D.G.       */

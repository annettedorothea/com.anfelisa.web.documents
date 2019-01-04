import LoadCardsAction from "../../src/card/actions/LoadCardsAction";
import CreateCardAction from "../../src/card/actions/CreateCardAction";
import UpdateCardAction from "../../src/card/actions/UpdateCardAction";
import DeleteCardAction from "../../src/card/actions/DeleteCardAction";
import GivenOfNewCardChangedAction from "../../src/card/actions/GivenOfNewCardChangedAction";
import SearchDuplicateCardsAction from "../../src/card/actions/SearchDuplicateCardsAction";
import WantedOfNewCardChangedAction from "../../src/card/actions/WantedOfNewCardChangedAction";
import CancelNewCardAction from "../../src/card/actions/CancelNewCardAction";
import GivenOfEditedCardChangedAction from "../../src/card/actions/GivenOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../../src/card/actions/WantedOfEditedCardChangedAction";
import CancelEditCardAction from "../../src/card/actions/CancelEditCardAction";
import EditCardAction from "../../src/card/actions/EditCardAction";
import DeleteCardClickAction from "../../src/card/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../src/card/actions/CancelDeleteCardAction";
import FilterCardsAction from "../../src/card/actions/FilterCardsAction";
import TranslateAction from "../../src/card/actions/TranslateAction";
import PassValueToDictionaryAction from "../../src/card/actions/PassValueToDictionaryAction";
import ToggleInputOrderAction from "../../src/card/actions/ToggleInputOrderAction";
import ToggleUseDictionaryAction from "../../src/card/actions/ToggleUseDictionaryAction";
import LoadWantedImageOfNewCardAction from "../../src/card/actions/LoadWantedImageOfNewCardAction";
import LoadWantedImageOfEditedCardAction from "../../src/card/actions/LoadWantedImageOfEditedCardAction";
import RemoveNewCardImageAction from "../../src/card/actions/RemoveNewCardImageAction";
import RemoveEditedCardImageAction from "../../src/card/actions/RemoveEditedCardImageAction";
import ToggleScheduleCardSelectionAction from "../../src/card/actions/ToggleScheduleCardSelectionAction";
import ToggleAllScheduleCardSelectionAction from "../../src/card/actions/ToggleAllScheduleCardSelectionAction";
import ScheduleSelectedCardsAction from "../../src/card/actions/ScheduleSelectedCardsAction";

export function loadCards(actionData) {
    new LoadCardsAction(actionData).apply();
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

export function toggleScheduleCardSelection(actionData) {
    new ToggleScheduleCardSelectionAction(actionData).apply();
}

export function toggleAllScheduleCardSelection(actionData) {
    new ToggleAllScheduleCardSelectionAction(actionData).apply();
}

export function scheduleSelectedCards(actionData) {
    new ScheduleSelectedCardsAction(actionData).apply();
}


/*       S.D.G.       */

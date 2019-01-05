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
import MoveCardsStartedAction from "../../src/card/actions/MoveCardsStartedAction";
import MoveCardsAction from "../../src/card/actions/MoveCardsAction";

export function loadCards() {
    new LoadCardsAction().apply();
}

export function createCard() {
    new CreateCardAction().apply();
}

export function updateCard() {
    new UpdateCardAction().apply();
}

export function deleteCard() {
    new DeleteCardAction().apply();
}

export function givenOfNewCardChanged(given) {
    new GivenOfNewCardChangedAction(given).apply();
}

export function searchDuplicateCards() {
    new SearchDuplicateCardsAction().apply();
}

export function wantedOfNewCardChanged(wanted) {
    new WantedOfNewCardChangedAction(wanted).apply();
}

export function cancelNewCard() {
    new CancelNewCardAction().apply();
}

export function givenOfEditedCardChanged(given) {
    new GivenOfEditedCardChangedAction(given).apply();
}

export function wantedOfEditedCardChanged(wanted) {
    new WantedOfEditedCardChangedAction(wanted).apply();
}

export function cancelEditCard() {
    new CancelEditCardAction().apply();
}

export function editCard(cardId) {
    new EditCardAction(cardId).apply();
}

export function deleteCardClick(cardId) {
    new DeleteCardClickAction(cardId).apply();
}

export function cancelDeleteCard() {
    new CancelDeleteCardAction().apply();
}

export function filterCards(filter) {
    new FilterCardsAction(filter).apply();
}

export function translate() {
    new TranslateAction().apply();
}

export function passValueToDictionary() {
    new PassValueToDictionaryAction().apply();
}

export function toggleInputOrder(naturalInputOrder) {
    new ToggleInputOrderAction(naturalInputOrder).apply();
}

export function toggleUseDictionary() {
    new ToggleUseDictionaryAction().apply();
}

export function loadWantedImageOfNewCard(image) {
    new LoadWantedImageOfNewCardAction(image).apply();
}

export function loadWantedImageOfEditedCard(image) {
    new LoadWantedImageOfEditedCardAction(image).apply();
}

export function removeNewCardImage() {
    new RemoveNewCardImageAction().apply();
}

export function removeEditedCardImage() {
    new RemoveEditedCardImageAction().apply();
}

export function toggleScheduleCardSelection(cardId) {
    new ToggleScheduleCardSelectionAction(cardId).apply();
}

export function toggleAllScheduleCardSelection() {
    new ToggleAllScheduleCardSelectionAction().apply();
}

export function scheduleSelectedCards() {
    new ScheduleSelectedCardsAction().apply();
}

export function moveCardsStarted() {
    new MoveCardsStartedAction().apply();
}

export function moveCards() {
    new MoveCardsAction().apply();
}


/*       S.D.G.       */

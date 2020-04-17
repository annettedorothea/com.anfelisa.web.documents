/* 
 * Copyright (c) 2019, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */




import InitBoxesForDayAction from "../../src/box/actions/InitBoxesForDayAction";
import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import DeleteBoxClickAction from "../../src/box/actions/DeleteBoxClickAction";
import CancelDeleteBoxAction from "../../src/box/actions/CancelDeleteBoxAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import LoadNextCardAction from "../../src/box/actions/LoadNextCardAction";
import DisplayWantedAction from "../../src/box/actions/DisplayWantedAction";
import ScoreCardAction from "../../src/box/actions/ScoreCardAction";
import ScoreReinforceCardAction from "../../src/box/actions/ScoreReinforceCardAction";
import InitBoxesForDayDuringScoreAction from "../../src/box/actions/InitBoxesForDayDuringScoreAction";
import LoadSettingsAction from "../../src/box/actions/LoadSettingsAction";
import SaveBoxSettingsAction from "../../src/box/actions/SaveBoxSettingsAction";
import MaxCardsPerDayChangedAction from "../../src/box/actions/MaxCardsPerDayChangedAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
import CreateNewBoxAction from "../../src/box/actions/CreateNewBoxAction";
import CreateRootCategoryAction from "../../src/box/actions/CreateRootCategoryAction";
import CategoryNameChangedAction from "../../src/box/actions/CategoryNameChangedAction";
import DictionaryLookupChangedAction from "../../src/box/actions/DictionaryLookupChangedAction";
import GivenLanguageChangedAction from "../../src/box/actions/GivenLanguageChangedAction";
import WantedLanguageChangedAction from "../../src/box/actions/WantedLanguageChangedAction";
import RootCategoryNameChangedAction from "../../src/box/actions/RootCategoryNameChangedAction";

export function initBoxesForDay() {
    new InitBoxesForDayAction().apply();
}

export function loadBoxes() {
    new LoadBoxesAction().apply();
}

export function deleteBoxClick(boxId) {
    new DeleteBoxClickAction(boxId).apply();
}

export function cancelDeleteBox() {
    new CancelDeleteBoxAction().apply();
}

export function deleteBox(boxId) {
    new DeleteBoxAction(boxId).apply();
}

export function loadNextCard(boxId) {
    new LoadNextCardAction(boxId).apply();
}

export function displayWanted(wantedItemsLength) {
    new DisplayWantedAction(wantedItemsLength).apply();
}

export function scoreCard(scoredCardQuality) {
    new ScoreCardAction(scoredCardQuality).apply();
}

export function scoreReinforceCard(scoredCardQuality) {
    new ScoreReinforceCardAction(scoredCardQuality).apply();
}

export function initBoxesForDayDuringScore() {
    new InitBoxesForDayDuringScoreAction().apply();
}

export function loadSettings(boxId) {
    new LoadSettingsAction(boxId).apply();
}

export function saveBoxSettings() {
    new SaveBoxSettingsAction().apply();
}

export function maxCardsPerDayChanged(maxCardsPerDay) {
    new MaxCardsPerDayChangedAction(maxCardsPerDay).apply();
}

export function maxIntervalChanged(maxInterval) {
    new MaxIntervalChangedAction(maxInterval).apply();
}

export function createNewBox() {
    new CreateNewBoxAction().apply();
}

export function createRootCategory() {
    new CreateRootCategoryAction().apply();
}

export function categoryNameChanged(categoryName) {
    new CategoryNameChangedAction(categoryName).apply();
}

export function dictionaryLookupChanged() {
    new DictionaryLookupChangedAction().apply();
}

export function givenLanguageChanged(givenLanguage) {
    new GivenLanguageChangedAction(givenLanguage).apply();
}

export function wantedLanguageChanged(wantedLanguage) {
    new WantedLanguageChangedAction(wantedLanguage).apply();
}

export function rootCategoryNameChanged(categoryName) {
    new RootCategoryNameChangedAction(categoryName).apply();
}





/******* S.D.G. *******/




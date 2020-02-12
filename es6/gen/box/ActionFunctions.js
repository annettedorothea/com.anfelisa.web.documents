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
import CreateBoxAction from "../../src/box/actions/CreateBoxAction";
import DeleteBoxClickAction from "../../src/box/actions/DeleteBoxClickAction";
import CancelDeleteBoxAction from "../../src/box/actions/CancelDeleteBoxAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import LoadNextCardAction from "../../src/box/actions/LoadNextCardAction";
import DisplayWantedAction from "../../src/box/actions/DisplayWantedAction";
import ScoreCardAction from "../../src/box/actions/ScoreCardAction";

export function initBoxesForDay() {
    new InitBoxesForDayAction().apply();
}

export function loadBoxes() {
    new LoadBoxesAction().apply();
}

export function createBox() {
    new CreateBoxAction().apply();
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





/******* S.D.G. *******/




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




import ACEController from "../ace/ACEController";
import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import CreateBoxAction from "../../src/box/actions/CreateBoxAction";
import EditBoxAction from "../../src/box/actions/EditBoxAction";
import CancelEditBoxAction from "../../src/box/actions/CancelEditBoxAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
import EditMaxCardsPerDayAction from "../../src/box/actions/EditMaxCardsPerDayAction";
import CancelEditMaxCardsPerDayAction from "../../src/box/actions/CancelEditMaxCardsPerDayAction";
import MaxCardsPerDayChangedAction from "../../src/box/actions/MaxCardsPerDayChangedAction";
import UpdateBoxAction from "../../src/box/actions/UpdateBoxAction";
import DeleteBoxClickAction from "../../src/box/actions/DeleteBoxClickAction";
import CancelDeleteBoxAction from "../../src/box/actions/CancelDeleteBoxAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import PostponeCardsOfBoxAction from "../../src/box/actions/PostponeCardsOfBoxAction";
import LoadNextCardAction from "../../src/box/actions/LoadNextCardAction";
import ScheduleNextCardAction from "../../src/box/actions/ScheduleNextCardAction";
import ToggleScheduleNextAction from "../../src/box/actions/ToggleScheduleNextAction";
import DisplayWantedAction from "../../src/box/actions/DisplayWantedAction";
import ScoreCardAction from "../../src/box/actions/ScoreCardAction";
import LoadNextReinforceCardAction from "../../src/box/actions/LoadNextReinforceCardAction";
import ScoreReinforceCardAction from "../../src/box/actions/ScoreReinforceCardAction";
import LoadBoxStatisticsAction from "../../src/box/actions/LoadBoxStatisticsAction";

export default class ActionFactoryRegistrationBox {

	static init() {
		ACEController.registerFactory('box.LoadBoxesAction', 
			(actionData) => new LoadBoxesAction());
		ACEController.registerFactory('box.CreateBoxAction', 
			(actionData) => new CreateBoxAction());
		ACEController.registerFactory('box.EditBoxAction', 
			(actionData) => new EditBoxAction());
		ACEController.registerFactory('box.CancelEditBoxAction', 
			(actionData) => new CancelEditBoxAction());
		ACEController.registerFactory('box.MaxIntervalChangedAction', 
			(actionData) => new MaxIntervalChangedAction(actionData.editedMaxInterval));
		ACEController.registerFactory('box.EditMaxCardsPerDayAction', 
			(actionData) => new EditMaxCardsPerDayAction());
		ACEController.registerFactory('box.CancelEditMaxCardsPerDayAction', 
			(actionData) => new CancelEditMaxCardsPerDayAction());
		ACEController.registerFactory('box.MaxCardsPerDayChangedAction', 
			(actionData) => new MaxCardsPerDayChangedAction(actionData.editedMaxCardsPerDay));
		ACEController.registerFactory('box.UpdateBoxAction', 
			(actionData) => new UpdateBoxAction());
		ACEController.registerFactory('box.DeleteBoxClickAction', 
			(actionData) => new DeleteBoxClickAction(actionData.boxId));
		ACEController.registerFactory('box.CancelDeleteBoxAction', 
			(actionData) => new CancelDeleteBoxAction());
		ACEController.registerFactory('box.DeleteBoxAction', 
			(actionData) => new DeleteBoxAction(actionData.boxId));
		ACEController.registerFactory('box.PostponeCardsOfBoxAction', 
			(actionData) => new PostponeCardsOfBoxAction(actionData.boxId));
		ACEController.registerFactory('box.LoadNextCardAction', 
			(actionData) => new LoadNextCardAction(actionData.boxId));
		ACEController.registerFactory('box.ScheduleNextCardAction', 
			(actionData) => new ScheduleNextCardAction());
		ACEController.registerFactory('box.ToggleScheduleNextAction', 
			(actionData) => new ToggleScheduleNextAction());
		ACEController.registerFactory('box.DisplayWantedAction', 
			(actionData) => new DisplayWantedAction(actionData.wantedItemsLength));
		ACEController.registerFactory('box.ScoreCardAction', 
			(actionData) => new ScoreCardAction(actionData.scoredCardQuality));
		ACEController.registerFactory('box.LoadNextReinforceCardAction', 
			(actionData) => new LoadNextReinforceCardAction(actionData.boxId));
		ACEController.registerFactory('box.ScoreReinforceCardAction', 
			(actionData) => new ScoreReinforceCardAction(actionData.quality));
		ACEController.registerFactory('box.LoadBoxStatisticsAction', 
			(actionData) => new LoadBoxStatisticsAction(actionData.boxId));
	}

}




/******* S.D.G. *******/




import ACEController from "../ace/ACEController";
import CategoriesView from "../../src/author/views/CategoriesView";
import CommonView from "../../src/common/views/CommonView";
import CardsView from "../../src/author/views/CardsView";

export default class EventListenerRegistrationAuthor {

	static init() {
		ACEController.registerListener('author.LoadCategoriesOkEvent', CategoriesView.render);
		ACEController.registerListener('author.LoadCategoriesUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.CreateCategoryOkEvent', CategoriesView.resetNewValues);
		ACEController.registerListener('author.CreateCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.UpdateCategoryOkEvent', CategoriesView.resetEditValues);
		ACEController.registerListener('author.UpdateCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCategoryOkEvent', CategoriesView.hideConfirmDelete);
		ACEController.registerListener('author.DeleteCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCategoryUnauthorizedEvent', CategoriesView.hideConfirmDelete);
		ACEController.registerListener('author.NameOfNewCategoryChangedOkEvent', CategoriesView.nameOfNewCategoryChanged);
		ACEController.registerListener('author.IndexOfNewCategoryChangedOkEvent', CategoriesView.indexOfNewCategoryChanged);
		ACEController.registerListener('author.CancelNewCategoryOkEvent', CategoriesView.resetNewValues);
		ACEController.registerListener('author.NameOfEditedCategoryChangedOkEvent', CategoriesView.nameOfEditedCategoryChanged);
		ACEController.registerListener('author.IndexOfEditedCategoryChangedOkEvent', CategoriesView.indexOfEditedCategoryChanged);
		ACEController.registerListener('author.CancelEditCategoryOkEvent', CategoriesView.resetEditValues);
		ACEController.registerListener('author.EditCategoryOkEvent', CategoriesView.editCategory);
		ACEController.registerListener('author.DeleteCategoryClickOkEvent', CategoriesView.displayConfirmDelete);
		ACEController.registerListener('author.CancelDeleteCategoryOkEvent', CategoriesView.hideConfirmDelete);
		ACEController.registerListener('author.LoadCardsOkEvent', CardsView.render);
		ACEController.registerListener('author.LoadCardsUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.CreateCardOkEvent', CardsView.resetNewValues);
		ACEController.registerListener('author.CreateCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.UpdateCardOkEvent', CardsView.resetEditValues);
		ACEController.registerListener('author.UpdateCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCardOkEvent', CardsView.hideConfirmDelete);
		ACEController.registerListener('author.DeleteCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCardUnauthorizedEvent', CardsView.hideConfirmDelete);
		ACEController.registerListener('author.GivenOfNewCardChangedOkEvent', CardsView.givenOfNewCardChanged);
		ACEController.registerListener('author.WantedOfNewCardChangedOkEvent', CardsView.wantedOfNewCardChanged);
		ACEController.registerListener('author.IndexOfNewCardChangedOkEvent', CardsView.indexOfNewCardChanged);
		ACEController.registerListener('author.CancelNewCardOkEvent', CardsView.resetNewValues);
		ACEController.registerListener('author.GivenOfEditedCardChangedOkEvent', CardsView.givenOfEditedCardChanged);
		ACEController.registerListener('author.WamtedOfEditedCardChangedOkEvent', CardsView.wantedOfEditedCardChanged);
		ACEController.registerListener('author.IndexOfEditedCardChangedOkEvent', CardsView.indexOfEditedCardChanged);
		ACEController.registerListener('author.CancelEditCardOkEvent', CardsView.resetEditValues);
		ACEController.registerListener('author.EditCardOkEvent', CardsView.editCard);
		ACEController.registerListener('author.DeleteCardClickOkEvent', CardsView.displayConfirmDelete);
		ACEController.registerListener('author.CancelDeleteCardOkEvent', CardsView.hideConfirmDelete);
	}

}

/*       S.D.G.       */

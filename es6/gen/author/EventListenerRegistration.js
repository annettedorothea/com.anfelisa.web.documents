import ACEController from "../ace/ACEController";
import CategoriesView from "../../src/author/views/CategoriesView";
import CommonView from "../../src/common/views/CommonView";

export default class EventListenerRegistrationAuthor {

	static init() {
		ACEController.registerListener('author.LoadCategoriesOkEvent', CategoriesView.render);
		ACEController.registerListener('author.LoadCategoriesOkEvent', CategoriesView.resetEditCardValues);
		ACEController.registerListener('author.LoadCategoriesOkEvent', CategoriesView.resetEditCategoryValues);
		ACEController.registerListener('author.LoadCategoriesOkEvent', CategoriesView.resetNewCardValues);
		ACEController.registerListener('author.LoadCategoriesOkEvent', CategoriesView.resetNewCategoryValues);
		ACEController.registerListener('author.LoadCategoriesOkEvent', CategoriesView.resetDuplicates);
		ACEController.registerListener('author.LoadCategoriesUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.CreateCategoryOkEvent', CategoriesView.resetNewCategoryValues);
		ACEController.registerListener('author.CreateCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.UpdateCategoryOkEvent', CategoriesView.resetEditCategoryValues);
		ACEController.registerListener('author.UpdateCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCategoryOkEvent', CategoriesView.hideConfirmCategoryDelete);
		ACEController.registerListener('author.DeleteCategoryUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCategoryUnauthorizedEvent', CategoriesView.hideConfirmCategoryDelete);
		ACEController.registerListener('author.NameOfNewCategoryChangedOkEvent', CategoriesView.nameOfNewCategoryChanged);
		ACEController.registerListener('author.IndexOfNewCategoryChangedOkEvent', CategoriesView.indexOfNewCategoryChanged);
		ACEController.registerListener('author.CancelNewCategoryOkEvent', CategoriesView.resetNewCategoryValues);
		ACEController.registerListener('author.NameOfEditedCategoryChangedOkEvent', CategoriesView.nameOfEditedCategoryChanged);
		ACEController.registerListener('author.IndexOfEditedCategoryChangedOkEvent', CategoriesView.indexOfEditedCategoryChanged);
		ACEController.registerListener('author.CancelEditCategoryOkEvent', CategoriesView.resetEditCategoryValues);
		ACEController.registerListener('author.EditCategoryOkEvent', CategoriesView.editCategory);
		ACEController.registerListener('author.DeleteCategoryClickOkEvent', CategoriesView.displayConfirmCategoryDelete);
		ACEController.registerListener('author.CancelDeleteCategoryOkEvent', CategoriesView.hideConfirmCategoryDelete);
		ACEController.registerListener('author.CreateCardOkEvent', CategoriesView.resetNewCardValues);
		ACEController.registerListener('author.CreateCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.UpdateCardOkEvent', CategoriesView.resetEditCardValues);
		ACEController.registerListener('author.UpdateCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCardOkEvent', CategoriesView.hideConfirmCardDelete);
		ACEController.registerListener('author.DeleteCardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.DeleteCardUnauthorizedEvent', CategoriesView.hideConfirmCardDelete);
		ACEController.registerListener('author.GivenOfNewCardChangedOkEvent', CategoriesView.givenOfNewCardChanged);
		ACEController.registerListener('author.SearchDuplicateCardsOkEvent', CategoriesView.initDuplicates);
		ACEController.registerListener('author.SearchDuplicateCardsTooShortEvent', CategoriesView.resetDuplicates);
		ACEController.registerListener('author.SearchDuplicateCardsUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('author.SearchDuplicateCardsUnauthorizedEvent', CategoriesView.hideConfirmCardDelete);
		ACEController.registerListener('author.WantedOfNewCardChangedOkEvent', CategoriesView.wantedOfNewCardChanged);
		ACEController.registerListener('author.IndexOfNewCardChangedOkEvent', CategoriesView.indexOfNewCardChanged);
		ACEController.registerListener('author.CancelNewCardOkEvent', CategoriesView.resetNewCardValues);
		ACEController.registerListener('author.GivenOfEditedCardChangedOkEvent', CategoriesView.givenOfEditedCardChanged);
		ACEController.registerListener('author.WantedOfEditedCardChangedOkEvent', CategoriesView.wantedOfEditedCardChanged);
		ACEController.registerListener('author.IndexOfEditedCardChangedOkEvent', CategoriesView.indexOfEditedCardChanged);
		ACEController.registerListener('author.CancelEditCardOkEvent', CategoriesView.resetEditCardValues);
		ACEController.registerListener('author.EditCardOkEvent', CategoriesView.editCard);
		ACEController.registerListener('author.DeleteCardClickOkEvent', CategoriesView.displayConfirmCardDelete);
		ACEController.registerListener('author.CancelDeleteCardOkEvent', CategoriesView.hideConfirmCardDelete);
	}

}

/*       S.D.G.       */

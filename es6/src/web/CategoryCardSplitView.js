import React from 'react';
import CardList from "./CardList/CardList";
import CategoryTree from "./CategoryTree/CategoryTree";

export default class CategoryCardSplitView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="categoryCardSplitView">

                <CategoryTree
                    {...this.props.categoryTree}
                    filterNonScheduled={this.props.filterNonScheduled}
                    priority={this.props.priority}
                    texts={this.props.texts}
                    language={this.props.language}
                />

                {this.props.cardView && this.props.cardView.cardList && <CardList
                    {...this.props}
                    texts={this.props.texts}
                    language={this.props.language}
                    rootCategoryId={this.props.categoryTree.rootCategory.categoryId}
                />}

            </div>
        );
    }
}



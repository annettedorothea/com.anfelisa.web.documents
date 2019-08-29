export function findExpandedCategories(categoryList, expandedCategories) {
    for (let i = 0; i < categoryList.length; i++) {
        const category = categoryList[i];
        if (category.expanded === true) {
            expandedCategories.push(category.categoryId);
            if (category.childCategories) {
                findExpandedCategories(category.childCategories, expandedCategories,);
            }
        }
    }
    return expandedCategories;
}

export function initExpandedState(categoryList, expandedCategories) {
    for (let i = 0; i < categoryList.length; i++) {
        const category = categoryList[i];
        category.expanded = expandedCategories.indexOf(category.categoryId) >= 0 && category.childCategories.length > 0;
        if (category.childCategories) {
            initExpandedState(category.childCategories, expandedCategories);
        }
    }
}

export function initSelected(categoryList, selectedCategoryId) {
    const selectedCategory = findCategory(categoryList, selectedCategoryId);
    if (selectedCategory) {
        expandParents(selectedCategory, categoryList);
        return selectedCategory;
    }
}

export function expandParents(category, rootCategories) {
    let parentCategoryId = category.parentCategoryId;
    if (parentCategoryId) {
        const parentCategory = findCategory(rootCategories, parentCategoryId);
        if (parentCategory) {
            parentCategory.expanded = true;
            expandParents(parentCategory, rootCategories);
        }
    }
}

export function findCategory(categoryList, categoryId) {
    for (let i = 0; i < categoryList.length; i++) {
        const category = categoryList[i];
        if (category.categoryId === categoryId) {
            return category;
        }
        if (category.childCategories) {
            const child = findCategory(category.childCategories, categoryId);
            if (child !== undefined) {
                return child;
            }
        }
    }
    return undefined;
}

export function isCategoryChildOfParent(parentCategory, categoryId) {
    for (let i = 0; i < parentCategory.childCategories.length; i++) {
        const category = parentCategory.childCategories[i];
        if (category.categoryId === categoryId) {
            return true;
        }
        if (category.childCategories) {
            const isChild = isCategoryChildOfParent(category, categoryId);
            if (isChild === true) {
                return true;
            }
        }
    }
    return false;
}

export function depthOf(categoryList, categoryId) {
    let category = findCategory(categoryList, categoryId);
    let depth = 1;
    if (category.rootCategoryId === category.categoryId) {
        return depth;
    }
    depth++;
    let parent = findCategory(categoryList, category.parentCategoryId);
    while (parent && parent.rootCategoryId !== parent.categoryId) {
        depth++;
        parent = findCategory(categoryList, parent.parentCategoryId);
    }
    return depth;
}







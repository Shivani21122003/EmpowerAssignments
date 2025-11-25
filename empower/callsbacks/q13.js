const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
function groupAndSortCategories(arr) {
const counts = arr.reduce((accumulator, category) => {
accumulator[category] = (accumulator[category] || 0) + 1;
return accumulator;
}, {});
const sortedCategories = Object.entries(counts).sort((a, b) => b[1] - a[1]);
return sortedCategories;
}
function getCategoryCounts(arr) {
    return arr.reduce((accumulator, category) => {
        accumulator[category] = (accumulator[category] || 0) + 1;
        return accumulator;
    }, {});
}
console.log('Original Counts:', getCategoryCounts(categories));
console.log('Sorted Categories (Extra Challenge):', groupAndSortCategories(categories));
function issuesDataTransformer(issues) {
    try {
        const transformedIssues = issues.map((issue) => issue = {
            status: issue.fields.status.name,
            assignee: issue.fields.assignee.displayName
        });
        return transformedIssues;
    } catch (e) {
        throw new Error('Something went wrong during data transformation');
    }
}
function filtersDataTransformer(filters) {
    try {
        const transformedFilters = filters.map((filter) => filter = {
            name: filter.name,
            jql: filter.jql
        });
        return transformedFilters;
    } catch (e) {
        throw new Error('Something went wrong during data transformation');
    }
}
module.exports = {
    issuesDataTransformer,
    filtersDataTransformer
};
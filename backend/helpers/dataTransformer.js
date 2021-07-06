async function issuesDataTransformer(issues) {
    try {
        const transformedIssues = await issues.map((issue) => issue = {
            status: issue.fields.status.name,
            assignee: issue.fields.assignee
        }).filter(issue => issue.assignee);
        return transformedIssues;
    } catch (e) {
        throw new Error(e.message);
    }
}
async function filtersDataTransformer(filters) {
    try {
        const transformedFilters = await filters.map((filter) => filter = {
            name: filter.name,
            jql: filter.jql
        });
        return transformedFilters;
    } catch (e) {
        throw new Error(e.message);
    }
}
module.exports = {
    issuesDataTransformer,
    filtersDataTransformer
};
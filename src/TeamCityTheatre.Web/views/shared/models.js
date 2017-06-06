import * as tslib_1 from "tslib";
var Project = (function () {
    function Project(params) {
        if (!params)
            throw new Error("Invalid constructor parameters: " + JSON.stringify(params));
        this.isArchived = params.isArchived;
        this.href = params.href;
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.webUrl = params.webUrl;
        this.parentProjectId = params.parentProjectId;
        this.parent = typeof params.parent === "undefined" ? null : params.parent;
        this.children = typeof params.children === "undefined" ? [] : params.children;
        this.buildConfigurations = typeof params.buildConfigurations === "undefined" ? [] : params.buildConfigurations;
        this.isExpanded = typeof params.isExpanded === "undefined" ? false : params.isExpanded;
    }
    Project.prototype.setChildren = function (children) {
        var _this = this;
        // Building immutable trees is hard if the input is not topologically sorted.
        // Avoid problems by doing only this little thing in a mutable way
        this.children = children;
        this.children.forEach(function (c) { return c.parent = _this; });
    };
    Project.prototype.withBuildConfigurations = function (buildConfigurations) {
        return new Project(tslib_1.__assign({}, this, { buildConfigurations: buildConfigurations }));
    };
    Project.prototype.expand = function () {
        return new Project(tslib_1.__assign({}, this, { isExpanded: true }));
    };
    Project.prototype.collapse = function () {
        return new Project(tslib_1.__assign({}, this, { isExpanded: false }));
    };
    Project.prototype.toggleExpandOrCollapse = function () {
        return this.isExpanded ? this.collapse() : this.expand();
    };
    // propagate updates to a project down the chain
    Project.prototype.update = function (project) {
        if (this.id === project.id)
            return project; // if this is the project that was updated, return the new version
        return new Project(tslib_1.__assign({}, this, { children: this.children.map(function (c) { return c.update(project); }) }));
    };
    Project.prototype.hasChildren = function () {
        return this.children.length > 0;
    };
    Project.prototype.getLabel = function () {
        if (this.parent === null)
            return this.name;
        return [this.parent.getLabel(), this.name].join(" / ");
    };
    return Project;
}());
export { Project };

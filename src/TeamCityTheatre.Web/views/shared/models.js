import * as tslib_1 from "tslib";
var Project = (function () {
    function Project(params) {
        if (!params)
            throw new Error("Invalid constructor parameters in BasicProject: params");
        this.isArchived = params.isArchived;
        this.href = params.href;
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.webUrl = params.webUrl;
        this.parentProjectId = params.parentProjectId;
        this.children = params.children || [];
        this.buildConfigurations = params.buildConfigurations || null;
        this.isExpanded = false;
    }
    Project.prototype.withChildren = function (children) {
        return new Project(tslib_1.__assign({}, this, { children: children }));
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
    Project.prototype.withProject = function (project) {
        if (this.id === project.id)
            return project; // if this is the project that was updated, return the new version
        return new Project(tslib_1.__assign({}, this, { children: this.children.map(function (c) { return c.withProject(project); }) }));
    };
    Project.prototype.hasChildren = function () {
        return this.children.length > 0;
    };
    return Project;
}());
export { Project };

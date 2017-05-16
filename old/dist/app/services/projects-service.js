(function () {

  angular.module("app").factory("projectsService",
  ["$http", "$q", "promisesService", "moment", "lodash", projectsService]);

  function projectsService($http, $q, promise, moment, _) {
    var self = this;
    var projects = [];
    var projectTree = {};

    var getProjects = function () {
      return promise($http.get('api/projects'));
    };

    self.getProjectById = function (id) {
      return promise($http.get('api/projects/' + id));
    }

    self.getProjectTree = function () {
      var buildProjectTree = function (projects) {
        var projectsById = {};
        var root = {};

        _.forEach(projects, function (project) {
          // add project to the index
          projectsById[project.id] = project;

          // if the project has a parent
          if (project.parentProjectId) {
            // find parent in the index
            var parent = projectsById[project.parentProjectId] ||
              // if the parent is not yet in the index, find it and add it to the index
              (projectsById[project.parentProjectId] = _.find(projects, function(p) { return p.id === project.parentProjectId }));

            // add navigation from child -> parent
            project.parentProject = parent;

            // add navigation from parent -> child
            if (!parent.children) {
              parent.children = [];
            }
            parent.children.push(project);

          } else {
            root = project;
          }
        });

        return root;
      }

      var deferred = $q.defer();

      getProjects().then(function (projectsResult) {
        projects = projectsResult;
        projectTree = buildProjectTree(projectsResult);
        deferred.resolve(projectTree);
      }, function() {
        deferred.reject();
      });

      return deferred.promise;
    }

    self.getProjectDisplayName = function(projectId) {
      var project = _.find(projects, function (p) { return p.id === projectId });
      if (!project) return "";
      if (!project.parentProjectId)
        return project.name;
      return self.getProjectDisplayName(project.parentProjectId) + " / " + project.name;
    }

    self.getBuildConfigurationDisplayName = function (buildConfiguration) {
      return self.getProjectDisplayName(buildConfiguration.projectId) + " / " + buildConfiguration.name;
    }

    return self;
  }
})();
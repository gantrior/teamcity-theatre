(function () {
  'use strict';
  angular.module('app').controller('projectTreeController', ['projectsService', 'config.shared', projectTreeController]);

  function projectTreeController(projectsService, shared) {
    var vm = this;
    vm.rootProject = {};
    vm.shared = shared;

    vm.loadProjects = function () {
      projectsService.getProjectTree().then(function (rootProject) {
        vm.rootProject = rootProject;
        vm.toggleProjectChildren(vm.rootProject);
        vm.shared.selectedProject = null;
      });
    };

    vm.getProjectClasses = function (project) {
      var classes = [];
      if (project.children && project.children.length > 0)
        classes.push('has-children');
      if (project.showChildren)
        classes.push('is-expanded');
      var selectedProject = vm.shared.selectedProject;
      if (selectedProject && selectedProject.id === project.id)
        classes.push('is-selected');
      return classes;
    };

    vm.toggleProjectChildren = function (project) {
      project.showChildren = !project.showChildren;
    };

    vm.showProjectDetails = function (project) {
      vm.isLoadingSelectedProject = true;
      projectsService.getProjectById(project.id).then(function (project) {
        vm.shared.selectedProject = project;
      }).then(function () {
        vm.isLoadingSelectedProject = false;
      });
    };

    vm.loadProjects();
  }
})();
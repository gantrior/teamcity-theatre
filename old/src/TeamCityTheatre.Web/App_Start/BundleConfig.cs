using System.Web.Optimization;

namespace TeamCityTheatre.Web {
  public class BundleConfig {
    // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
    public static void RegisterBundles(BundleCollection bundles) {
      var appScripts = new ScriptBundle("~/app/scriptbundle");
      var libScripts = new ScriptBundle("~/scripts/scriptbundle");
      var appStyles = new StyleBundle("~/app/stylebundle");
      var libStyles = new StyleBundle("~/content/stylebundle");

      /*-------- APPLICATION -------- */

      bundles.Add(appScripts
        // global
        .Include("~/app/app.js")
        .Include("~/app/routes.js")

        // services
        .Include("~/app/services/*.js")
/*
        // directives
        .Include("~/app/directives/*.js")*/

        // controllers
        .Include("~/app/mainnav/*.js")
        .Include("~/app/config/*.js")
        .Include("~/app/dashboard/*.js")
        );

      bundles.Add(appStyles
        .Include("~/app/config/*.css")
        .Include("~/app/dashboard/*.css")
        );

      /*-------- LIBRARIES -------- */

      bundles.Add(libScripts
        .Include("~/Scripts/jquery-{version}.js")
        .Include("~/Scripts/jquery.signalR-{version}.js")
        .Include("~/Scripts/bootstrap.js")
        .Include("~/Scripts/respond.js")
        .Include("~/Scripts/moment-with-locales.js")
        .Include("~/Scripts/lodash.js")
        .Include("~/Scripts/angular.js")
        .Include("~/Scripts/angular-route.js")
        .Include("~/Scripts/angular-animate.js")
        .Include("~/Scripts/angular-sanitize.js")
        .Include("~/Scripts/angular-loader.js")
        .Include("~/Scripts/angular-ui/ui-bootstrap-tpls.js")
        .Include("~/Scripts/masonry.js")
        );

      bundles.Add(libStyles
        .Include("~/content/bootstrap.css", new CssRewriteUrlTransform())
        .Include("~/content/font-awesome.css", new CssRewriteUrlTransform())
        );

#if !DEBUG
      BundleTable.EnableOptimizations = true;
#endif
    }
  }
}
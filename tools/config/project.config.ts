import { join } from 'path';

import { SeedConfig } from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,

      /* HammerJS is required if the app uses certain Material components (eg: md-slider and md-slide-toggle) */
      //{src: 'hammerjs/hammer.min.js', inject: 'libs'},

      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };

    // add Material configuration to SystemJS.
    this.addPackageBundles({
      name: '@angular/material',
      path: 'node_modules/@angular/material/bundles/material.umd.js'
    });

    const materialPackages = [
      'autocomplete',
      'button',
      'button-toggle',
      'card',
      'checkbox',
      'chips',
      'core',
      'datepicker',
      'dialog',
      'examples',
      'expansion',
      'form-field',
      'grid-list',
      'icon',
      'input',
      'list',
      'menu',
      'paginator',
      'progress-bar',
      'progress-spinner',
      'radio',
      'select',
      'sidenav',
      'slide-toggle',
      'slider',
      'snack-bar',
      'sort',
      'stepper',
      'table',
      'tabs',
      'toolbar',
      'tooltip'
    ];

    for (const packageName of materialPackages) {
      this.addPackageBundles({
        name: '@angular/material/' + packageName,
        path: 'node_modules/@angular/material/bundles/material-' + packageName + '.umd.js'
      });
    }

    // CDK
    this.addPackageBundles({
      name: '@angular/cdk',
      path: 'node_modules/@angular/cdk/bundles/cdk.umd.js'
    });

    const cdkPackages = [
      'a11y',
      'bidi',
      'coercion',
      'collections',
      'keycodes',
      'observers',
      'overlay',
      'platform',
      'portal',
      'rxjs',
      'scrolling',
      'table',
      'stepper'
    ];

    for (const packageName of cdkPackages) {
      this.addPackageBundles({
        name: '@angular/cdk/' + packageName,
        path: 'node_modules/@angular/cdk/bundles/cdk-' + packageName + '.umd.js'
      });
    }

    this.ENABLE_SCSS = true;
  }

}

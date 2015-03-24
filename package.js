Package.describe({
  name: 'nrane9:banner-alert',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');

  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('iron:router@1.0.7');
  api.use('session@1.0.0');

  api.addFiles([
    'nrane9_banner-alert.html',
    'nrane9_banner-alert.js',
    'nrane9_banner-alert.css',
    ], 'client');

  if (api.export){
    api.export('nrAlert');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nrane9:banner-alert');
  api.addFiles('nrane9_banner-alert-tests.js');
});

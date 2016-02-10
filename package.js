Package.describe({
  name: 'panter:moment-duration-format',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'wrapper for https://github.com/jsmreese/moment-duration-format ',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/panter/meteor-moment-duration-format',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('momentjs:moment@2.10.6');
  api.addFiles('moment-duration-format.js');
});

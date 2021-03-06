Package.describe({
  name: "telescope:update-prompt",
  summary: "Telescope update prompt package.",
  version: "0.1.0",
  git: "https://github.com/TelescopeJS/telescope-update-prompt.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'telescope:lib@0.3.0',
    'http'
  ], ['client', 'server']);

  api.use([
    'jquery',
    'underscore',
    'iron:router@1.0.5',
    'templating'
  ], 'client');


  api.add_files([
    'lib/client/update.js',
    'lib/client/templates/update_banner.html',
    'lib/client/templates/update_banner.js',
    'lib/client/templates/update_banner.css'
  ], ['client']);

  api.add_files([
    'lib/server/phone_home.js'
  ], ['server']);

  api.export([
    'compareVersions'
  ]);
});

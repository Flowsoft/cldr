Package.describe({
  name: 'flowsoft:cldr',
  version: '3.0.0_3',
  summary: 'CLDR package for node-cldr',
  git: 'https://github.com/Flowsoft/cldr',
  documentation: 'README.md'
});

Npm.depends({
  'cldr': '3.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('cldr.js', 'server');
  api.export('cldr');
});

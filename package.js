Package.describe({
  name: 'flowsoft:cldr',
  version: '3.2.0_1',
  summary: 'Package for node-cldr node package',
  git: 'https://github.com/Flowsoft/cldr',
  documentation: 'README.md'
});

Npm.depends({
  'cldr': '3.2.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('cldr.js', 'server');
  api.export('cldr');
});

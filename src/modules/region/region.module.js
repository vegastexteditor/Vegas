vegas.modules.region = {
  name: 'Region Module',
  version: 'dev',
  files: [
    {
      name: 'Region',
      version: 'dev',
      namespace: 'vegas.Region',
      src: 'modules/region/Region.js',
      requires: ['util','Base']
    },
    {
      name: 'regions',
      version: 'dev',
      namespace: 'vegas.regions',
      src: 'modules/region/regions.js',
      requires: ['util', 'RegionCollection']
    },
    {
      name: 'RegionCollection',
      version: 'dev',
      namespace: 'vegas.RegionCollection',
      src: 'modules/region/RegionCollection.js',
      requires: ['util', 'ObjectCollection']
    },
    {
      name: 'BaseRegion',
      version: 'dev',
      namespace: 'vegas.BaseRegion',
      src: 'modules/region/BaseRegion.js',
      requires: ['util', 'Base']
    }
  ]
};


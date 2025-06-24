var cds = require('@sap/cds')

// Register OData V2 adapter
cds.on('bootstrap', app => {
  var odataV2Proxy = require('@cap-js-community/odata-v2-adapter')
  odataV2Proxy(app)
})

module.exports = cds.server

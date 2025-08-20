const keys = {
  qs: ['page:_page', 'limit:_per_page', 'sort:_sort'],
  response: ['data', 'oldData', 'page', 'count:items', 'pages']
}

async function connSanitizer (conn) {
  const { importModule } = this.app.bajo
  const generic = await importModule('doboRestproxy:/dobo/generic/conn-sanitizer.js')
  conn.connection.auth = false
  conn.connection.extra = { cacheBuster: false }
  const result = await generic.call(this, conn, keys)
  result.options.dataOnly = ['create', 'update', 'remove', 'get']
  result.options.oldData = false
  return result
}

export default connSanitizer

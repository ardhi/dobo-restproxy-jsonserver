async function factory (pkgName) {
  const me = this

  class BajoRestproxyJsonserver extends this.app.pluginClass.base {
    static alias = 'dbrpxjs'
    static dependencies = ['dobo', 'dobo-restproxy']

    constructor () {
      super(pkgName, me.app)
      this.config = {
      }
    }
  }

  return BajoRestproxyJsonserver
}

export default factory

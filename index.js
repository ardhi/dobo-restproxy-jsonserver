async function factory (pkgName) {
  const me = this

  return class BajoRestproxyJsonserver extends this.lib.BajoPlugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'dbrpxjs'
      this.dependencies = ['dobo', 'dobo-restproxy']
      this.config = {
      }
    }
  }
}

export default factory

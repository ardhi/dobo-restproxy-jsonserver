/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * DoboRestproxyJsonserver class
   *
   * @class
   */
  class DoboRestproxyJsonserver extends this.app.pluginClass.base {
    static alias = 'dbrpxjs'
    static dependencies = ['dobo', 'dobo-restproxy']

    constructor () {
      super(pkgName, me.app)
      this.config = {
      }
    }
  }

  return DoboRestproxyJsonserver
}

export default factory

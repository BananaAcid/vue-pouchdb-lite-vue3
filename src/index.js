import pouchProxy from './proxy'
import pouchMixin from './mixin'

export default {
  install: (app, defaultDB, constructor) => {
    if (defaultDB) pouchProxy.defaultDB = defaultDB
    if (constructor) pouchProxy.Constructor = constructor;

    app.config.globalProperties.$pouch = pouchProxy;
    app.mixin(pouchMixin);
  }
}

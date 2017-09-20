Ext.define("riznica.category.store.CategoryStore", {
  extend: "Ext.data.Store",

  xtype: 'categoryStore',
  alias: "store.category-Store",
  autoLoad: true,
  autoSync: true,

  fields: ["name"],


  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/category/readAll",
      write: riznica.configuration.contextPath + "/api/category/create",
      update: riznica.configuration.contextPath + "/api/category/update",
      delete: riznica.configuration.contextPath + "/api/category/delete"
    },
    reader: {
      type: "json",
      rootProperty: "data",
      totalProperty: "total"
    },

    writer: {
      type: 'json',
      writeAllFields: false,
      rootProperty: 'data'
    },
    actionMethods: { create: "POST", read: "POST", update: "POST", destroy: "POST" },
    paramsAsJson: true,
    simpleSortMode: true,
    sortParam: "sortBy",
    directionParam: "sortDirection"
  }

});

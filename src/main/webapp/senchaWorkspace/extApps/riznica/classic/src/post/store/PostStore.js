Ext.define("riznica.post.store.PostStore", {
  extend: "Ext.data.Store",

  xtype: 'postStore',
  alias: "store.post-Store",
  autoLoad: true,
  autoSync: true,

  //fields: ["postTitle", "postContent"],
  requires: [
    "riznica.post.model.PostModel"
  ],

  model: "riznica.post.model.PostModel",


  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/post/readAll",
      write: riznica.configuration.contextPath + "/api/post/create",
      // update: riznica.configuration.contextPath + "/api/post/update",
      delete: riznica.configuration.contextPath + "/api/post/delete"
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
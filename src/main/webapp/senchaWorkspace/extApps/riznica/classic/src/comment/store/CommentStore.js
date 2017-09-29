Ext.define("riznica.comment.store.CommentStore", {
  extend: "Ext.data.Store",

  xtype: 'commentStore',
  alias: "store.comment-Store",
  autoLoad: true,
  autoSync: true,

  fields: ["author", "comment","simpleDate","simpleTime"],


  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/comment/listByPostId",
      write: riznica.configuration.contextPath + "/api/comment/create",
      update: riznica.configuration.contextPath + "/api/comment/update",
      delete: riznica.configuration.contextPath + "/api/comment/delete"
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
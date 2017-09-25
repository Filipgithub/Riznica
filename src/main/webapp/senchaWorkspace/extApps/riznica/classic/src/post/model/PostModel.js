Ext.define("riznica.post.model.PostModel",
  {
    extend: "Ext.data.Model",

    fields: [
      { name: "id", type: "int", defaultValue: null, allowNull: true },
      { name: "postTitle", type: "string", defaultValue: null, useNull: true },
    ]

  });
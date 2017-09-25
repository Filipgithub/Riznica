Ext.define("riznica.category.model.CategoryModel",
  {
    extend: "Ext.data.Model",

    fields: [
      { name: "id", type: "int", defaultValue: null, allowNull: true },
      { name: "name", type: "string", defaultValue: null, useNull: true }
    ]
  });
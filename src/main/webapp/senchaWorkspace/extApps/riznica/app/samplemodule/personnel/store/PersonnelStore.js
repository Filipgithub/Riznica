Ext.define("riznica.samplemodule.personnel.store.PersonnelStore", {
  extend: "Ext.data.Store",

  alias: "store.samplemodule-personnel-store-PersonnelStore",

  fields: ["name", "email", "phone","work"],

  data: {
    items: [
      { name: "Jean Luc", email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", work : "sda" },
      { name: "Worf", email: "worf.moghsson@enterprise.com", phone: "555-222-2222", work: "sdl" },
      { name: "Deanna", email: "deanna.troi@enterprise.com", phone: "555-333-3333", work: "sad" },
      { name: "Data", email: "mr.data@enterprise.com", phone: "555-444-4444", work : "asd" }
    ]
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items"
    }
  }
});

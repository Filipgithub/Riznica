/**
 * This view is an example list of people.
 */
Ext.define("riznica.samplemodule.personnel.view.PersonnelListView", {
  extend: "Ext.grid.Grid",
  xtype: "samplemodule-personnel-view-PersonnelListView",

  requires: [
    "riznica.samplemodule.personnel.store.PersonnelStore",
    "riznica.samplemodule.personnel.view.PersonnelViewController"
  ],

  title: "Personnel",

  controller: "samplemodule-personnel-view-PersonnelViewController",

  store: {
    type: "samplemodule-personnel-store-PersonnelStore"
  },

  columns: [
    { text: "Name", dataIndex: "name", width: 100 },
    { text: "Email", dataIndex: "email", width: 230 },
    { text: "Phone", dataIndex: "phone", width: 75 },
      { text: "Work", dataIndex: "work", width: 75 },
  ],

  listeners: {
    select: "onPersonnelListItemSelected"
  }
});

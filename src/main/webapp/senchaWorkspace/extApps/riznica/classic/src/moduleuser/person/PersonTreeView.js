/**
 * This view is an example list of people.
 */
Ext.define("riznica.moduleuser.person.view.PersonView", {
    extend: "Ext.tree.Panel",
    xtype: "module-user-tree-view-Person",

    requires: [
        "riznica.moduleuser.person.store.PersonStore",
        //  "riznica.samplemodule.personnel.view.PersonnelViewController"
    ],

    title: "Users",

    //controller: "samplemodule-personnel-view-PersonnelViewController",

    store: {
        type: "person-Store"
    },


    columns: [
        {text: "User name", dataIndex: "name"},
        {text: "Password", dataIndex: "password", flex: 1},


    ],


});
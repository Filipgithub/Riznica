/**
 * This view is an example list of people.
 */
Ext.define("riznica.moduleuser.person.view.PersonView", {
    extend: "Ext.grid.Panel",
    xtype: "module-user-view-Person",

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

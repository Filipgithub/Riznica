Ext.define("riznica.moduleuser.person.store.PersonStore", {
    extend: "Ext.data.Store",

    alias: "store.person-Store",
    autoLoad: true,
    autoSync: true,

    fields: ["name", "password"],
    
    proxy: {
        type: "ajax",
        api: {
            read: riznica.configuration.contextPath + "/api/person/readAll",
            write: riznica.configuration.contextPath + "/api/person/create",
            update: riznica.configuration.contextPath + "/api/person/update",
            delete: riznica.configuration.contextPath + "/api/person/delete"
        },
// extraParams: {},
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
   /* proxy: {
        type: "memory",
        reader: {
            type: "json",
            rootProperty: "items"
        }
    }*/
});

Ext.define("riznica.post.view.PostView", {
    extend: "Ext.grid.Panel",
    xtype: "post-view-post",
    itemId: "post-view-postId",
    autoLoad: true,
    autoSync: true,


    requires: [
        "riznica.post.store.PostStore",
        "riznica.post.view.PostViewController"
    ],

    controller: "view-PostViewController",


    store: {
        type: "post-Store"
    },


    columns: [
        {
            text: "Recently added posts",
            dataIndex: "postTitle",
            width:"100%"
        }

    ],

    listeners:
        {
            cellclick: 'onPostListItemSelected',
            itemcontextmenu: "onClickItemContextMenuPost"
        }



});

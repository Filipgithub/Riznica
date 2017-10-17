Ext.define("riznica.post.view.PostView", {
  extend: "Ext.grid.Panel",
  xtype: "post-view-post",
  itemId: "post-view-postId",
  autoLoad: true,
  autoSync: true,
  width: "100%",
    // height: 400,
  scrollable: true,
  title:"Recent posts",
  flex: 1,
  requires: [
    "riznica.post.store.PostStore",
    "riznica.post.view.PostViewController"
  ],
  columns: [
    {
      text: "Recently added posts",
      dataIndex: "postTitle",
      width: "100%"
    }
  ],
  controller: "view-PostViewController",
  store: {
    type: "post-Store"
  },
  listeners:
    {
      cellclick: 'onPostListItemSelected',
      itemcontextmenu: "onClickItemContextMenuPost"
    }

});

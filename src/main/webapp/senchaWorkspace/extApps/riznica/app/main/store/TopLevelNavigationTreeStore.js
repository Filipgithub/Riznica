Ext.define('riznica.main.store.TopLevelNavigationTreeStore', {
  extend: 'Ext.data.TreeStore',
  storeId: 'main.store.TopLevelNavigationTreeStore',

  constructor: function(config) {
    var me = this;

    //noinspection UnknownClassInspection
    config.root = {
      expanded: true,

      children: [
          { text: 'Posts and Orders', topLevelRouteId: 'post', iconCls: 'x-fa fa-search', leaf: true, viewConfig: { xtype: 'post-tab-post' },isHome: true},
          { text: 'Order', topLevelRouteId: 'order', iconCls: 'x-fa fa-search', leaf: true, viewConfig: { xtype: 'order-tab-Order' } },
          { text: 'Advanced Order Search ', topLevelRouteId: 'advancedsearch', iconCls: 'x-fa fa-search', leaf: true, viewConfig: { xtype: 'order-OrderSearchView' } },
          { text: 'Upload/Download file', topLevelRouteId: 'uploaddownload', iconCls: 'x-fa fa-search', leaf: true, viewConfig: { xtype: 'upload-download' } }

      ]
    };

    me.callParent([config]);
  }
});
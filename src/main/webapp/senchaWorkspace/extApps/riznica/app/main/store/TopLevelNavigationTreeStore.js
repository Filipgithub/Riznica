Ext.define('riznica.main.store.TopLevelNavigationTreeStore', {
  extend: 'Ext.data.TreeStore',
  storeId: 'main.store.TopLevelNavigationTreeStore',

  constructor: function(config) {
    var me = this;

    //noinspection UnknownClassInspection
    config.root = {
      expanded: true,

      children: [
         // { text: 'Demo', topLevelRouteId: 'riznica', iconCls: 'x-fa fa-search', leaf: true, viewConfig: { xtype: 'samplemodule-view-SampleModuleView' } },
         // {xtype:"search-view-category",title:"Search"}
      ]
    };

    me.callParent([config]);
  }
});
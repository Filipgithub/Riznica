Ext.define("riznica.order.view.OrderViewTab", {
  extend: "Ext.panel.Panel",
  xtype: "order-tab-Order",
  itemId: "order-tab-orderId",
  autoLoad: true,
  autoSync: true,
  scrollable: true,
  width: "100%",
  title: "Orders",
  closable: true,

  requires: "riznica.order.controller.OrderViewController",

  controller: "OrderViewController",

  initComponent: function() {

    var me = this;

    Ext.apply(me, {
      items: [
        {
          xtype: 'container', items: [
          {
            layout: { type: 'hbox', align: 'middle' },
            style: 'margin: 5px 5px 5px 5px',
            items: [{
              xtype: 'button', text: "New order", align: 'right', listeners: { click: "newOrder" }
            }]
          },
          {
            layout: { type: 'vbox', align: 'middle' },
            style: 'margin: 5px 5px 5px 5px',
            items: [{
              xtype: 'order-view-grid', align: 'stretch', width: "100%"
            }]
          }
        ]
        }

      ]

    });
    me.callParent(arguments);

  }
});
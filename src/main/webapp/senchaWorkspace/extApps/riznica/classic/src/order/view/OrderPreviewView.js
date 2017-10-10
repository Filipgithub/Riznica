  Ext.define("riznica.order.view.OrderPreviewView", {

  extend: "Ext.window.Window",

  xtype: "previewView",
  itemId: "preview-view-id",
  controller: "OrderViewController",
  viewModel: { type: "OrderViewModel" },
  modal: true,
  layout: "fit",
  title: 'Order',
  autoScroll: true,
  width: 400,
  height: 300,
  closeAction: 'hide',

  requires: [
    "riznica.order.controller.OrderViewController",
    "riznica.order.model.OrderViewModel"
  ],

  items: [
    {
      style: 'margin: 5px 5px 5px 5px',
      layout: { itemId: "order-layout-id", type: "vbox", pack: 'start', align: 'center' },
      items: [
        {
          xtype: 'form', itemId: 'order-form-Id',
          items: [
            {
              xtype: 'textfield', itemId: "userNameId", name: "userName", fieldLabel: "Client", readOnly: true,
              bind: { value: '{entity.userName}' }
            },
            {
              xtype: 'textfield',itemId: "restaurantNameId", name: "restaurantName", fieldLabel: "Restaurant", readOnly: true,
              bind: { value: '{entity.restaurantName}' }
            },

            {
              xtype: 'textfield', itemId: "orderField", name: "orderFood", fieldLabel: "Order", readOnly: true,
              bind: { value: '{entity.orderFood}' }
            },
            {
              xtype: 'textfield', itemId: "dateField", name: "simpleDateFormat", fieldLabel: "Date", readOnly: true,
              bind: { value: '{entity.simpleDateFormat}' }
            },
            {
              xtype: 'textfield', itemId: "timeField", name: "time", fieldLabel: "Time", readOnly: true,
              bind: { value: '{entity.time}' }
            }
          ]
        }
      ]
    }]


});


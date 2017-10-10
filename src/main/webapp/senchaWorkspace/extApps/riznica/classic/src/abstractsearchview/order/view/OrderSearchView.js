Ext.define("riznica.abstractsearchview.view.OrderSearchView", {
  extend: "riznica.core.view.AbstractSearchView",
  alias: "widget.order-OrderSearchView",

  requires: [
    "riznica.abstractsearchview.order.view.OrderSearchGridView",
    "riznica.abstractsearchview.order.view.OrderSearchFormView",
    "riznica.core.view.AbstractSearchView",
    "riznica.abstractsearchview.order.store.OrderSearchStore",
    "Ext.container.Container",
    "Ext.grid.Panel"
  ],

  autoScroll: true,
  fieldsetTitle: "Search orders",

  initComponent: function() {
    var me = this;
    var store = Ext.create("riznica.abstractsearchview.order.store.OrderSearchStore");

    Ext.apply(me.config, {

      formXtype: "order-OrderSearchFormView",
      formId: "order.OrderSearchFormView",
      gridXtype: "order-OrderSearchGridView",
      store: store,
      // detailsUrl: "/api/employee/employeeViewConfiguration/fetchDetails?X-CSRF-Token=" + grich.core.security.CsrfAjaxManager.token,
      printable: false,
      reset: true
    });

    me.callParent(arguments);
  },

  // fetchEntityData: function(entityId) {
  //   var me = this;
  //   var submitUtils = rbvt.core.infrastructure.RbVtSubmitHelperUtils;
  //   var detailsUrl = "/api/employee/employeeViewConfiguration/fetchDetails?X-CSRF-Token=" + grich.core.security.CsrfAjaxManager.token;
  //
  //   submitUtils.invokeRequest(detailsUrl, { entityId: entityId }, me, {
  //     tabTitle: "Employee profile",
  //     wrapTo: "employee",
  //     leaveTabOpen: true,
  //
  //     findTab: function(tabPanel) {
  //       var id = entityId;
  //       var i, arrayLength;
  //
  //       var employeeViewFoundList = tabPanel.query('[xtype="myprofile-view-MyProfileView"]');
  //       var employeeView, employeeViewFound;
  //       arrayLength = employeeViewFoundList.length;
  //       for (i = 0; i < arrayLength; i++) {
  //         employeeView = employeeViewFoundList[i];
  //         if (employeeView.getViewModel().get('id') === entityId) {
  //           employeeViewFound = employeeView;
  //           break;
  //         }
  //       }
  //       return employeeViewFound;
  //     }
  //   });
  // }

});


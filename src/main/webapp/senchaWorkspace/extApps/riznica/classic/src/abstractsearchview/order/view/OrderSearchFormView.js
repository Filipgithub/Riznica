Ext.define("riznica.abstractsearchview.order.view.OrderSearchFormView", {
  extend: "grich.core.component.form.AdvancedFormPanel",
  xtype: "order-OrderSearchFormView",

  requires: [
    "Ext.button.Button",
    "Ext.container.Container",
    "Ext.form.FieldContainer",
    "Ext.form.Label",
    "Ext.form.field.Checkbox",
    "Ext.form.field.ComboBox",
    "Ext.form.field.Number",
    "Ext.form.field.Text",
    "Ext.form.field.Hidden",
    "Ext.layout.container.Box",
    "Ext.layout.container.HBox",
    "Ext.layout.container.VBox",
    "grich.core.component.form.AdvancedFormPanel",
    "Ext.form.field.Hidden",
    "riznica.abstractsearchview.order.view.OrderSearchFormViewController",
    "riznica.abstractsearchview.order.view.OrderSearchFormViewModel",
    "riznica.abstractsearchview.order.model.OrderSearchModel",
    "riznica.abstractsearchview.order.store.OrderSearchStore"
  ],

  controller: "order-search-OrderSearchFormViewController",
  viewModel: "order-search-OrderSearchFormViewModel",

  formConfig: {
    labelWidthWider: 120,
    labelAlign: "right",
    buttonWidth: 50,
    //readOnlyFieldStyle: rbvt.util.RbVtThemeUtils.readOnlyFieldStyle
  },

  title: "Search conditions",
  border: true, collapsible: true, titleCollapse: true, animCollapse: true, padding: 10,

  getParentView: function() {
    var me = this;
    var parentView = me.up("order-OrderSearchView");
    return parentView ? parentView : null;
  },

  doApplyEnterNavigationKeyMap: function() {
    var thisForm = this;
    var formPanelMainActionButton = null;
    var parentView = this.getParentView();
    if (parentView) {
      formPanelMainActionButton = parentView.down("button[cls~=form-main-action-button]");
    }

    grich.core.form.FormUtils.applyEnterNavigationKeyMap(thisForm, formPanelMainActionButton, "[isFormField]:not([excludeForm])");
  },

  initComponent: function() {
    var me = this;
    //var employeeStore = Ext.create("rbvt.employee.store.EmployeeStore");
    var orderStore = Ext.create("riznica.abstractsearchview.order.store.OrderSearchStore");
    //var employerStore = Ext.create("rbvt.registry.store.EmployerStore");
    //var departmentStore = Ext.create("rbvt.registry.store.DepartmentStore");
    //var globalJobTitleStore = Ext.create("rbvt.registry.store.GlobalJobTitleStore");
    var clearTriggerConfig = { type: "clear", hideWhenMouseOut: false, weight: -1 };

    // employeeStore.on('load',function(){
    //   me.down('[name=fullName]').setEditable(true).typeAhead = true;
    // });

    Ext.apply(me, {
      items: [
        {
          layout: "column", border: false, bodyPadding: "10 10 10 0",
          defaults: {
            layout: { type: "vbox" }, border: false,
            defaults: {
              width: "100%", margin: "5 0 5 0", triggers: { clear: clearTriggerConfig },
              labelWidth: me.formConfig.labelWidthWider, labelAlign: me.formConfig.labelAlign
            }
          },
          items: [
            {
              columnWidth: .499,
              items: [
              //  { xtype: "textfield", name: "restaurant", fieldLabel: "Restaurant ID", flex: 1, margin: "8 50 5 0", maxLength: 4, enforceMaxLength: true },
                // {
                //   xtype: "combo", name: "restaurant", fieldLabel: "Resaturant name", editable: false, margin: "8 50 5 0",
                //   displayField: "restaurnatName", valueField: "id", store: orderStore, queryMode: "local", typeAhead: false, minChars: 2,
                //   listeners: {
                //     change: function(thisEl, newValue, oldValue) {
                //       var filters = thisEl.store.getFilters();
                //       if (thisEl.value) {
                //         thisEl.mm = filters.add({
                //           id: "id",
                //           property: "fullName",
                //           value: thisEl.value,
                //           anyMatch: true,
                //           caseSensitive: false
                //         });
                //       }
                //       else if(thisEl.mm) {
                //         filters.remove(thisEl.mm);
                //         thisEl.mm = null;
                //       }
                //     }
                //   }
                // },
                // {
                //   xtype: "combo", name: "restaurant", fieldLabel: "Restaurant", editable: false, margin: "8 50 5 0",
                //   displayField: "restaurantName", valueField: "id",itemId:"restaurant", store: orderStore, queryMode: "remote"
                // },
                {
                  xtype: "combo", name: "id", fieldLabel: "Order",itemId:"id", editable: false, margin: "8 50 5 0",
                  displayField: "orderFood", valueField: "id", store: orderStore, queryMode: "remote"
                },
                {
                  xtype: "combo", name: "restaurantName", fieldLabel: "Restaurant",itemId:"restaurantName", editable: false, margin: "8 50 5 0",
                  displayField: "restaurantName", valueField: "restaurantName", store: orderStore, queryMode: "remote"
                }
              ]
            },
            // {
            //   columnWidth: .499,
            //   items: [
            //     {
            //       xtype: "combo", name: "department", fieldLabel: "Department", editable: false, margin: "8 10 5 20",
            //       displayField: "name", valueField: "id", store: departmentStore, queryMode: "remote"
            //     },
            //     { xtype: "textfield", name: "localJobTitle", fieldLabel: "Local Position Title", margin: "8 10 5 20", flex: 1 },
            //     {
            //       xtype: "combo", name: "globalJobTitle", fieldLabel: "Global Job Title", editable: false,  margin: "8 10 5 20",
            //       displayField: "title", valueField: "id", store: globalJobTitleStore, queryMode: "remote"
            //     },
            //     { xtype: "checkbox", name:"active", fieldLabel: 'Active', checked: true }
            //   ]
            // }
          ]
        }
      ]
    });
    me.callParent();
  }
});

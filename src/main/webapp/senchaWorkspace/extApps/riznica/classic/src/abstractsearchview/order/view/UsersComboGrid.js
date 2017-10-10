Ext.define("riznica.advancedsearchview.view.UsersComboGrid", {
  extend: "Ext.container.Container",
  alias: "widget.userscombogrid",

  config: {
    comboName: "usersCombo",
    comboLabel: "Label",
    comboStore: null,
    labelAlign: 'left',
    comboQueryMode: "local",
    comboDisplayField: "name",
    comboEditable: true,
    comboTypeAhead: true,
    comboEmptyText: "",
    gridDisplayText: "Name",
    gridDisplayDataIndex: "name",
    gridName: "usersGrid",
    gridStore: null,
    gridMargin: "5 0 0 0",
    gridHeight: 125,
    gridWidth: 312,
    gridBorder: false,
    gridStyle: null,
    // addButtonColor: rbvt.util.RbVtThemeUtils.addButtonColor,
    // deleteButtonColor: rbvt.util.RbVtThemeUtils.deleteButtonColor,
    addButtonIcon: "fa fa-user-plus",
    deleteButtonIcon: "fa fa-user-times"
  },

  initComponent: function() {
    var me = this;

    this.items = [
      {
        xtype: "container", layout: { type: "hbox" },
        items: [
          {
            xtype: "combo", name: this.config.comboName, itemId: this.config.comboName, fieldLabel: this.config.comboLabel, margin: "0 5 0 0", valueField: "id", displayField: this.config.comboDisplayField,
            queryMode: this.config.comboQueryMode, labelAlign: this.labelAlign, store: this.config.comboStore, editable: this.config.comboEditable, typeAhead: this.config.comboTypeAhead, minChars: 2, emptyText: this.config.comboEmptyText,
            listeners: {
              change: function() {
                var filters = this.store.getFilters();
                if (this.value) {
                  this.mm = filters.add({
                    id: "id",
                    property: this.config.comboDisplayField,
                    value: this.value,
                    anyMatch: true,
                    caseSensitive: false
                  });
                }
                else if(this.mm) {
                  filters.remove(this.mm);
                  this.mm = null;
                }
              }
            }
          },
          {
            xtype: "button", iconCls: this.config.addButtonIcon, tooltip: "Add", margin: "0 0 0 0", style: { //"background-color": this.config.addButtonColor,
            "border": '1px solid #d0d0d0'},
            handler: function() {
              var selection = this.up().up().down("#" + me.config.comboName).selection;
              if (selection) {
                var store = this.up().up().up().down("#" + me.config.gridName).getStore();
                store.add(selection.data);
              }
              this.up().up().down("#" + me.config.comboName).clearValue()
            }
          }
        ]
      },
      {
        xtype: "grid",style:'border: 1px solid #d0d0d0', name: this.config.gridName, itemId: this.config.gridName, margin: this.gridMargin, flex: 1, height: this.config.gridHeight, width: this.config.gridWidth,
        border: this.config.gridBorder, store: this.config.gridStore,
        columns: [
          {
            text: this.config.gridDisplayText, flex: 6, dataIndex: this.config.gridDisplayDataIndex,
            renderer: function(value) {
              return value;
            }
          },
          {
            xtype: "widgetcolumn", flex: 2,
            widget: {
              xtype: "button",border:false, textAlign: "center", iconCls: this.config.deleteButtonIcon,
              handler: function(btn) {
                var rec = btn.getWidgetRecord();
                this.up().up().getStore().remove(rec);
              }
            }
          }
        ]
      }
    ];
    this.callParent(arguments);
  }

});

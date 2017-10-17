Ext.define("riznica.post.view.PostViewTab", {
  extend: "Ext.panel.Panel",
  xtype: "post-tab-post",
  itemId: "post-tab-postId",
  autoLoad: true,
  autoSync: true,
  scrollable:true,
  width: "100%",
  title: "Recent posts",
  closable: true,

  requires: "riznica.post.view.PostViewTabController",

  controller: "postTab-ViewController",


  initComponent: function() {
    var me = this;
    var radioGroupValue = "category";
    Ext.apply(me, {
      items: [
        {
          xtype: "container", layout: { type: "vbox", align: 'stretch' }, items: [
          {
            layout: { type: 'hbox', align: 'stretch' },
            style: 'margin: 5px 5px 5px 5px',
            items: [
              {   //radiobutton-search filter
                xtype: 'fieldcontainer',
                //itemId: 'radioId',
                fieldLabel: 'Search post by',
                defaultType: 'radiofield',
                defaults: {
                  flex: 1
                },
                layout: 'hbox',
                items: [
                  {
                    //on click category radio button,search post by category
                    boxLabel: 'Category',
                    name: 'group',
                    checked: true,
                    id: 'radio1',
                    margin: "0px 5px 5px 0px",
                    listeners: {
                      change: function(thisEl, newValue, oldValue) {
                        var rb1 = Ext.getCmp('radio1');
                        if (rb1.getValue()) {
                          radioGroupValue = "category";
                          var searchFieldValue = me.up().down('#searchTextFieldId').getValue();
                          me.getController().searchOnChange(radioGroupValue, searchFieldValue);
                        }
                      }
                    }

                  }, {
                    //on click title radio button,search post by title
                    boxLabel: 'Title',
                    name: 'group',
                    id: 'radio2',
                    margin: "0px 5px 5px 0px",
                    listeners: {
                      change: function() {
                        var rb1 = Ext.getCmp('radio2');
                        if (rb1.getValue()) {
                          radioGroupValue = "title";
                          var searchFieldValue = me.up().down('#searchTextFieldId').getValue();
                          me.getController().searchOnChange(radioGroupValue, searchFieldValue);
                        }
                      }
                    }
                  },
                  {
                    //on click author radio button,search post by author
                    boxLabel: 'Author',
                    name: 'group',
                    id: 'radio3',
                    margin: "0px 5px 5px 0px",
                    listeners: {
                      change: function() {
                        var rb1 = Ext.getCmp('radio3');
                        if (rb1.getValue()) {
                          radioGroupValue = "author";
                          var searchFieldValue = me.up().down('#searchTextFieldId').getValue();
                          me.getController().searchOnChange(radioGroupValue, searchFieldValue);
                        }
                      }
                    }

                  }
                ]
              },
              { //search field
                xtype: 'textfield',
                style: 'margin: 5px 5px 5px 5px',
                // fieldLabel: "Search",
                width: 380,
                itemId: 'searchTextFieldId',
                // flex: 1,
                listeners: {
                  change: function(thisEl, newValue, oldValue) {
                    me.getController().searchOnChange(radioGroupValue, newValue);
                  }
                }


              },
              { //add new post
                xtype: 'button', frame: true, text: "Add new post", margin: "5px 5px 5px 5px",
                listeners: {
                  //on click listener -add new post button
                  click: "addNewPost"
                }
              }
            ]
          },
          {
            //xtype: "container",
            layout: { type: 'hbox', align: 'stretch' },
            style: 'margin: 5px 5px 5px 5px',
            items: [
              {
                xtype: 'category-view-category', style: 'margin: 5px 5px 5px 5px', border: true,
                title: "Category", flex: 1, width: 100, collapsible: true, split: true, itemId: 'category-view-id'
              },
              {
                xtype: 'post-view-post',
                width: "100%",
                scrollable: true,
                flex: 4,
                border: true,
                style: 'margin: 5px 5px 5px 5px',
                // tools: [
                //   {
                //     xtype: 'button',
                //     iconCls: "x-fa fa-refresh",
                //     handler: function() {
                //       Ext.ComponentQuery.query("#post-view-postId")[0].getStore().load();
                //     }
                //   }
                // ]
              }
            ]
          }]
        }
      ]

    });
    me.callParent(arguments);
  }
});
/**
 * This class is the main view for the application. It is specified in app.js as the "mainView" property. That setting automatically applies the "viewport" plugin causing this view to become the
 * body element (i.e., the viewport).
 */
Ext.define("riznica.moduleuser.view.ModuleUserView", {
    extend: "Ext.tab.Panel",
    xtype: "module-view-User",

    requires: [
        "Ext.layout.container.boxOverflow.None",
        "Ext.plugin.Responsive",
        "riznica.moduleuser.view.ModuleUserViewModel",
        "riznica.moduleuser.person.view.PersonView",
    ],

    viewModel: {
        alias: "module-user-view-model"
    },
    items: [

        {
            title: "Home",
            iconCls: "fa-home",


            // The following grid shares a store with the modern version's grid as well.
            items: [


                {xtype: "module-user-view-Person", itemId: "personGrid"}

                /*  {xtype:"button",text:"Add new user",
                   handler:function () {
                       Ext.create('Ext.form.Panel', {
                           floating: true,
                           centered: true,
                           modal: true,
                           renderTo: Ext.getBody(),
                           title: 'User Form',
                           height: 350,
                           width: 300,
                           bodyPadding: 10,
                           defaultType: 'textfield',
                           items: [
                               {
                                   fieldLabel: 'Name',
                                   name: 'name'
                               },
                               {
                                   fieldLabel: 'Password',
                                   name: 'password'
                               },
                               {
                                   xtype: 'button',
                                   text: 'Save',
                                   handler: function(thisEl){
                                       grich.core.util.AjaxSubmitHelper.invokeRequest({
                                           url: riznica.configuration.contextPath + "/api/person/create",
                                           method: "POST",
                                           jsonData: thisEl.up('form').getForm().getValues(),
                                           // When data are received, add localFormConfigurationList to it if necessary.
                                           success: function(response, options, responseJsonObject) {
                                               //var localFormConfigurationList, i, arrayLength, formIdLocal, formFieldConfigurationList, formConfiguration, formConfigurationList;
                                               //var convertedJsonObject = grich.core.form.ConstraintConversionService.convertResponseToExtjsFormConfiguration(responseJsonObject);
                                               alert('korisnik sacuvan');

                                           }
                                       });
                                   }
                               },
                               {
                                   xtype: 'button',
                                   text: 'Cancel',
                                   handler: function () {

                                   }
                               }
                           ]

                       });
                   }
                   }  */


            ]
        }




        /* {

             title: "Personnel",
             iconCls: "fa-user",
             bind: {
                 html: "{loremIpsum}"
             }
         },
         {
             title: "Groups",
             iconCls: "fa-users",
             bind: {
                 html: "{loremIpsum}"
             }
         },
         {
             title: "Settings",
             iconCls: "fa-cog",
             bind: {
             html: "{loremIpsum}"
             }
          }*/

    ],
    /*  initComponent: function() {
          var me = this*/


    // Ext.apply(me, {
    //  items: [
    // {
    //     title: "Home",
    //     iconCls: "fa-home",
    //
    //     // The following grid shares a store with the modern version's grid as well.
    //     items: [
    //
    // {xtype: "module-user-view-Person", itemId: "personGrid"},

    //  {xtype: "button", text: "Add"}

    //     ]
    // },
    // {
    //     title: "Personnel",
    //     iconCls: "fa-user",
    //     bind: {
    //         html: "{loremIpsum}"
    //     }
    // },
    // {
    //     title: "Groups",
    //     iconCls: "fa-users",
    //     bind: {
    //         html: "{loremIpsum}"
    //     }
    // },
    // {
    //     title: "Settings",
    //     iconCls: "fa-cog",
    //     bind: {
    //         html: "{loremIpsum}"
    //     }
    // }
    //   ]
    // });
    //   me.callParent(arguments);
    //me.down('#personGrid').getStore().load();
    //  },*/


    ui: "navigation",

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0, border: true,

    header: {
        layout: {
            align: "stretchmax"
        },
        title: {
            bind: {
                text: "{name}"
            },
            flex: 0
        },
        iconCls: "fa-th-list"
    },

    tabBar: {
        flex: 1,
        layout: {
            align: "stretch",
            overflowHandler: "none"
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: "top"
        },
        wide: {
            headerPosition: "left"
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: "responsive",
            responsiveConfig: {
                wide: {
                    iconAlign: "left",
                    textAlign: "left"
                },
                tall: {
                    iconAlign: "top",
                    textAlign: "center",
                    width: 120
                }
            }
        }
    }
});

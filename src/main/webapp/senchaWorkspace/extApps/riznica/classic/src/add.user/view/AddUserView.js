Ext.define("riznica.add.user.view.AddUserView", {

    extend: "Ext.window.Window",
    xtype: "add-new-user",
    itemId:"addwin",
    controller: "view.addNewUser",
    autoShow: true,
    modal: true,
    layout: "fit",


    // itemId: "CategoryFormId",
    title: 'Add new user',
    autoScroll: true,
    //  y: 120,
    width: 500,
    height: 250,
    closeAction: 'hide',
    items: [
        {
            style: 'margin: 5px 5px 5px 5px',
            layout: {
                type: "vbox",
                pack: 'start',
                align: 'center'
            },

            items: [

                {
                    xtype: 'form',
                    itemId:'user-form',
                    // width: 400,
                    // height: 200,
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: "usrName",
                            fieldLabel: 'User name',
                            inputType: 'username',
                            name: 'username',
                            text: 'User'
                        },
                        {
                            xtype: 'textfield',
                            itemId: "password",
                            fieldLabel: 'Password',
                            inputType: 'password',
                            name: 'password',
                            text: 'Password'
                        }


                    ]
                },


                {
                    xtype: 'button',
                    text: "Save user",
                    handler: "onClickAddNewUser"

                }
            ]
        }]


});


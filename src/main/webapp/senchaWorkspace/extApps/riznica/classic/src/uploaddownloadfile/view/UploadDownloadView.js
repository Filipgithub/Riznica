Ext.define("riznica.uploaddownloadfile.view.UploadDownloadView", {
  extend: "Ext.panel.Panel",
  xtype: "upload-download",
  itemId: "upload-download-Id",
  autoLoad: true,
  autoSync: true,
  scrollable: true,
  width: "100%",
  title: "Upload/Download",
  closable: true,

  requires: 'riznica.uploaddownloadfile.view.UploadDownloadViewViewController',

  controller: "UploadDownloadViewController",

  initComponent: function() {

    var me = this;
    Ext.apply(me, {
        items: [
          {

            xtype: 'container', flex: 1,layout: { type: 'hbox', align: 'middle' },style: 'margin: 5px 10px 5px 5px',
            items: [
              //upload image
              { xtype: 'fileuploadfield', title: 'Upload file', width: 400, bodyPadding: 10, style: "margine 50px 20px 10px 5px", frame: true,
                renderTo: Ext.getBody(),
                items: [{ xtype: 'filefield', name: 'photo', fieldLabel: 'Photo', labelWidth: 50, msgTarget: 'side', allowBlank: false, anchor: '100%', buttonText: 'Select file...'
                }],
                listeners: {
                  change: function() {
                    // var title = this.up('form').down('#productTitle').getValue();
                    // var title = this.up().up().getStore();
                    // var path = this.getValue();
                    // var name = this.getValue().replace(/^.*[\\\/]/, '');
                    var file = this.getEl().down('input[type=file]').dom.files[0];

                    var fileReader = new FileReader();
                    fileReader.addEventListener("load", function() {

                      // var record = Ext.create("riznica.product.model.DocumentModel",
                      // { image: fileReader.result });
                      riznica.main.view.MainViewUtils.uploadDocument = fileReader.result;
                    }, false);

                    if (file != null) {
                      fileReader.readAsDataURL(file);
                    }
                  },
                  afterrender: function(cmp) {
                    cmp.fileInputEl.set({
                      accept: 'image/*,application/pdf'
                    });
                  }
                }
              },
              { //add new post
                xtype: 'button', text: "Send file", margin: '5 5 5 5',
                listeners: {
                  //on click listener -add new post button
                  click: "sendImage"
                }
              },
              { //add new post
                xtype: 'button',text: "Get file",margin: '5 5 5 5',
                listeners: {
                  //on click listener -add new post button
                  click: "getImage"
                }
              }

            ]
          }]
      }
    );
    me.callParent(arguments);

  }
});

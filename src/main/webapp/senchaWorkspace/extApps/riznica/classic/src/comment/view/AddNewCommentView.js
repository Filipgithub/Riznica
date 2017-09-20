Ext.define("riznica.comment.view.AddNewCommentView", {

  extend: "Ext.window.Window",
  xtype: "add-new-comment",
  itemId: "addcommwin",
  controller: "view-CommentViewController",
  requires: [
    "riznica.comment.controller.CommentViewController"
  ],
  autoShow: true,
  modal: true,
  layout: "fit",


  // itemId: "CategoryFormId",
  title: 'Add new comment',
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

          itemId: 'comment-form',

          items: [
            {
              xtype: 'textfield',
              itemId: "commentId",
              fieldLabel: 'Comment',
              name: 'comment',
              text: 'Comment'
            }


          ]
        },


        {
          xtype: 'button',
          text: "Save comment",
          handler: "addNewComment"

        }
      ]
    }]


});


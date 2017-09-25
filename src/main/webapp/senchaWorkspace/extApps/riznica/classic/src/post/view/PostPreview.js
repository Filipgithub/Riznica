Ext.define("riznica.post.view.PostPreview", {

  extend: "Ext.window.Window",

  xtype: "postPreview",
  itemId: "post-preview-id",
  // bind
  // title:"",
  layout: 'fit',
  autoScroll: true,
  y: 60,
  width: 600,
  height: 630,
  modal: true,
  listeners: {
    boxready: function(thisEl) {
      debugger;
      var id = this.getViewModel().data.entity.id;
      var commentsStore = this.down("#comments").getStore();
      commentsStore.proxy.extraParams = {
        postId: id
      };
      commentsStore.load();
    }
  },
  viewModel: { type: "PostViewModel" },

  requires: [
    "riznica.post.model.PostViewModel"
  ],

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
          xtype: 'form', width: 600,
          height: 600, items: [
          {
            xtype: 'textfield', name: 'id',
            // value: post.id,
            bind: { value: '{entity.id}' },
            hidden: true
          },
          {
            xtype: 'textfield',
            readOnly: true,
            fieldLabel: 'Post Author',
            name: 'postAuthor',
            //value: post.user.username
            //bind
            bind: { value: '{entity.user.username}' }
          },
          {
            xtype: 'textfield',
            readOnly: true,
            fieldLabel: 'Post Category',
            name: 'postCategory',
            //value: post.category.name,
            //bind
            bind: { value: '{entity.category.name}' }
          },

          {
            xtype: 'textarea',
            readOnly: true,
            itemId: 'content',
            name: 'postContent',
            width: "80%",
            height: 250,
            fieldLabel: 'Post Content',
            //value: post.postContent
            //bind
            bind: { value: '{entity.postContent}' }
          },
          {
            xtype: "comment-view-comment",
            itemId: "comments"
          }


        ]
        }
      ]
    }
  ]
});

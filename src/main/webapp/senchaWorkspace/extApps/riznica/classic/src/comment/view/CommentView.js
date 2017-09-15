Ext.define("riznica.comment.view.CommentView", {
        extend: "Ext.grid.Panel",
        xtype: "comment-view-comment",
        itemId: "comment-view-commentId",
        readOnly: true,
        height: 240,
        scrollable:true,
        //overflowY: 'scroll',
        title: "Comments",



        requires: [
            "riznica.comment.store.CommentStore",
            "riznica.comment.controller.CommentViewController"
        ],
        controller: "view-CommentViewController",

        store: {
            type: "comment-Store"
        },


        columns: [
            {
                text: "Author",
                dataIndex: "author",
                flex: 1
            },
            {
                text: "Comment",
                dataIndex: "comment",
                flex: 3
            }
        ],
    //adding new comment
    tools: [{
        type: 'plus',
        handler: function () {
            var config =
                {
                    xtype: "add-new-comment"
                }
                console.log(this);
                var postInstance = this.up('form').getForm().getValues();
            var win = Ext.ComponentMgr.create(config);
            win.postInstance = postInstance;

            win.show();
        }

    }]

    }
);
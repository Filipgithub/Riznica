Ext.define("riznica.comment.controller.CommentViewController", {
    extend: "Ext.app.ViewController",
    xtype:  "comment-view-controller",
    alias: "controller.view-CommentViewController",


    addNewComment:function (thisEl) {

        var post = thisEl.up('window').postInstance;
        var data = thisEl.up().down("#comment-form").getForm().getNestedValues();
        data.post = post;
        console.log(data);
        grich.core.util.AjaxSubmitHelper.invokeRequest({
            url: riznica.configuration.contextPath + "/api/comment/create",
            method: "POST",
            //maskComponents: { component: thisEl.getView() },
            jsonData: data,
            // scope: me,
            async: false,
            success: function (response, options, responseTextDecoded) {
                if (responseTextDecoded.success === true) {
                    //debugger;
                    // Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load();
                    //  alert("New user saved!");
                  //  Ext.ComponentQuery.query('#comment-view-commentId')[0].getStore().load();

                    thisEl.up('#addcommwin').close();
                    Ext.ComponentQuery.query("#comment-view-commentId")[0].getStore().load()
                }
            }

        });

    }


});

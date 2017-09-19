/**
 * This class is the controller for the main view for the application. It is specified as the 'controller' of the Main view class.
 */
Ext.define('riznica.main.view.MainViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main-view-MainViewController',

    requires: [
        'Ext.data.StoreManager',
        'riznica.core.view.*',
        'riznica.samplemodule.view.SampleModuleView',
        'riznica.misc.view.AboutView',
        'riznica.demo.view.NotificationDemoView',
        'riznica.demo.view.SimpleFormDemoView'
    ],

    listen: {
        global: {
            'ADD_TOP_LEVEL_TAB': 'onAddTopLevelTab',
            'REMOVE_ACTIVE_TOP_LEVEL_TAB': 'onRemoveTopLevelTab'
        },
        controller: {
            '#': {
                unmatchedroute: 'onRouteChange'
            }
        }
    },

    routes: {
        ':topLevelRouteId': {
            before: 'onBeforeRouteChange',
            action: 'onRouteChange'
        }
    },

    initViewModel: function (viewModel) {
        var topLevelNavigationTreeStore = Ext.data.StoreManager.lookup('main.store.TopLevelNavigationTreeStore');
        var homeNode = topLevelNavigationTreeStore.findNode('isHome', true);
        var viewModelData = viewModel.getData();

        if (homeNode) {
            viewModelData.homeTopLevelRouteId = homeNode.get('topLevelRouteId');
        }
    },

    onMainViewRender: function () {
        var me = this;
        var mainView = me.getView();
        var viewModelData, homeTopLevelRouteId;

        if (mainView.homeAutoNavigate && !window.location.hash) {
            viewModelData = me.getViewModel().getData();
            homeTopLevelRouteId = viewModelData.homeTopLevelRouteId;
            me.redirectTo(homeTopLevelRouteId, false);
        }
    },

    onRemoveTopLevelTab: function () {
        var me = this;
        var mainTabPanelContainer = me.lookupReference('mainTabPanelContainer');
        var activeTab = mainTabPanelContainer.getInnerTabPanel().getActiveTab();

        if (activeTab) {
            activeTab.close();
        }
    },

    onAddTopLevelTab: function (eventData) {
        var me = this;
        var mainTabPanelContainer = me.lookupReference('mainTabPanelContainer');

        var myEventData = eventData || {};
        var tabConfig = myEventData.tabConfig || {};
        var tabDescriptor = myEventData.tabDescriptor || {};

        Ext.suspendLayouts();
        mainTabPanelContainer.addTab(tabConfig, tabDescriptor);
        Ext.resumeLayouts(true);
    },

    onBeforeRouteChange: function () {
        var me = this;
        var args = Ext.Array.slice(arguments);

        // Every before action will get passed an `action` argument with a `resume` and `stop` methods
        // as the last argument of the method
        var action = args[args.length - 1];

        if (!riznica.core.infrastructure.ApplicationUtils.appReady) {
            // Stop route execution if application not fully loaded
            action.stop();
            Ext.GlobalEvents.on('appready', Ext.Function.bind(me.onBeforeRouteChange, me, args), me);
        } else {
            action.resume();
        }
    },

    onRouteChange: function (topLevelRouteId) {
        this.displayCurrentView(topLevelRouteId);
    },

    displayCurrentView: function (topLevelRouteId) {
        var me = this;

        var references = me.getReferences();
        var hashTag, viewModelData, node, viewConfig;
        var mainTabPanelContainer, innerTabPanel;
        var lastView, existingView, newView, newViewConfig;

        hashTag = (topLevelRouteId || '').toLowerCase();

        //noinspection JSUnresolvedVariable
        mainTabPanelContainer = references.mainTabPanelContainer;

        innerTabPanel = mainTabPanelContainer.getInnerTabPanel();

        node = null;
        viewConfig = null;
        existingView = null;
        newView = null;

        viewModelData = me.getViewModel().getData();
        lastView = viewModelData.currentView;

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        // Need to update if last view was window, and/or just in case
        lastView = innerTabPanel.isPresentInDisplay ? innerTabPanel.getActiveTab() : null;

        if (hashTag !== '') {
            existingView = innerTabPanel.isPresentInDisplay ? innerTabPanel.child('component[topLevelRouteId=' + hashTag + ']') : null;
            node = Ext.data.StoreManager.lookup('main.store.TopLevelNavigationTreeStore').findNode('topLevelRouteId', hashTag);

            if (existingView) {
                // activate the existing view unless it is already active.
                if (existingView !== lastView) {
                    innerTabPanel.suspendEvents();
                    innerTabPanel.setActiveItem(existingView);
                    innerTabPanel.resumeEvents(true);
                }

                newView = existingView;
            }
            else {
                viewConfig = node ? node.get('viewConfig') : null;

                if (viewConfig === null) {
                    newView = Ext.create({
                        xtype: 'core-view-NotFound404View',
                        homeScreenHash: viewModelData.homeTopLevelRouteId
                    });
                }
                else {
                    newViewConfig = Ext.Object.merge(viewConfig, {topLevelRouteId: hashTag});
                    newView = Ext.create(newViewConfig);
                    if (!newView.title) {
                        newView.title = node.get('text');
                    }
                }

                if (!newView.isWindow) {
                    // newView is set and did not exist already, so add it and make it the activeItem.
                    Ext.suspendLayouts();
                    innerTabPanel = mainTabPanelContainer.addInnerTabPanelInDisplayIfNecessary();
                    innerTabPanel.setActiveItem(innerTabPanel.add(newView));
                    Ext.resumeLayouts(true);
                }
            }

            viewModelData.currentView = newView;
        }
        else {
            viewModelData.currentView = null;
            existingView = innerTabPanel.isPresentInDisplay ? innerTabPanel.getActiveTab() : null;
            if (existingView) {
                me.redirectTo(existingView.topLevelRouteId, false);
            }
        }
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        if (node && node.get('viewConfig')) {
            this.redirectTo(node.get('topLevelRouteId'), false);
        }
    },

    onNavigationButtonClick: function (clickedItem) {
        if (clickedItem.viewConfig) {
            this.redirectTo(clickedItem.topLevelRouteId, false);
        }
    },
    addNewPost: function () {
        var win = new Ext.Window({
            itemId: "postFormId",
            title: 'Add new post',
            layout: 'fit',
            autoScroll: true,
            y: 120,
            width: 600,
            height: 600,
            modal: true,
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
                            xtype: 'form', width: 600,
                            height: 480, items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Blog Title',
                                name: 'postTitle',
                                text: 'Blog title'
                            },
                            {
                                xtype: 'combobox',
                                fieldLabel: 'Blog Category',
                                store: new riznica.category.store.CategoryStore(),
                                queryMode: 'remote',
                                displayField: 'name',
                                name: 'postCategory',
                                valueField: 'id'

                            },

                            {
                                xtype: 'textarea',
                                itemId: 'content',
                                name: 'postContent',
                                width: "80%",
                                height: 250,
                                fieldLabel: 'Blog Content'

                            }
                        ]
                        },
                        {
                            xtype: 'button',
                            text: "Save post",
                            handler: 'saveRecentPost'

                        }
                    ]
                }
            ]


        });
        win.show();
    },

    saveRecentPost: function (thisEl) {

        var data = thisEl.up().down('form').getForm().getValues();
        console.log(data);
        grich.core.util.AjaxSubmitHelper.invokeRequest({
            url: riznica.configuration.contextPath + "/api/post/create",
            method: "POST",
            //maskComponents: { component: thisEl.getView() },
            jsonData: data,
            // scope: me,
            async: false,
            success: function (response, options, responseTextDecoded) {
                if (responseTextDecoded.success === true) {
                    //debugger;
                    Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load();
                    //alert("New post saved!");
                    var notificationDescriptor = {
                        notification: {
                            severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
                            titleText: "Post saved!!!",
                            contentText: "Success"

                        }
                    };
                    thisEl.up('#postFormId').close();
                    grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);

                }
            }

        });
    },
    searchOnChange: function (filterType, filterValue) {

        if(filterType=="category") {
            //search for posts by category
            Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load({
                params: {categoryName: filterValue}
            });
        }
        else if(filterType=="title") {
           //search for posts by post title
              Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load({
                  params: {postTitle: filterValue}
              });
        }
        else if(filterType=="author"){
            //search for posts by post author
            Ext.ComponentQuery.query('#post-view-postId')[0].getStore().load({
                params: {userName: filterValue}
            });

        }
    },


    onClickAddUser: function () {
        Ext.create('riznica.add.user.view.AddUserView');
    },


    onMainTabPanelTabChange: function (tabPanel, newTab) {
        var me = this;

        var newTopLevelRouteId = newTab.topLevelRouteId;
        var topLevelNavigationTreeStore, node;

        if (newTopLevelRouteId) {
            topLevelNavigationTreeStore = Ext.data.StoreManager.lookup('main.store.TopLevelNavigationTreeStore');
            node = topLevelNavigationTreeStore.findNode('topLevelRouteId', newTopLevelRouteId);

            if (node) {
                // In this case routing is used to update url anchor tag and to update selection on top level navigation tree.
                me.redirectTo(newTopLevelRouteId, false);
            }
        }
    },

    onMainTabPanelAllTabsClosed: function () {
        this.redirectTo('', false);
    },

    onToggleNavigation: function () {
        var me = this;
        var navigationContainer = me.lookupReference('navigationContainer');
        var currentNavigationContainerWidth = navigationContainer.getWidth();

        if (currentNavigationContainerWidth > 0) {
            navigationContainer.setVisible(false);
        }
        else {
            navigationContainer.setVisible(true);
        }
    },

    onAdministration: function () {
        //noinspection JSUnresolvedVariable
        window.location = riznica.configuration.contextPath + '/admin';
    },

    onAbout: function () {
        Ext.create('riznica.misc.view.AboutView');
    },

    onSignOut: function () {
        //noinspection JSUnresolvedVariable
        window.location = riznica.configuration.contextPath + '/logout';
    },

    onLanguageChange: function (menuItem) {
        var windowLocationSearchString, queryObject;

        if (menuItem.checked === false) {
            return;
        }

        windowLocationSearchString = window.location.search;
        queryObject = Ext.Object.fromQueryString(windowLocationSearchString);
        queryObject.lang = menuItem.localeCode;
        windowLocationSearchString = Ext.Object.toQueryString(queryObject);

        window.location.search = '?' + windowLocationSearchString;
    },

    onThemeChange: function (menuItem) {
        var currentToolkit;

        if (menuItem.checked === false) {
            return;
        }

        //noinspection JSUnresolvedVariable
        currentToolkit = Ext.platformTags.classicToolkit ? 'classic' : 'modern';

        //noinspection JSUnresolvedVariable
        window.location = riznica.configuration.contextPath + '/api/viewport/changeTheme?newTheme=' + menuItem.themeName + '&currentToolkit=' + currentToolkit;
    }
});

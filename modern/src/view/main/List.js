/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.User'
    ],

    title: 'Users',

    store: {
        type: 'user'
    },

    columns: [
        { text: 'ИД', dataIndex: 'id', flex: 1 },
        { text: 'Логин', dataIndex: 'login', flex: 1 },
        { text: 'Статус', dataIndex: 'id_status', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

Ext.define('MyApp.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.user',

    model: 'MyApp.model.User',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'users.json',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }
});
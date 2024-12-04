Ext.define('MyApp.model.User', {
    extend: 'MyApp.model.Base',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'login', type: 'string' },
        { name: 'id_status', type: 'int' }
    ]
});
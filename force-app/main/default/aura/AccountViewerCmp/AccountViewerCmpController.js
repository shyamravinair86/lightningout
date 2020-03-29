({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'text'}
        ]);
        helper.getAccounts(component);
    }
})

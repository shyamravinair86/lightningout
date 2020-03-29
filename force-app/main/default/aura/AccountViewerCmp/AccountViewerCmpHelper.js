({
    getAccounts : function(component) {
        var action = component.get('c.getAccounts');
        action.setCallback(this, $A.getCallback(function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set('v.accounts', response.getReturnValue());
            } else if(state === "ERROR") {
                var errors = response.getError();
                console.log(errors);
            } else {
                console.log('UNKNOWN ERROR');
            }
        }));
        $A.enqueueAction(action);
    }
})

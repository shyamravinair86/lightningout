import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class AccountViewerLWC extends LightningElement {
    @track accounts;
    @track columns = [
        {
            label: 'Account Name',
            fieldName: 'Name',
            type: 'text',
            sortable: true
        },
        {
            label: 'Phone',
            fieldName: 'Phone',
            type: 'text',
            sortable: true
        }
    ];

    @wire(getAccounts) wiredAccounts({data, error}) {
        if(data) {
            this.accounts = data;
        } else if(error) {
            const errEvent = new ShowToastEvent({
                title: 'Accounts Not Found.',
                message: error.body.message,
                variant: 'error',
            });
            this.dispatchEvent(errEvent);
        }
    }

}
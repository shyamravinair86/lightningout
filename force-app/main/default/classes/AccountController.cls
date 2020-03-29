/**
 * @File Name          : AccountController.cls
 * @Description        : 
 * @Author             : Shyam Nair
 * @Group              : 
 * @Last Modified By   : Shyam Nair
 * @Last Modified On   : 28/3/2020, 8:21:01 pm
 * @Modification Log   : 
 * Ver       Date            Author      		    Modification
 * 1.0    28/3/2020   Shyam Nair     Initial Version
**/
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Phone FROM Account];
    }
}

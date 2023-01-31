import { TAccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
    public static TABLE_ACCOUNTS = "accounts"

    public async findAccounts() {
       
            // const result: TAccountDB[] = await db("accounts")
            const result: TAccountDB[] = await BaseDatabase
            .connection(AccountDatabase.TABLE_ACCOUNTS)
           
            return result
    }

    public async findAccountById(id:string) {
        const [ accountDB ]: TAccountDB[] | undefined[] = await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).where({ id })
        return accountDB
    }

    public async insertAccount (newAccountDB : TAccountDB){
        await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).insert(newAccountDB)
    }

    public async updateAccount (accountDB : TAccountDB){
        await BaseDatabase.connection(AccountDatabase.TABLE_ACCOUNTS).update(accountDB)
    }
}
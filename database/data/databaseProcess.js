import { assert } from 'console';
import MongoClient from 'mongodb';
import { callbackify } from 'util';

class databaseProcess {
    constructor() {
        state = {
            url : 'mongodb://localhost:27017',
            dbName : 'cloreCards',
            connection : null,
        }
    }

    initConnection() {
        MongoClient.connect(thi.state.url, function(err, client) {
            assert.equal(null, err);
            console.log("Connection successful");
        })

        var db = client.db(this.state.dbName);
        this.setState({
            connect : db
        })
    }

    insert() {
        var collection = this.state.db.collection('documents');
        collection.insertMany([
            { a : 1 }, { b : 2 }, { c : 3 } 
        ], function (err, result) {
            console.log("Insert 3 documents");
        });
    }

    close() {
        client.close();
    }
}
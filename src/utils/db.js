import * as mongoose from "mongoose";

import {DB_URI} from "./constants";

class DB {
    static connect() {
        mongoose.connect(
            DB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
    }

    static disconnect() {
        mongoose.disconnect().then(_ => {});
    }
}

export default DB

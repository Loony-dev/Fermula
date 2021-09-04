import {Schema} from "mongoose";

const userSchema = new Schema({
    vkId: Number,
    lvl: Number,
    exp: Number,
    balance: Number,
    date_reg: Date,
    has_seen_intro: Boolean
})

export default userSchema

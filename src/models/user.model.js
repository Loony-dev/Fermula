import {model} from "mongoose";

import userSchema from "../schemas/user.schema";

import DB from "../utils/db";

const userModel = model("User", userSchema);

class User {
    constructor(vkId) {
        this.vkId = vkId;
    }

    create() {
        DB.connect()

        this.user = new userModel({
            vkId: this.vkId,
            lvl: 1,
            exp: 0,
            balance: 100,
            date_reg: new Date(Date.now()),
            has_seen_intro: false
        })

        this.user.save().then(function () {
            console.log('Пользователь успешно сохранен! vkId: ' + this.vkId)
        }).catch(function (error) {
            // -- TODO - Show error on screen
            console.error('Ошибка сохранения пользователя! vkId: ' + this.vkId + '\n\nОшибка:\n' + error)
        })

        DB.disconnect()
    }

    load() {
        DB.connect()

        userModel.findOne({vkId: this.vkId}, function(error, doc) {
            DB.disconnect()

            if (error) // -- TODO - Show error on screen
                return console.error('Ошибка загрузки пользователя! vkId: ' + this.vkId + '\n\nОшибка: ' + error)

            this.user = new userModel({
                vkId: this.vkId,
                lvl: doc['lvl'],
                exp: doc['exp'],
                balance: doc['balance'],
                date_reg: doc['date_reg'],
                has_seen_intro: doc['has_seen_intro']
            })
        })
    }

    check() {
        DB.connect()

        userModel.findOne({vkId: this.vkId}, function(error) {
            DB.disconnect()

            return !error
        })

        return false
    }

    getModel() {
        return this.user;
    }
}

export default User

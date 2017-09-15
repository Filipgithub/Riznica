package hr.addiko.riznica.user

import grails.plugin.grich.core.util.HibernateUtils
import grails.plugin.grich.registry.controller.GrichRegistryDataController
import grails.transaction.Transactional
import hr.addiko.riznica.User
import hr.addiko.riznica.core.command.UserCommand

@Transactional
class UserService extends GrichRegistryDataController {


    def readAll() {
        def result = hr.addiko.riznica.user.User.findAll()

        HibernateUtils.initialize(result)

        [success: true, data: result]
    }

    def create(UserCommand cmd) {


        User usr = new User(username: cmd.username, password: cmd.password)
        usr.save()
        [success: true]
    }


    def update(UserCommand cmd) {

//
//            hr.addiko.riznica.user.User.executeUpdate(
//                    "UPDATE User p SET " +
//                            "p.UserName=:newUserName, p.UserTitle=:newUserTitle, p.UserContent=:newUserContent" +
//                            "WHERE p.id=:id",
//                    [newUserAtuhor    : cmd.UserAuthor, newUserTitle: cmd.UserTitle, newUserContent: cmd.UserContent
//                     , newUserCategory: cmd.UserCategory, id: cmd.id]
//            )
//
//
//            [success: true]
    }

    def delete(UserCommand cmd) {

        User.findById(cmd.id).delete()

        [success: true]
    }


}

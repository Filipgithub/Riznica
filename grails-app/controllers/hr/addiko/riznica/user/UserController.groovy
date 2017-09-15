package hr.addiko.riznica.user

import grails.plugin.grich.registry.controller.GrichRegistryDataController
import grails.plugin.grich.search.command.BaseSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.UserCommand

@Transactional
class UserController extends GrichRegistryDataController  {

    UserService UserService

    def readAll() {
        BaseSearchCommand cmd = new BaseSearchCommand()
        cmd.limit = 0
        cmd.start = 0
        validateCallAndRender(cmd,{UserService.readAll()})
    }

    def create(UserCommand cmd){
        validateCallAndRender(cmd, { UserService.create(cmd) })
    }

    def update(UserCommand cmd){
        validateCallAndRender(cmd, { UserService.update(cmd) })
    }

    def delete(UserCommand cmd){
        validateCallAndRender(cmd, { UserService.delete(cmd) })

    }

}

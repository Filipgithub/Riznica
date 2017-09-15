package hr.addiko.riznica.comment


import grails.plugin.grich.registry.controller.GrichRegistryDataController
import grails.plugin.grich.search.command.BaseSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.CommentCommand


@Transactional
class CommentController extends GrichRegistryDataController {

    CommentService commentService

    def readAll() {
        BaseSearchCommand cmd = new BaseSearchCommand()
        cmd.limit = 0
        cmd.start = 0
        validateCallAndRender(cmd, { commentService.readAll() })
    }

    def create(CommentCommand cmd) {
        validateCallAndRender(cmd, { commentService.create(cmd) })
    }

    def update(CommentCommand cmd) {
        validateCallAndRender(cmd, { commentService.update(cmd) })
    }

    def delete(CommentCommand cmd) {
        validateCallAndRender(cmd, { commentService.delete(cmd) })

    }

    def  listByPostId(CommentCommand cmd){
        validateCallAndRender(cmd,{commentService.listByPostId(cmd)})
    }

}

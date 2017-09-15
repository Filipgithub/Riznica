package hr.addiko.riznica.post

import grails.plugin.grich.registry.controller.GrichRegistryDataController
import grails.plugin.grich.search.command.BaseSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.PostCommand

@Transactional
class PostController extends GrichRegistryDataController  {

    PostService postService

    def readAll() {
        BaseSearchCommand cmd = new BaseSearchCommand()
        cmd.limit = 0
        cmd.start = 0
        validateCallAndRender(cmd,{postService.readAll()})
    }

    def create(PostCommand cmd){
        validateCallAndRender(cmd, { postService.create(cmd) })
    }

    def update(PostCommand cmd){
        validateCallAndRender(cmd, { postService.update(cmd) })
    }

    def delete(PostCommand cmd){
        validateCallAndRender(cmd, { postService.delete(cmd) })

    }

}

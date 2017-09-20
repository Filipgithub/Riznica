package hr.addiko.riznica.person

import grails.plugin.grich.registry.controller.GrichRegistryDataController
import grails.plugin.grich.search.command.BaseSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.PersonCommand

@Transactional
class PersonController extends GrichRegistryDataController {

  PersonService personService

  def readAll() {
    BaseSearchCommand cmd = new BaseSearchCommand()
    cmd.limit = 0
    cmd.start = 0
    validateCallAndRender(cmd, { personService.readAll() })
  }

  def create(PersonCommand cmd) {
    validateCallAndRender(cmd, { personService.create(cmd) })
  }

  def update(PersonCommand cmd) {
    validateCallAndRender(cmd, { personService.update(cmd) })
  }

  def delete(PersonCommand cmd) {
    validateCallAndRender(cmd, { personService.delete(cmd) })

  }

}

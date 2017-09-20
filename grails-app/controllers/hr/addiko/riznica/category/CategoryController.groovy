package hr.addiko.riznica.category

import grails.plugin.grich.registry.controller.GrichRegistryDataController
import grails.plugin.grich.search.command.BaseSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.CategoryCommand


@Transactional
class CategoryController extends GrichRegistryDataController {

  CategoryService categoryService

  def readAll() {
    BaseSearchCommand cmd = new BaseSearchCommand()
    cmd.limit = 0
    cmd.start = 0
    validateCallAndRender(cmd, { categoryService.readAll() })
  }

  def create(CategoryCommand cmd) {
    validateCallAndRender(cmd, { categoryService.create(cmd) })
  }

  def update(CategoryCommand cmd) {
    validateCallAndRender(cmd, { categoryService.update(cmd) })
  }

  def delete(CategoryCommand cmd) {
    validateCallAndRender(cmd, { categoryService.delete(cmd) })

  }

}
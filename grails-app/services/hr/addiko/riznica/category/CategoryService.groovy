package hr.addiko.riznica.category

import grails.transaction.Transactional
import hr.addiko.riznica.core.command.CategoryCommand

@Transactional
class CategoryService {
// ovako treba izgledati, bez suvisnih linija, komentara, fomratirano
  def readAll() {
    def result = Category.findAll()

    [success: true, data: result]
  }

  def create(CategoryCommand cmd) {
    Category category = new Category(name: cmd.name)
    category.save()

    [success: true]
  }

  def update(CategoryCommand cmd) {
    def cate = Category.get(cmd.id)
    cate.name = cmd.name

    cate.save(flush: true)

    [success: true]
  }

  def delete(CategoryCommand cmd) {
    Category.findById(cmd.id).delete()

    [success: true]
  }
}

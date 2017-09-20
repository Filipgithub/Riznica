package hr.addiko.riznica.category

import hr.addiko.riznica.post.Post

class Category {

  String name

  static hasMany = [post: Post]

  static constraints = {
    name nullable: true
  }

  static mapping = {
    post cascade: 'all-delete-orphan'
  }

}

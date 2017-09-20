package hr.addiko.riznica.post

import hr.addiko.riznica.User
import hr.addiko.riznica.category.Category
import hr.addiko.riznica.comment.Comment

class Post {

  static hasMany = [comments1: Comment]
  String postTitle
  String postContent
  Category category
  User user

  //post can have many comments and belong to more than one category
  static belongsTo = [category: Category]
  static constraints = {
    postTitle blank: false
    postContent blank: false
    postContent size: 2..15000
  }

  static mapping = {
    category lazy: false
    user lazy: false
    comments1 cascade: 'all-delete-orphan'
  }

}

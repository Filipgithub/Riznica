package hr.addiko.riznica.core.command

import grails.validation.Validateable
import hr.addiko.riznica.User
import hr.addiko.riznica.post.Post

class CommentCommand implements Validateable {

  Long id
  String author
  String comment
  User user
  Post post
  Long postId


  static constraints = {
    id nullable: true
    author nullable: true
    comment nullable: true
    user nullable: true
    post nullable: true
    postId nullable: true
  }
}

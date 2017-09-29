package hr.addiko.riznica.comment

import hr.addiko.riznica.User
import hr.addiko.riznica.post.Post

import java.text.SimpleDateFormat

class Comment {

  String author
  String comment
  String simpleDate
  String simpleTime
  User user
  Post post

  static constraints = {
    author blank: false
    comment size: 2..15000
  }

  static mapping = {
    user lazy: false
    post lazy: false
  }
}

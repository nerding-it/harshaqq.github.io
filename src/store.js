import dispatcher from './dispatcher'

import { EVENT_GET_EXP, EVENT_GOT_EXP, EVENT_ROUTE } from './constants'

import { getExp } from './utils'
import $ from 'jquery'

/* 
 * This is the implementation of flux store
 * @author [ Sriharsha ]
 * @version 0.1.0
 */
class Store {
  constructor() {
    dispatcher.on(EVENT_GET_EXP, this.getexp.bind(this))
    dispatcher.on(EVENT_ROUTE, this.onroute.bind(this))
  }

  /* 
   * Function which triggers event with exp data
   * @param none
   * @returns none
   */
  getexp() {
    dispatcher.trigger(EVENT_GOT_EXP, getExp())
  }

  onroute(target) {
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000, function() {
      window.location.hash = target
    })
  }
  
}

export default new Store()

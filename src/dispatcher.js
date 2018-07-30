import riot from 'riot'

/* 
 * This is the implementation of dispatcher
 * @author [ Sriharsha ]
 * @version 0.1.0
 */
class Dispatcher {
  constructor() {
    riot.observable(this)
  }
}

export default new Dispatcher()

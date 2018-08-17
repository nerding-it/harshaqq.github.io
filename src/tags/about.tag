import dispatcher from '../dispatcher'
import { EVENT_GET_EXP, EVENT_GOT_EXP } from '../constants'

<about>
  <style>
   about {
     display: flex;
     align-items: center;
     justify-content: center;
     height: 100%;
     width: 100%;
   }   
   about ul {
     list-style: none;
     width: 50%;
     padding: 0;
   }
   about ul li {
     display: flex;
   }
   about ul li p {
     display: block;
     padding: 1.5rem;
     line-height: 1.4;
     margin: 0;
   }
   about ul li p:nth-child(1){
     position: relative;
     padding-right: 1.5rem;
     font-size: 1rem;
     line-height: 2.5;
     color: #aaa;
   }

   about ul li p:nth-child(1):after {
     content: '';
     position: absolute;
     top: 26%;
     right: -1rem;
     display: block;
     width: 1.5rem;
     height: 1.5rem;
     background: #fff;
     border: 0.4rem solid #999;
     border-radius: 50%;
   }

   about ul li p:nth-child(2) {
     flex: 1;
     font-size: 1.5rem;
     border-left: 0.5rem solid #999;
   }
   about ul li p:last-of-type span{
     display: block;
     font-size: 1rem;
     color: #aaa;
     font-style: italic;
   }   
  </style>
  <ul>
    <li each={item, index in data}>
      <p> { item.duration } </p>
      <p>
	{ item.organization }
	<span> { item.role } </span>
	<span> { item.content } </span>
      </p>
    </li>
  </ul>      
  <script>
   this.on('mount', () => {
     dispatcher.on(EVENT_GOT_EXP, this.loadexp.bind(this))
     dispatcher.trigger(EVENT_GET_EXP)
   })

   this.on('unmount', () => {
     dispatcher.off(EVENT_GOT_EXP, this.loadexp.bind(this))     
   })

   loadexp(data) {
     this.data = data
     this.update()
   }
   
  </script>
</about>

import dispatcher from '../dispatcher'
import { EVENT_GET_SUMMARY, EVENT_GOT_SUMMARY } from '../constants'

<home>
  <style>
   home {
     display: flex;
     align-items: center;
     justify-content: center;
     height: 100%;
     width: 100%;     
   }
   home .badge {
     font-size: 1rem
   }
   home img {
     display: block;
     margin-left: auto;
     margin-right: auto;
     height: 10rem;
   }   
  </style>
  <div class="jumbotron jumbotron-fluid bg-transparent">
    <div class="container" if={summary}>
      <img class="mb-3" src={summary.profile}/>
      <h4 class="text-center"> { summary.name } </h4>
      <h5 class="text-center"> { summary.role } </h5>
      <div class="text-center">
	<a target="_blank" href={summary.github}><i class="fa fa-github"></i> <span>sriharsha91</span> </a>
	<a target="_blank" href={summary.stackoverflow}><i class="fa fa-stack-overflow"></i> <span>sriharsha91</span></a>
      </div>
      <p class="text-center">
	{ summary.summary }
      </p>
      <div class="text-center pt-4">
	<virtual each={item, index in summary.tags}>
	  <span class="badge badge-light"> { item } </span>
	</virtual>
      </div>
    </div>
  </div>
  <script>
   this.on('mount', () => {
     dispatcher.on(EVENT_GOT_SUMMARY, this.onsummary.bind(this))
     dispatcher.trigger(EVENT_GET_SUMMARY)
   })

   this.on('unmount', () => {
     dispatcher.off(EVENT_GOT_SUMMARY, this.onsummary.bind(this))
   })

   onsummary(data) {
     this.summary = data
     this.update()
   }   
  </script>
</home>

<!-- <div class="jumbotron jumbotron-fluid">
     <div class="container">
     <h1 class="display-4">Fluid jumbotron</h1>
     <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
     </div>
     </div> -->

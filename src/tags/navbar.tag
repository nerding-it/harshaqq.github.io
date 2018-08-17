import dispatcher from '../dispatcher'
import store from '../store'
import { EVENT_ROUTE } from '../constants'

<navbar>
  <style>
   navbar .nav-item { cursor: pointer }
   navbar nav {
     height: 6%;
   }   
  </style>
  <nav class="navbar fixed-top navbar-expand-lg bg-light">
    <div class="collapse navbar-collapse align-items-center justify-content-center">
      <div class="navbar-nav">
	<a class="nav-item nav-link" onclick={ click } href="#home">Home</a>
	<a class="nav-item nav-link" onclick={ click } href="#about">About</a>
	<a class="nav-item nav-link" onclick={ click } href="#projects">Projects </a>
      </div>
    </div>
  </nav>

  <script>

   click(e) {
     e.preventDefault()
     dispatcher.trigger(EVENT_ROUTE, e.target.hash)
   }      
  </script>
</navbar>

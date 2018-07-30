import riot from 'riot'
import 'riot-hot-reload'

import store from './store'
import dispatcher from './dispatcher'

import './tags/app.tag'
import './tags/navbar.tag'
import './tags/about.tag'
import './tags/home.tag';

import './tags/row.tag'

import './styles/index.scss'


riot.mount('app')


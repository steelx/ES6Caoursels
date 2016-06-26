// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import Carousel from '../_modules/carousel/carousel';

$(() => {
  new Link(); // Activate Link modules logic
  new Carousel();
  console.log('Welcome to Yeogurt!');
});

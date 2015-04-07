# SCSS Grid
Some very simple mixins to simplify your scss layout.
Media quary helpers, float and percentage based grid, easy to modify and use.

Just include or merge the following with your scss:

- _settings.scss
- _grid.scss

Grid Generator Example (Bootstrap Style):

    .someClass {

      &__container {
        @include container;
      }

      &__row {
        @include clearfix;
      }

      &__element {
        @include gutter;
        @include span(1);

        @include breakpoint(xs) {
          @include span(1/3);
        }

        @include breakpoint(sm) {
          @include span(1/4);
        }
        
        @include breakpoint(lg) {
          @include span(1/6);
        }
      }
    }

BEM CSS Example:

     <div class="container">
        <div class="col-xs-12 col-md-6">
        <div class="col-content">col-xs-12 col-md-6</div>
        </div>
        <div class="col-xs-12 col-md-6">
        <div class="col-content">col-xs-12 col-md-6</div>
        </div>
    </div>


### Box Sizing
The Gutter mixin only works as intended with box-sizing: border-box set.  
You could set it up in the gutter mixin if you dont want it set globally.

    /**
     * Box Sizing - Border Box FTW
     * @Url http://www.paulirish.com/2012/box-sizing-border-box-ftw/
     */
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    } 

## Settings
**$gutter**
The default gutter size used by the gutter mixin.


**$max-width**
The max width for the container mixin.


**$breakpoints**
A map of the media quaries used by the breakpoint mixin.  


## Mixins
**@include clearfix();**
Just a simple clearfix mixin, you can use your own if you want to.


**@include container($max-width !optional);**
A container mixin that sets a max-with, and includes a clearfix.


**@include gutter($size !optional);**
Sets padding left and right.


**@include span($width);**
Floats the element and gives it a percentage based width, use 1/4 or 0.25 to have an element span 1 of 4 columns.


**@include breakpoint(breakpoint);**
Creates a media quary and includes the contents its given.


## Generator
Creates a bootstrap style grid with column classes.

**$grid-profiles**  (todo: document)

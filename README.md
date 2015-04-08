# nrane9:banner-alert

## Dependencies

- iron:router
- reactive-var

## Installation

In a Meteor app directory:
```bash
meteor add nrane9:banner-alert
```

## Usage


### html


Add the template to your layout.js file if using iron-router, or to the specific page on which you want it to be available:

```html
{{> bannerAlert}}
```

OR

```html
// displays the template with a custom close button
{{> bannerAlert customClose='bannerCloseBtn'}}

<template name='bannerCloseBtn'>
  <div class='fa fa-close'></div>
</template>
```


### javascript

```js
nrAlert.alert("The alert text to display"); //  show a banner with success text

nrAlert.success("The success text to display"); //  show a banner with success text

nrAlert.clear();  //  clear the alert via code
```


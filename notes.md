# 1] HTML

## 1.1 Missing H headings

- every web page should have one h1 heading

# 2] CSS

## 2.1 Missing a proper global reset

## 2.2 The layout is broken on smartphones and it's not fully responsive

- it's not a good idea to use only vw/vh units for everything

### Layout is broken when

-- when devtools opened

### Fonts get extremely small/big when

-- on a smartphones
-- when resizing a browser window

- it's better to combine more units for instance vw/vh + rem/em

plus

- clamp() function and calc() function

plus

- media queries

Watch this playlist(min, max, clamp, units, font-sizes etc.):
https://www.youtube.com/watch?v=U9VF-4euyRo&list=RDCMUCJZv4d5rbIKd4QHMPkcABCw&start_radio=1&ab_channel=KevinPowell

Read this article(how to set up font sizes):
https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/

# 3] JAVASCRIPT

## 3.1 Strict mode

- make sure to use a strict mode whenever possible:
  "use strict";
  it helps you to avoid many necessary mistakes

## 3.2 form validation

- missing a check of a white space ' ' of basic inputs firstName, Surname....

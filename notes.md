# 1] HTML

## 1.1 Missing H1 heading

# 2] CSS

## 2.1 Missing a proper global reset

\*{
margin:0;
padding:0;
box-sizing: border-box;
}

html {
font-size: 62.5%;
}

body{
line-height:1;
font-weight:400;
}

## 2.2 Layout is broken on smartphones and it's not fully responsive

- it's not a good idea to use only vw/vh units for everything
- for example font size gets extremely small especially on a smartphone
- sometimes it's better to combine vw/vh + rem and calc + media queries

Watch this playlist:
https://www.youtube.com/watch?v=U9VF-4euyRo&list=RDCMUCJZv4d5rbIKd4QHMPkcABCw&start_radio=1&ab_channel=KevinPowell

# 3] JAVASCRIPT

## 3.1 Strict mode

- make sure to use a strict mode whenever possible:
  "use strict";

## 3.2 form validation

- missing a check of a white space ' ' of basic inputs firstName, Surname....

## 3.3 too many if else statements

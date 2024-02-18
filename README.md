

# CSS - Cascading Style Sheets
## CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

# CSS syntax
## CSS is a rule-based language
###### Syntax - For example, you can decide to have the main heading on your page to be shown as large red text.

    selector {
        property : value;
        property1 : value1;
        property2 : value2;
    }

# Adding CSS to our document
## There are three different ways to apply CSS to an HTML document that you'll commonly come across.

## 1. External stylesheets
###### An external stylesheet contains CSS in a separate file with a .css extension. This is the most common and useful method of bringing CSS to a document. always css file add in head element

     <link rel="stylesheet" href="styles.css" />

## 2. Internal stylesheet
###### An internal stylesheet resides within an HTML document.  you place CSS inside a <style> element contained inside the HTML <head>.

    <style>
        selector {
            property : value;
            property1 : value1;
            property2 : value2;     
                }
    </style>

## 3. Inline style
###### Inline styles are CSS declarations that affect a single HTML element, contained within a style attribute.

    <h1 style="property: value;property: value;"> Hello World! </h1>

## Comments
###### Best practice to write comments along with CSS. This helps you to remember how the code works as you come back later for fixes or enhancement.

    /* selector {
        property : value;
        property1 : value1;
        property2 : value2;
    } */

## White space
###### White space means actual spaces, tabs and new lines. Just as browsers ignore white space in HTML, browsers ignore white space inside CSS.

## Selectors

### **Selectors type**

| Selectors | Symbol |
|-----------|--------|
| Universal Selectors | * | 
| Type selectors | element |
| Class selectors | .class attribute |
| Id selectors | #id attribute |
| Attribute selectors | element[attribute] |

#### Grouping selectors
| Selectors | Symbol |
|-----------|--------|
| Selector list | "," | 


#### Combinators
| Combinators | Symbol |
|-----------|--------|
| Descendant combinator | " " | 
| Child combintor | > |
| General sibling combinator | ~ |
| Adjacent sibling combinator | + |

## Css value and unit

### Absolute Value

#### Absolute Value properties

Unit | Name | Equivalent to
------ | ----- | ---
cm | Centimeters | 1cm = 37.8px = 25.2\6in
mm | Milimeters | 1mm = 1\10th of 1cm
in | Inches | 1in = 2.54cm = 96px
pc | Picas | 1pc = 1\6th of 1in
pt | Points | 1pt = 1\72nd of 1in
px | Pixecs | 1px = 1\96th of 1in

### Relative Value

#### Relative Value properties

Unit | Descripition
---- | ---
em | em is relative to the size of its direct parent.
rem | rem is only relative to root element (html tag) sixe
vh | 1% of view port height
vw | 1% of view port width
% | relative to parent

## Color

#### Color properties 
color value between to 0-255

Properties | Value
---| ----
rgb() | rgb(red, green, blue), reg(255, 130, 80)
rgba() | rgba(red, green, blue, alpha), rgba(255,99,71,0.5)




## Box model
###### The css box model as a whole applies to block and define how the different part of a box

1. Content box
2. Padding box
3. border box
4. margin box

### Margin

#### Magin properties:

| Properties | Value |
| ------------ | -------- |
| margin-top | px, em, rem ..etc |
| margin-left | px, em, rem ..etc |
| margin-bottom | px, em, rem ..etc | 
| margin-right | px, em, rem ..etc |

#### Margin shorthand properties:

| Properties | equal |
| ----- | ----- |
| margin: 10px; | all side |
| margin: 10px 10px; | margin-top and margin-bottom, margin-left and margin-right |
| margin: 10px 10px 10px | margin-top, margin-left and margin-right, margin-bottom |
| margin: 10px 10px 10px 10px | margin-top, margin-right, margin-bottom , margin-left |

#### Margin physical properties:

| Properties | Value |
| ------ | ------ |
| margin-block-start | px, em, rem ..etc |
| margin-block-end | px, em, rem ..etc |
| margin-inline-start | px, em, rem ..etc |
| margin-inline-end | px, em, rem ..etc |

#### Margin physical sharthand properties:

| Properties | equal |
| ------ | ----- |
| margin-block-start | margin-top |
| margin-block-end | margin-bottom |
| margin-inline-start | margin-left |
| margin-inline-end | margin-right |
| margin-block: 10px; | margin-block-start and margin-block-end |
| margin-block: 10px 10px; | margin-block-start, margin-block-end |
| margin-inline: 10px; | margin-inline-start and margin-inline-end |
| margin-inline: 10px 10px | margin-inline-start, margin-inline-end | 
 

### Padding

#### Padding properties:

| Properties | Value |
| ------------ | -------- |
| padding-top | px, em, rem ..etc |
| padding-left | px, em, rem ..etc |
| padding-bottom | px, em, rem ..etc | 
| padding-right | px, em, rem ..etc |

#### padding shorthand properties:

| Properties | equal |
| ----- | ----- |
| padding: 10px; | all side |
| padding: 10px 10px; | padding-top and padding-bottom, padding-left and padding-right |
| padding: 10px 10px 10px; | padding-top, padding-left and padding-right | padding-bottom |
| padding: 10px 10px 10px 10px | padding top, padding right, padding bottom , padding left |

#### Padding physical properties:

| Properties | Value |
| ------ | ------ |
| padding-block-start | px, em, rem ..etc |
| padding-block-end | px, em, rem ..etc |
| padding-inline-start | px, em, rem ..etc |
| padding-inline-end | px, em, rem ..etc |

#### Padding physical sharthand properties:

| Properties | equal |
| ------ | ----- |
| padding-block-start | padding-top |
| padding-block-end | padding-bottom |
| padding-inline-start | padding-left |
| padding-inline-end | padding-right |
| padding-block: 10px; | padding-block-start and padding-block-end |
| padding-block: 10px 10px; | padding-block-start, padding-block-end |
| padding-inline: 10px; | padding-inline-start and padding-inline-end |
| padding-inline: 10px 10px | padding-inline-start, padding-inline-end | 


### Border

#### Border propertie

Properties | Value
-------- | ---------- 
border-top-color | red, rgb() ..etc
border-top-style | solid, dotted, double, wavys, dashed ..etc
border-top-width | px, em, rem ..etc
border-right-color | red, rgb() ..etc
border-right-style | solid, dotted, double, wavys, dashed ..etc
border-right-width | px, em, rem ..etc
border-bottom-color | red, rgb() ..etc
border-bottom-style | solid, dotted, double, wavys, dashed ..etc
border-bottom-width | px, em, rem ..etc
border-left-color | red, rgb() ..etc
border-left-style | solid, dotted, double, wavys, dashed ..etc
border-left-width | px, em, rem ..etc
border-collapse | collapse, separate
border-specing | px, px px
border | border-width border-style border-color
border-top | border-top-width border-top-style border-top-color
border-right | border-right-width border-right-style border-right-color
border-bottom | border-bottom-width border-bottom-style border-bottom-color
border-left | border-left-width border-left-style border-left-color

#### Border shorthand properties

Properties | Equal
------- | -------
border-color: white; | border-top-color and border-right-color and border-bottom and border-top-left
border-color: white black; | border-top-color and border-bottom, border-left-color and border-right-color
border-color: white red black; | border-top-color, border-left-color and border-right-color, border-bottom-color
border-color: white red black orange; | border-top-color, border-right-color, border-bottom-color, border-left-color
border-style: solid; | border-top-style and border-right-style and border-bottom-style, border-left-style
border-style: solid dashed; | border-top-style and border-bottom-style, border-left-style and border-right-style
border-style: solid wavys double; | border-top-style, border-left-style and border-right-style. border-bottom-style
border-style: solid, dashed, wavys, double; | border-top-style, border-right-style, border-bottom-style, border-left-style
border-width: 2px; | border-top-width and border-right-width and border-bottom-width, border-left-width
border-width: 2px 2px; | border-top-width and border-bottom-width, border-left-width and border-right-width
border-width: 2px 2px 2px; | border-top-width, border-left-width and border-right-width. border-bottom-width
border-width: 2px 2px 2px 2px; | border-top-width, border-right-width, border-bottom-width, border-left-width

### Border radius

#### Border-radius properties

Properties | value
------ | -------
border-top-left-radius | px, em, rem ..etc
border-top-right-radius | px, em, rem ...etc
border-bottom-left-radius | px, em, rem ..etc
border-bottom-right-radius | px, em, rem ...etc
border-top-left-radius: 10px 20px; | horizontal_line_value vertical_line_value
border-top-right-radius: 10px 20px | horizontal_line_value vertical_line_value
border-bottom-right-radius: 10px 20px | horizontal_line_value vertical_line_value
border-bottom-left-radius: 10px 20px | horizontal_line_value vertical_line_value


#### Border-radius shorthand properties

Properties | Equal
-------- | -------
border-radius: 20px; | border-top-left-radius and border-top-right-radius and border-bottom-left-radius and border-bottom-right-radius
border-radius:10px 10px; | border-top-left-radius and border-bottom-right, border-top-right-radius and border-bottom-left-radius
border-radius: 10px 10px 10px; | border-top-left-radius, border-top-right-radius and border-bottom-left-radius, border-bottom-right-tadius
border-radius:10px 10px 10px 10px; | border-top-left-radius, border-top-right-radius | border-bottom-right-radius, border-bottom-left-radius
border-radius: 20px/30px; | border-top-left-radius:20px 30px;, border-top-right-radius: 20px 30px;, border-bottom-right-radius:20px 30px:, border-bottom-left-radius: 20px 30px;
border-radius: 20px 50px/30px; | border-top-left-radius: 20px 30px;, border-top-right-radius: 50px 30px;, border-bottom-right-radius: 20px 30px;, borrder-bottom-left-radius: 50px 30px;
border-radius: 20px 30px 40px/30px; | border-top-left-radius: 20px 30px;, border-top-right:30px 30px;, border-bottom-right-radius: 40px 30px;, border-bottom-left-radius: 30px 30px;
border-radius: 20px 30px 40px 50px/30px; | border-top-left-radius: 20px 30px;, border-top-right:30px 30px;, border-bottom-right-radius: 40px 30px;, border-bottom-left-radius: 50px 30px;
bordder-radius: 20px/30px 40px; | border-top-left-radius: 20px 30px;, border-top-right:20px 40px;, border-bottom-right-radius: 20px 30px;, border-bottom-left-radius: 20px 40px;
border-radius: 20px/30px 40px 50px; | border-top-left-radius: 20px 30px;, border-top-right:20px 40px;, border-bottom-right-radius: 20px 50px;, border-bottom-left-radius: 20px 40px;
border-radius: 20px/30px 40px 50px 60px; | border-top-left-radius: 20px 30px;, border-top-right:20px 40px;, border-bottom-right-radius: 20px 50px;, border-bottom-left-radius: 20px 60px;
border-radius: 20px 30px/40px 50px; | border-top-left-radius: 20px 40px;, border-top-right:30px 50px;, border-bottom-right-radius: 20px 50px;, border-bottom-left-radius: 20px 50px;
border-radius: 20px 30px 8px/10px 15px; | border-top-left-radius: 20px 10px;, border-top-right:30px 15px;, border-bottom-right-radius: 8px 10px;, border-bottom-left-radius: 30px 10px;

#### Border other properties
Properties | Value
---- | -----
border-image-source | url(""), grandient all value
brder-image-slice | px, rem, em
border-image-width | px,rem, em
border-image-outset | px,rem, em
border-image-repeat | stretch, repeat, round space

#### Border other shorthand properties

Properties | Equal
--- | ---
border-image: url() 27; | border-image-source border-image-slice
border-image: url() space; | border-image-source border-image-repeat
border-image: url() 27 135px; | bprder-image-source border-image-slice border-image-width
border-image: url() 27 135px 50px round; | border-image-source border-image-slice border-image-width border-image-outset border-image-repeat
border-image-slice: 10px; | top right bottom left
border-image-slice: 10px 10px; |top and bottom, left and right
border-image-slice: 10px 10px 10px; | top, left and right, bottom
border-image-slice: 10px 10px 10px 10px; | top right bottom left
border-image-width: 10px; | top right bottom left
border-image-width: 10px 10px; |top and bottom, left and right
border-image-width: 10px 10px 10px; | top, left and right, bottom
border-image-width: 10px 10px 10px 10px; | top right bottom left
border-image-outset: 10px; | top right bottom left
border-image-outset: 10px 10px; |top and bottom, left and right
border-image-outst: 10px 10px 10px; | top, left and right, bottom
border-image-outset: 10px 10px 10px 10px; | top right bottom left
border-image-repeat: round space; | top and bottom, left and right

## Background

#### Background properties

Properties | Value
----- | -----
background-attachment | scroll, fixed
background-clip | border-box, padding-box, content-box, text
background-color | red, rgb(), rega(), hsl()
bockground-image | url(), grandient
background-position | px, rem em, %
background-repeat | repeat, no-repeat, space, repeat-x, repeat-y, space
background-size | px, rem em, %, cover, contain

#### Background shorthand properties

Properties | Equal
----- | ------
background: green; | background-color
background: url() repeat-x; | background-image background-repeat
background: border-box green; | background-clip background-color
background-position: 5px 10px 15px 20px; | top right bottom left
background-position: 25% 15%, 0 0, 1em 2em, 10ch 8rem; | top position, right position, bottom position, left position 
..etc

## Writing mode

#### Writing-mode properties

Properties | Value
--- | ---
writing-mode: tb; | top to bottom
writing-mode: rl; | right to left
writing-mode: lr; | left to right

## Overflow

#### Overflow properties

Properties | Value
---- | ----
overflow-x | visible, hidden, scroll, auto, clip
overflow-y | visible, hidden, scroll, auto, clip

#### Overflow shorthand propertes

Properties | Equal
--- | ---
overflow: auto; | overflow-x overflow-y
overflow: hidden auto; | overflow-x, overflow-y

## Object-fit

##### Object-fit properties

Properties | Value
----- | -----
object-fit | contain, cover, none, fill, scale-down

## Typoraphy

#### Typoraphy properties

Properties | Value
----- | ------
font-family | Time New Roman ...etc
font-size | px, em rem, %
font-style | normal, italic, oblique, oblique 40deg
font-weight | 100(Thin), 200(Extra light), 300(Light), 400(Normal), 500(Medium), 600(Semi bold), 700(Bold), 800(Extra bold), 900(Black), 950(Extra black)
font-varient | normal, small-caps
letter-spacing | normal, px, em, rem, %
line-height | normal, em, rem, %
white-space | normal, nowrap, pre, pre-wrap, pre-line, break-space
word-break | normal, break-all, kepp-all, break-word
word-spacing | normal, px, em, rem, %

## Text

#### Text properties

Properties | Value
----- | -----
text-align | left, right, center, justify
text-decoration-color | red, rgb(), rgba()
text-decoration-line | underline, overline, line-through, blink, underline overline
text-decortion-style | dotted, dashed, double, solid, ways
text-indent | 0, px, em, rem, %
text-overflow | ellipsis(....), clip
text-transform | capitalize, upperCase, lowerCase, none

#### Text shorthand properties

Properties | Equal
---- | ----
text-decoration: underline/overline; | text-decoration-line
text-decoration: overline dotted red: | text-decoration-line text-decoration-style text-decoration-color
text-shadow: 5px 5px; | x-offset y-offset
text-shadow: 5px 10px red; | x-offset y-offset color
text-shadow: red 5px 15px; | color x-offset y-offset
text-shadow: 2x 2px 5px red; | x-offset y-offset blur-radius color

## Position

#### Position properties

Properties | Value
--- | ---
position | static, relative, absoulte, fixed, sticty

## Pseudo-classe

Pesudo-classes | Explain | Example
--- | ---- | ----
:root | Represent an element that is the root of the document. In HTML this is usually the ```<html>``` element | ``` :root{ color: red; } ```
:empty | Represent any element that has no children. | ``` :empty{ background-color: blue; ``` 
:nth-child | Allows yot ot select one or more element based on their source order, according to a formula | ``` :nth-child(2n+1); ```
:first-child | Represents the first element among a group of sibling elements | ``` :first-child{ css propertirs } ```
:last-child | Represent the last element among a group of sibling element | ``` :last-child{ css propertirs } ```

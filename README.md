

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


## Pseudo-classes

#### Function pseudo-classes

Pesudo-element | Explain | Example
--- | ---- | ----
:is() | A selector list as its argument and selects any element that can be selected by one of the selector in that list. | ``` selector:is(selector1, selector2){ css properties } ```
:where() | The :wher() psudeo-classes selector in css functionally identical to the :is() pseudo selector in that it takes a comma-separatedlist of selectors to match against, expect that where :is() takes the most specific among then as specificity of thst whole part, the specificity of :where() is always zero (0) | ``` :where(selector1, selector2){ css properties ) ```
:not() | Represent elements that do not match a list of selectors. It is known as the negative pseudo classes. | ``` :not(x){ css properties } ```
:has() | Represents an element if any of the relative selectors. It's often refcrred to as "the parents selector" because of its ability to elect a parent element based on the child element it contains and apply styles to the parent. | ``` :has(+selectors){ css properties } ```

#### Tree-structural pseudo-element properties

Pesudo-element | Explain | Example
--- | ---- | ----
:root | Represent an element that is the root of the document. In HTML this is usually the ```<html>``` element | ``` :root{ css propertirs } ```
:empty | Represent any element that has no children. | ``` :empty{ css propertirs } ``` 
:nth-child | Allows yot ot select one or more element based on their source order, according to a formula | ``` :nth-child(2n+1); ```
:first-child | Represents the first element among a group of sibling elements | ``` :first-child{ css propertirs } ```
:last-child | Represent the last element among a group of sibling element | ``` :last-child{ css propertirs } ```
:nth-last-child | Propety match element based on their positing among a group of siblings, counting form the end | ``` :nth-last-child(2n+1) ```
:only-child | Represent an element without any sibling. This is same as ``` :first-child ``` ``` :last-child ``` ``` :nth-child(1) ``` ``` :nth-last-child(1) ```, but with a lower specificity | ``` :only-child{ css propertirs } ```
:nth-of-type | Matches element based on their position among siblings of the same type (tag name) | ``` :nth-of-type(2) ```
:nth-last-of-type | Matches elements based on their position among sibling of the same (tag name), counting from the end | ``` :nth-last-of-type(n+1) ```
:first-of-type | Represents the first element og its type among a group of sibling elements | ``` :first-of-type(n+2) ```
:last-of-type | Represent the last element of its type among a group of sibling elements | ``` :last-of-type(2n+1) ```
:only-of-type | Represents an element that has no sibling of the same type | ``` :only-of-type(n) ```

#### User active pseudo-class properties

Pesudo-classes | Explain | Example
--- | ---- | ----
:hover | It is generally when the user hovers over an element with the cursor (mouse pointer) | ``` :hover {  css properties } ```
:active | An element ( such as a button) that is being activated by the user | ``` :active{ css properties  } ```
:focus | It is generally triggered when the user clicks or tabs on an element or selects it with the keywords Tab keys | ``` :focus{ css properties  } ```

#### Location pseudo-classes

Pesudo-classes | Explain | Example
--- | ---- | ----
:any-link | An element that acts as the source anchor of a hyperlink, independent of wether it has been visited. | ``` :any-link{ css properties } ```
:link | An element that has not yet been visited. It matches every unvisited ``` <a> ``` or ``` <area> ``` element that has an href attribute | ``` :link{ css properties } ```
:visited | The link has been visited by the user. The style that can be modiffied using this selector are very limited | ``` :visited{  css properties  } ```
:local-link | A link to the same document. The source anchor of a hyperlink whase targets absoulte URL matches the element own document URL | ``` :local-link{ css properties }  ```
:target | A uniqe element (the target element) with an id matching the URL fragment | ``` :target{ css properties } ```

#### Resource pseudo-classes

Pesudo-classes | Explain | Example
--- | ---- | ----
:playing | Appay to media that is capable of being in a state where it would be described as playing, such as a video | ``` :playing{ css properties } ```
:paused | A resource state pseduo-classes taht will matches an audio, video or similair resource that is capble of being "played" or "paused", when that element is "paused". | ``` :paused{ css properties }

#### Time-dimensional pseudo-classes

Pesudo-classes | Explain | Example
--- | ---- | ----
:current | Resperents an element or the ancestor of an element that is currently being displayed and same :past and :future |``` :current{ css properties } ```

#### Element displayed state pseudo-classes

Pesudo-classes | Explain | Example
--- | ---- | ----
:fullscreen | Every element which is currently in fullscreen mode. If multiple elements have been put into fullscreen mode, this selects then all | ``` :fullscreen{ css properties } ```

#### Input pseudo-classes

Pesudo-classes | Explain | Example
--- | ---- | ----
:autofill | Whwn an input element has its value autofilled by the browers. The clases stop matching if the user edit the filed. | ``` :outfill{ css properties } ```
:enabled | An element is enabled if it can be activated (selected, clicked on, typed into, ..etc) oraccept focus. | ``` :enabled{ css properties } ```
:disabled | An element is disabled if it can't be activated (selected, click on, type into ..etc) or accept focus. | ``` :disabled{ css properties } ```
:read-only | An element (such as input or testarea) that is not editable by the user. | ``` :readonly{ css properties } ```
:read-write | An element (such as input or textarea) that is editable by the user. | ``` :read-write{ css properties } ```
:placeholder-shown | Represent any input or textarea element that is currently displaying placeholder text. | ``` :placeholder-show{ css properties } ``` 
:default | The default is a group of related element. | ``` :default{ css properties } ```
:checked | Represents any radio, checkbox or option (caption in a ``` <select> ```) element that is checked ot tagged to an on state. | ``` :checked{ css properties } ```
:indeterminate | Represents any element whose state is indeterminate,  such as checkbox is which have their HTML indeterminate attribute set to true, radio buttons which are memeber of a group in which all radio buttons are unchecked and indeterminate ``` <progress> ``` element ``` | ``` :indeterminate{ css properties } ```
:valid | Represents any ``` <input> ``` or other ``` <from> ``` element whose contents varidate successfully. | ``` valid{ css properties } ```
:blank | Empty user unput element (e.g. ``` <input> ``` or ``` <textarea> ```) | ``` :blank{ css properties } ```
:invalid | Represent any ``` <from> ```, ``` <fieldset> ````, ``` <input> ``` or other ```<from> ``` element whose contents fail to validate. | ``` :invalid{ css properties } ```
:in-range | Represents an ``` <input> ``` element whose current value is within the range limits specified by the min and max attribute. | ``` :in-range{ css properties } ```
:out-of-range | Represent an ``` <input> ``` element whose current value is outside the range limits specified by tht min and max attribute. | ``` :out-of-range{ css propertis } ```
:required | Represent any ``` <input> ```, ``` <select>```or ``` <textarea> ``` element that has the required attribute set an it. | ``` :required{ css properties } ```
:optional | Represent any ``` <input> ```, ``` <select> ``` or ``` <textarea> ``` that does not have the required attribute set on it. | ``` :optional{ css properties } ```


## Pseduo-element

#### Pseudo-element properties

Pesudo-element | Explain | Example
--- | ---- | ----
::after | In cc ::after create a pseudo-element that is the last child of the selector element. It is often used to add cosmltic content to an element with the content property. It is inline by default. | ``` ::after{ css properties }  ```
::before | In css ::before create a pseudo-element that is the first child of the selector element. It is often used to add cosmetic content to an element with the content property. It is inline by default other same ``` ::after ``` pseudo-element | ```::before{ css properties } ```
::first-letter | The :;first-letter applies style to the first letter by the first line of a block level element but only not precded by the other content (such as image or inline tables) | ``` :first-letter{ css properties }  ```
::first-line | The ::first-line applies style to the first line of a block-level element | `` ::first-line{ css properties } ```
::marker | The ::marker selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to display: list-item, such as the ```<li>``` and ``` <nummar>``` element | ``` ::marker{ css properties } ```
::placeholder | The ::placeholder represent the placeholder text in an input ot textarea element | ``` ::placeholder{ css properties } ```
::selection | The ::selection applies style to the part of a document that has been highlighted by the user (such as clicking and dragging the mouse across text) | ``` ::selection{ css properties } ```

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

## Styline lists

#### styline lists properties

Properties | Value
----- | -----
list-style-type | symbols, disc, circle, square decimal, lower-roman, upper-roman, lower-alpha, upper-alpha ..etc
list-style-position | inside, outside
list-style-image | non, url(), liner-grandient()

#### styline lists shorthant properties

Properties | Equal
----- | -----
list-style: disc url() inside; |  list-style-type list-style-image list-style-position.

## Using counter

#### counter properties

Properties | Value
----- | -----
counter-reset | chapter section 1 page, 0, 1.5
counter-increment | chapter section 2 page, 0, 1.5
counter() | conters(name, string), counter(name, string, style)

## Floats 

#### Floats properties

Properties | Value
----- | -----
float | left, right, none, inline-start, inline-end
clear | left, right, none, both, inline-start, inline-end

## Multiple column layout

#### Column properties

Properties | Value
----- | -----
column-count | any integer
column-width | px, em, rem, % ..etc
column-gap | px, em, rem, % ..etc
column-rule-color | red, rgb(), hsl() ..etc

## Flexbox

#### Flexbox properties

Properties | Value
----- | -----
display | none, block, inline, inline-block, flex, inline-flex, grid, inline-grid, flex-root
flex-direction | row, row-reverse, column, column-reverse
flex-wrap | nowrap, wrap, wrap-reverse
justify-cotent | center, start, end, flex-start, flex-end, left, right, normal, space-between, space-around, space-evenly, stretch
align-content | center, start, end, flex-start, flex-end, left, right, normal, space-between, space-around, space-evenly, stretch
aling-item | center, start, end, flex-start, flex-end, left, right, normal, space-between, space-around, space-evenly, stretch
aling-self | center, start, end, flex-start, flex-end, left, right, normal, space-between, space-around, space-evenly, stretch
order | integer value, netaive interger value
flex-basis | px, rem, em, %, max-content, min-content, fit-content
flex-grow | integer value, netaive interger value
flex-shrinks | integer value, netaive interger value
gap | px, rem, em, %
column-gap | px, rem, em, %
row-gap | px, rem, em, %

#### Flexbox shorthand properties

Properties | Equal
----- | -----
flex-flow: row; | flex-direction
flex-flow: wrap; | flex-wrap
flex-flow: row wrap: | flex-direction flex-wrap
flex-flow: wrap column | flex-wrap flex-direction
flex: 0 0 50px; | flex-grow flex-shrinks flex-basis


## Grid

#### Grid properties

Properties | Value
----- | -------
display | grid
grid-template-columns | ``` auto, 140px 1fr, [lineName] 100px, [lineName1] 100px [lineName2 lineName3], minmax(100px, 1fr), fit-content(40%), repeat(3, 200px), subgrid, repat(auto-fit, minmax(200px, 1fr)), repat(auto-fill, minmax(200px, 1fr)), 200px repeat(auto-fill, 200px) 300px, masonry ```
grid-template-row | ``` auto, 140px 1fr, [lineName] 100px, [lineName1] 100px [lineName2 lineName3], minmax(100px, 1fr), fit-content(40%), repeat(3, 200px), subgrid, repat(auto-fit, minmax(200px, 1fr)), repat(auto-fill, minmax(200px, 1fr)), 200px repeat(auto-fill, 200px) 300px, masonry ```
grid-auto-column | ```auto, min-content, max-content, 100px minmax(200px, 1fr), minmax(100px auto), minmax(max-content, 2fr), minmax(20%, 80vw), 100px 200px 300px```
grid-auto-row | ```auto, min-content, max-content, 100px minmax(200px, 1fr), minmax(100px auto), minmax(max-content, 2fr), minmax(20%, 80vw), 100px 200px 300px```
grid-auto-flow | ```row, colummn, dense, row dense, column dense```
grid-row-start | ```auto, positive interge value, span 2```
grid-row-end | ```auto, positive interge value, span 2```
grid-column-start | ```auto, positive interge value, span 2```
grid-column-end | ```auto, positive interge value, span 2```
grid-template-area | ```hd hd hd hd hd \n sd sd main main main \n fr fr fr fr fr```
gap | px, rem, em, %
column-gap | px, rem, em, %
row-gap | px, rem, em, %
justify-cotent | center, start, end, flex-start, flex-end, left, right, normal, space-between, space-around, space-evenly, stretch
align-content | center, start, end, flex-start, flex-end, left, right, normal, space-between, space-around, space-evenly, stretch
aling-item | center, start, end, flex-start, flex-end, left, right, normal, space-between, space-around, space-evenly, stretch
aling-self | center, start, end, flex-start, flex-end, left, right, normal, space-between, space-around, space-evenly, stretch
order | integer value, netaive interger value

#### Grid shorthand properties

Properties | Equal
----- | -------
grid-row: auto; | ```grid-row-start and grid-row-end```
grid-row: auto auto; | ```grid-row-start grid-row-end```
grid-row: 5 7; | ```grid-row-start grid-row-end```
grid-row: span 5; | ```grid-row-start grid-row-end```
grid-row: span 3 7; | ```grid-row-start grid-row-end```
grid-row: 2 span 2; | ```grid-row-start grid-row-end```
grid-column: auto; | ```grid-row-start and grid-row-end```
grid-column: auto auto; | ```grid-row-start grid-row-end```
grid-column: 5 7; | ```grid-row-start grid-row-end```
grid-column: span 5; | ```grid-row-start grid-row-end```
grid-column: span 3 7; | ```grid-row-start grid-row-end```
grid-column: 2 span 2; | ```grid-row-start grid-row-end```
grid-column: 2/5; | ```grid-colum-start / grid-column-end```
grid-row: 1/4; | ```grid-row-start / grid-row-end```
grid-area: auto; | ```grid-row-start, grid-colum-start, grid-row-end and grid-coumn-end```
grid-ared: auto / auto; | ```grid-row-start grid-colum-start and grid-row-end grid-coumn-end```
grid-ared: auto / auto / auto / auto; | ```grid-row-start, grid-colum-start, grid-row-end, grid-coumn-end```

## Animation

#### Animation properties

Properties | value
--- | ----
animation-name | ```none, test_05, _sepwcific, test1, animation4```
animation-durection | ```auto, s, ms, mm```
animation-tiing-function | ```ease, ease-in, ease-out, ease-in-out, lineare, step-start, step-end, cubic-bezier(), steps(), jump-start, jump-end, jump-none, jump-both, start, end```
animatiom-delay | ```auto, s, ms, mm```
animation-iteration-count | ```infinite, , 2.5```
animation-direction | ```normal, reverse, atlernate, alternate-reverse, normal-reverse```
animation-fill-mode | ```none, forwards, backwards, both```
animation-pay-state | ```runong, pasued, pasued runing runing```

#### Animation shorthand properties

Properties | Equal
--- | ----
```animation:3s ease-in 2 reverse both pased slidein;``` | animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode animation-play-state name
```anmation: 3s ease-out 1s animation_name;``` | animation-duration animation-timing-function animation-delay animation-animation-name
```animation: animation_name 3s ease-in-out 3s;``` | animation-animation-name animation-duration animation-timing-function delay

## Transition

#### transition properties

Properties | Value
--- | ----
transiton-property | ``` color, madgin, padding, all, none ...etc```
transition-duration | ```s ,ma, mm```
transition-timing-function | ```ease, ease-in, ease-out, ease-in-out, lineare, step-start, step-end, cubic-bezier(), steps(), jump-start, jump-end, jump-none, jump-both, start, end```
transition-delay | ```s ,ma, mm```

#### transition shorthand properties

Properties | Equal
--- | ----
```transition: margin 2s;``` | transition-property transition-durection
```transition: margin 2s linear;``` | transition-proerty transition-durection transition-timing-function
```transition: margin 3s 2s;``` | transition-property transition-durection transition-delay
````transition: margin 3s ease-in-out 5s;``` | transition-property transition-durection transition-timing-function transition-delay
```transition: margin 3s;``` | transition-property transition-durection
```transition: all 0.5s ease-in-out; ``` | transition-property transition-durection transition-timing-function

## Transform

#### Transform properties

Properties | Value
--- | ---
transform | ```all transform-function propertes```
transform-origin | ```px, left, right, top, bottom```
transform-style | ```flat, preserve-3d```
backface-visibility | ```hidden, visible```

#### Transform shorthand properties

Properties | Value
--- | ---
```transform-origin(2px,5px);``` | x-offset, y-offset
```transform-origin(5px,8px,10px); ``` | x-offset, y-offset, z-offset

#### Transform-function properties

Properties | Value
---- | -----
translateX() | ```px, %, em, rem```
translateY() | ```px, %, em, rem```
translateZ()  | ```px, %, em, rem```
rotateX() | ```angle, turn```
rotateY() | ```angle, turn```
rotateZ() | ```angle, turn```
scalex() | ``` pasitive interge value ```
scaleY() | ``` pasitive interge value ```
scaleZ() | ``` pasitive interge value ```
skewX() | ``````angle, turn```
skewY() | ```angle, turn```
perspective() | ```px, %, em, rem```

#### Transform-function shorthand properties

Properties | Equal
---- | -----
```translate(px);``` | translateX() and translateY()
```translate(px,px);``` | translateX(), translateY()
```translate3d(px,px,px)``` | translateX(), translateY(), translateZ()
```rotate(deg);``` | rotateX() and rotateY()
```rotate(deg,deg);``` | rotateX(), rotateY()
```rotate3d(x,y,z,deg);``` | x-coordinates, y-coordinates, z-coordinates, deg
```scale(2); ``` | scaleX() and scaleY()
```scale(3,5);``` | scaleX(), scaleY()
```scale3d(x,y,z);``` | scaleX(), scaleY(), scalez()
```skew(deg);``` | skewX() and skewY()
```skew(deg,deg);``` | skewX(), skewY()
```matrix(a,b,c,d,tx,ty);``` | a,b,c,d (linear transformation) and tx, ty (translateX(), translateY())
```matrix3d(a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3,a4,b4,c4,d4);``` | a1,b1,c1,a2,b2,c2,a3,b3,c3,a4,b4,c4 (linear transformation) and a4,b4,c4,d4 (hold the valueof translation)

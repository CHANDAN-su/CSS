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
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

    h1{
        color: red;
        font-size: 25px;
    }

# Adding CSS to our document
## There are three different ways to apply CSS to an HTML document that you'll commonly come across.

## 1. External stylesheets
###### An external stylesheet contains CSS in a separate file with a .css extension. This is the most common and useful method of bringing CSS to a document. always css file add in head element

     <link rel="stylesheet" href="styles.css" />




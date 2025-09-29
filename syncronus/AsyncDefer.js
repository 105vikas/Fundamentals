// Critical Rendering Path -> ( DOM -> CSSDOM -> Render_Tree -> Layout process -> Painting )

// Async - for script if async attribute is present then the classic script will be fetched in parallel to parsing & evaluated as soon as it is available
// <script async src"script.js"></script> - By default async, call js & imidate js downloaded

// Defer - This boolean attribute is set to indicate to a brower that the script is ment to be executed after the document has been parsed but before firing the DOM content loading event.
// <script defer src"script.js"></script> - Calling js while Html is exicuting & after Html exicution complete it exicute js

// Render Blocking refers to any part of the prcess of loading a website that blocks the rendering of user interface, It is bad for web performance because it increses the lenth of time until user can interact with the site ex view content
// most common cause are due to initially loaded of CSS or JavaScript files

// Parser Blocking is componet of web browser that block the parsing of HTML until the JavaScript is executed

// Reflow - it happen when browser recalculates the position & geometry of certain part of a webpage such as an update on interactive site it is repainting/redraws the webpage to show the reulting visual updates.
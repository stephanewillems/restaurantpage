# restaurantpage

## TODO 

Now remove those elements from the HTML (so leave only the <html>, <body>, and <div id="content"> tags) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of it’s own module and then import and call it inside of index.js.
---------------------------
Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. Look at #7 on this hongkiat post for visual inspiration.

Put the contents of each ‘tab’ inside of it’s own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.
---------------------------
If you are using GitHub pages to host your completed page you need to do a tiny bit more work to get it to show up. After running webpack the full bundled version of your site is available in the dist folder, but GH pages is looking for an index.html in the root directory of your project.

Simply follow the instructions on this gist. EZPZ!
Recall that the source branch for Github Pages is set in your repository’s settings.
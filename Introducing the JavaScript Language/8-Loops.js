/*-------------------------------------------------------------
    For Loop
-------------------------------------------------------------*/
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// for loop based on array length
var pageNames = ['Home', 'About Us', 'Contact Us', 'News', 'Blog', 'JavaScript Loops'];

for (var i = 0; i < pageNames.length; i++) {
    var currentPageTitle = pageNames[i];

    if (document.title == currentPageTitle) {
        console.log('We are here: ' + currentPageTitle);
    } else {
        console.log('We are not here: ' + currentPageTitle);
    }
}

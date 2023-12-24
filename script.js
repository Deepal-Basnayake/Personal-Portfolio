var bio = document.getElementById('about');
var projt = document.getElementById('projects');
var con = document.getElementById('contact');
//change the font size of the 'About' link when the mouse hover and leave
bio.addEventListener('mouseover', function () {
    this.style.fontSize = '50px';
});
bio.addEventListener('mouseleave', function () {
   this.style.fontSize = '30px';
});

//change the font color of the 'About' link when the mouse leave
bio.addEventListener('mouseleave', function () {
    this.style.color = 'green';
});

//change the font size of the 'Project' link when the mouse hover and leave
projt.addEventListener('mouseover', function () {
    this.style.fontSize = '50px';
});
projt.addEventListener('mouseleave', function () {
    this.style.fontSize = '30px';
});

//change the font color of the 'About' link when the mouse leave
projt.addEventListener('mouseleave', function () {
    this.style.color = 'green';
});

//change the font size of the 'Contact' link when the mouse hover and leave
con.addEventListener('mouseover', function () {
    this.style.fontSize = '50px';
});
con.addEventListener('mouseleave', function () {
    this.style.fontSize = '30px';
});

//change the font color of the 'About' link when the mouse leave
con.addEventListener('mouseleave', function () {
    this.style.color = 'green';
});


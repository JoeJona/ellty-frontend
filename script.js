const allPages = document.getElementById('all-pages');
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const page4 = document.querySelector('#page4');

function checkAllPages() {
    page1.checked = page2.checked = page3.checked = page4.checked = allPages.checked;
}

function checkPage() {
    if(page1.checked == true && page2.checked == true && page3.checked == true && page4.checked == true) {
        allPages.checked = true;   
    } else {
        allPages.checked = false;
    }
}

allPages.addEventListener('click', checkAllPages);

page1.addEventListener('click', checkPage);
page2.addEventListener('click', checkPage);
page3.addEventListener('click', checkPage);
page4.addEventListener('click', checkPage);
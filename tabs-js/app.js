const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

 
tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabid = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabid);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
    } else {
        currentBtn.classList.remove('active');
        currentTab.classList.remove('active');
    }

    });
};

document.querySelector(".tabs__nav-btn").click();
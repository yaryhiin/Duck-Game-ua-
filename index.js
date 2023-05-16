const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const map = document.querySelector('#map');
const listFromStorage = JSON.parse(sessionStorage.getItem("actions"));
let list = [];

if (listFromStorage) {
    list = listFromStorage;
}

function loadPage(link) {
    window.location = link;
}

function chooseAction(num) {
    sessionStorage.setItem("action", JSON.stringify(num));
    img1.src = "images/inactive/mackwa.png";
    img2.src = "images/inactive/bunker.png";
    img3.src = "images/inactive/chrik.png";
    img4.src = "images/inactive/rubl.png";
    if (num == 1)
        img1.src = "images/active/mackwa.png";
    else if (num == 2)
        img2.src = "images/active/bunker.png";
    else if (num == 3)
        img3.src = "images/active/chrik.png";
    else if (num == 4)
        img4.src = "images/active/rubl.png";
}

const fileName = window.location.pathname;
const currentPath = fileName.substring(fileName.lastIndexOf('/') + 1);

if (currentPath === 'actionPage.html') {
    function actionPageLoad() {
        const num = JSON.parse(sessionStorage.getItem("action"));
        list += num;
        sessionStorage.setItem("actions", JSON.stringify(list));
        const img = document.querySelector("#chosenAction");
        if (num == 1)
            img.src = "images/action/big/mackwa.png";
        else if (num == 2) {
            img.src = "images/action/big/bunker.png";
            img.className = "bunker";
        }
        else if (num == 3)
            img.src = "images/action/big/chrik.png";
        else
            img.src = "images/action/big/rubl.png";
    }
    window.addEventListener('load', actionPageLoad);
}

if (currentPath === 'eventsPage.html') {
    function eventsPageLoad() {
        const listEl = document.querySelector('#list');
        let events = [];
        events += JSON.parse(sessionStorage.getItem("actions"));
        render(events);
        function render(events) {
            let listItems = "";
            for (n in events) {
                let i = events.length - n - 1;
                if (events[i] == 1) {
                    listItems += `
                    <div class="items">
                        <div class="text">
                            <p>На мацкву</p>
                        </div>
                        <div class="image">
                            <img src="images/action/small/mackwa.png">
                        </div>
                    </div>
                    `;
                }
                else if (events[i] == 2) {
                    listItems += `
                    <div class="items">
                        <div class="text">
                            <p>На бункер</p>
                        </div>
                        <div class="image">
                            <img src="images/action/small/bunker.png">
                        </div>
                    </div>
                    `;
                }
                else if (events[i] == 3) {
                    listItems += `
                    <div class="items">
                        <div class="text">
                            <p>На чик-чирика</p>
                        </div>
                        <div class="image">
                            <img src="images/action/small/chrik.png">
                        </div>
                    </div>
                    `;
                }
                else if (events[i] == 4){
                    listItems += `
                    <div class="items">
                        <div class="text">
                            <p>На курс рубля</p>
                        </div>
                        <div class="image">
                            <img src="images/action/small/rubl.png">
                        </div>
                    </div>
                    `;
                }
            }
            listEl.innerHTML = listItems;
        }
    }
    window.addEventListener('load', eventsPageLoad);
}
function addPlan(outElem, planText, isSuccess) {
    if (!outElem) {
        throw new Error("Не указан элемент, в который нужно вставить чекбокс");
    }

    div = document.createElement('div');

    div.classList.add('form-check');
    isSuccess? 
    div.classList.add('bg-success'):
    div.classList.add('bg-primary');
    
    isSuccess ?
    div.classList.add('bg-opacity-50') :
    div.classList.add('bg-opacity-10');


    input = document.createElement('input');

    input.classList.add('form-check-input');

    input.type = "checkbox";

    input.value = "";

    input.id = isSuccess        ?
    "flexCheckChecked"          :
    "flexCheckDefault";

    input.checked = isSuccess;

    label = document.createElement('label');

    label.classList.add('form-check-label');

    label.htmlFor = isSuccess       ?
    "flexCheckChecked"              :
    "flexCheckDefault";

    label.textContent = planText        ? 
    `\n       ${planText}, status: \n       `     : 
    "\n       Default plan name, status: \n       ";


    div.insertAdjacentElement('beforeend',input);
    div.insertAdjacentElement('beforeend',label);

    outElem.insertAdjacentElement('beforeend',div);
}

let count = 1;


function addPlan2(selector,customCount) {
    count = customCount ? customCount : count;
    editPanelSelector = `editPanel${count}`;
    let struct = `<div class="row">
                    <div class="col-12">
                        <div class="accordion accordion-flush" id="accordFlush${count}">
                            <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-heading${count}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${count}" aria-expanded="false" aria-controls="flush-collapse${count}">
                                Some date (planer started dev 21.02.2022) #${count}
                                </button>
                            </h2>
                            <div id="flush-collapse${count}" class="accordion-collapse collapse" aria-labelledby="flush-heading${count}" data-bs-parent="#accordFlush${count}">
                                <div class="accordion-body">
                                    <div class="container-fluid bg-primary bg-opacity-10">
                                        <div class="row">
                                            <div class="col-3">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault${count}" id="flexRadioDefault1">
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Done
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault${count}" id="flexRadioDefault2" checked>
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        In progress
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault${count}" id="flexRadioDefault3">
                                                    <label class="form-check-label" for="flexRadioDefault3">
                                                        Not performed
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-3">Development this planer</div>
                                            <div class="col-3">
                                                <span>
                                                    Min time: 1h 0min
                                                </span>
                                                <br>
                                                <span>
                                                    Time spent: 3h 15m
                                                </span>
                                            </div>
                                            <div class="col-3">
                                                <div class="btn-group-vertical">
                                                    <button type="button" class="btn btn-danger">Delete this plan</button>
                                                    <button type="button" class="btn btn-warning" data-edit_panel=${editPanelSelector}>Edit this plan</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" hidden id=${editPanelSelector}>
                                            <div class="col-3"></div>
                                            <div class="col-3">
                                                ipnut text
                                            </div>
                                            <div class="col-3">
                                                time editor
                                            </div>
                                            <div class="col-3">
                                                <button type="button" class="btn btn-success">Save change</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>`
selector     ? 
document.querySelector(selector).innerHTML += struct          :
document.querySelector("[data-plans]").innerHTML += struct;

count++;
}


let btn = document.querySelector('[data-add_plan]');
btn.addEventListener('click',()=>{
    addPlan2();
});

let wrap = document.querySelector('[data-plans]');
wrap.addEventListener('click',(ev)=>{
    if (ev.target.dataset['edit_panel']) {
        let editPanel = wrap.querySelector(`#${ev.target.dataset['edit_panel']}`);
        let isHidden = editPanel.hidden;
        editPanel.hidden = !isHidden;
    }
    if (ev.target.classList.contains('btn-danger')) {
        console.log(ev.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove())
    }
});


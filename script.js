var currentDay = document.getElementById("currentDay")

var now = moment()

currentDay.append(now.format("MMMM Do, YYYY"));

var timeBlocks = document.getElementById("time-blocks")

function addTimeBlock(hour) {
    var timeBlock = document.createElement("div");
    timeBlock.className = "row time-block";

    var hourCol = document.createElement("div");
    hourCol.className = "col-sm-2 p-0";
    var TimeDiv = document.createElement("div");
    TimeDiv.className = "hour";
    TimeDiv.textContent = moment(hour, "HH").format("h:mm A");
    hourCol.append(TimeDiv);

    var textCol = document.createElement("div");
    textCol.className = "col-sm-8 p-0";
    var textArea = document.createElement("textarea");
    textArea.className = "description";
    textArea.textContent = localStorage.getItem(hour);
    textCol.append(textArea);

    var saveCol = document.createElement("div");
    saveCol.className = "col-sm-2 p-0";
    var saveBtn = document.createElement("button");
    saveBtn.className = "saveBtn";
    var saveIcon = document.createElement("i")
    saveIcon.className = "far fa-save";
    saveBtn.append(saveIcon);
    saveCol.append(saveBtn);

    saveBtn.addEventListener("click", function () {
        localStorage.setItem(hour, textArea.value);
    });
    timeBlock.append(hourCol, textCol, saveCol);
    timeBlocks.append(timeBlock);
}

for (let h = 9; h < 18; h++) {
    addTimeBlock(h)
}

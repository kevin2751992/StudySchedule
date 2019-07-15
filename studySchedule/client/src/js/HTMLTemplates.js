const HTMLTEMPLATES = {
	modaloptions: () => {
		return `<form>
    <h2> Optionen </h2>  
    <label> Anzahl an Semester </label> <br>
    <input id="op1" type="number" min="1" placeholder="6" step="1" required> <br>
    <label> Minimale ECTS pro Modul </label> <br>
    <input id="op2" type="number" min="1" step="1" onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))" required> <br>
    <label> ECTS pro Semester </label> <br>
    <input id="op3" type="number" onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))" required >
    </form>`;
	},

	schedulelist: (schedules) => {
		return `<div id="listContentContainer"> 
    <div class="scheduleList"> 
        ${schedules}
    </div>
    <div class="pagination">
        <div class="paginationControl">
            <a href="#" class="pagBack spaceR"> << </a>
            <p class="pagNum"> 1 / 1 </p>
            <a href="#" class="pagNext spaceL"> >> </a>
        </div>
    </div>
    </div >`;
	},

	schedulecard: (schedule) => {
		return `<div class="scheduleCard">
    <img schedule src="${schedule.imgsrc}" />
    <h3 class="spaceWL spaceWR"> ${schedule.name} </h3>
    <div class="cardoptions spaceWR"> 
        <a class="edit" data-schedule="${schedule._id}" href="#" class="editSchedule spaceR">  <i class="icon-pencil"> </i> </a>
        <a class="download" data-schedule="${schedule._id}" href="#" class="downloadSchedule spaceR"> <i class="icon-download"> </i> </a>
        <a class="delete" data-schedule="${schedule._id}" href="#" class="deleteSchedule"> <i class="icon-bin2"> </i> </a>
    </div>
    </div>`;
	},

	scheduleView: (modules) => {
		return `
        <div id="scheduleViewContainer"> 
            <div id="singleSchedule"> </div>
            <div id="modulesContainer"> 
                <div id="addModules"> 
                    <a href="#" id="addModule"> <i class="icon-plus"> </i> </a>
                </div>
                <div id="modulesList"> 
                    ${modules} 
                </div>
            </div>
        </div>
        `;
	},

	scheduleCell: (i, j) => {
		return `
        <div id="${i}-${j}" class="outerCell">
            <div class="innerCell"> </div>
        </div>
        `;
	},

	module: (module) => {
		return `
        <div class="module">
            <div class="descContainer" draggable="true"> 
                <p class="mName"> "Name": ${ module.name } </p>
                <p class="mECTS"> "ECTS: "${ module.ects } </p>
            </div>
            
            <div class="editContainer"> 
                <a href="#" id="${"edit-" + module._id}"> <i class="icon-pencil"> </i> </a>
                <a href="#" id="${"delete-" + module._id}">  <i class="icon-bin2"> </i> </a>
            </div> 
        </div>
        `;
	}
};

module.exports = HTMLTEMPLATES;

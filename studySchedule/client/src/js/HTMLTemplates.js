const HTMLTEMPLATES = {
	MODALOPTIONS: `<form>
    <h2> Optionen </h2>  
    <label> Anzahl an Semester festlegen </label> <br>
    <input id="op1" type="number" min="1" placeholder="6" step="1" required> <br>
    <label> Minimale ECTS pro Modul festlegen </label> <br>
    <input id="op2" type="number" min="1" step="1" onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))" required> <br>
    <label> ECTS pro Semester </label> <br>
    <input id="op3" type="number" onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))" required >
    </form>`,

	SCHEDULELIST: `<div id="listContentContainer"> 
    <div class="scheduleList"> 
        
    </div>
    <div class="pagination">
        <div class="paginationControl">
            <a href="#" class="pagBack spaceR"> << </a>
            <a href="#" class="pagNum spaceR"> 1 </a>
            <a href="#" class="pagNext"> >> </a>
        </div>
    </div>
    </div >`,

	SCHEDULECARD: `<div class="scheduleCard">
    <img schedule src="xxx" />
    <h3 class="spaceWL spaceWR"> Ablaufplan </h3>
    <div class="cardoptions spaceWR"> 
        <a href="#" class="editSchedule spaceR">  <i class="icon-pencil"> </i> </a>
        <a href="#" class="downloadSchedule spaceR"> <i class="icon-download"> </i> </a>
        <a href="#" class="deleteSchedule"> <i class="icon-bin2"> </i> </a>
    </div>
    </div>`
};

module.exports = HTMLTEMPLATES;

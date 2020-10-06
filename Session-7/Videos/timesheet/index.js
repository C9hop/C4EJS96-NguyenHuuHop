let timesheet = [
    {
        project: 'learn front-end',
        task:'learn HTML',
        timeSpent: 6,
    },
    {
        project: 'learn front-end',
        task:'learn CSS',
        timeSpent: 8,
    },
    {
        project: 'learn front-end',
        task:'learn JS Variables and Data Types',
        timeSpent:6,
    },
    {
        project: 'learn git',
        task:'learn git basics',
        timeSpent:2,
    },
]
for(let i=0; i<=timesheet.length; i++){
    console.log(timesheet[i]);
}

document.addEventListener("DOMContentLoaded",function(){
    let tbody = document.getElementById("ts_tbody");
    console.log(tbody);
    let remove = document.getElementById("tbody_1");
    remove.remove();
})
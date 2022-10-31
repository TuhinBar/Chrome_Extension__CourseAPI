let today = new Date();
let date = today.getDate()+'-'+ (today.getMonth()+1)+'-'+today.getFullYear();

const free_course_endpoint =
  "https://freecoursesfetch.herokuapp.com/";

// Fetch free courses
fetch(free_course_endpoint)
    .then(data => data.json()).then(courses => {

        const c_name =[];
        const c_url =[];
        for(let i=0;i<=9;i++){
            c_name.push(courses.results[i].name);
            if(courses.results[i].url.includes("http://click.linksynergy.com/fs-bin/click?id=bnwWbXPyqPU&subid=&offerid=323058.1&type=10&tmpid=14537&RD_PARM1=")){
                c_url.push(courses.results[i].url.split("http://click.linksynergy.com/fs-bin/click?id=bnwWbXPyqPU&subid=&offerid=323058.1&type=10&tmpid=14537&RD_PARM1=")[1]);
            } else{
                c_url.push(courses.results[i].url);
            }
        }
        const C_name_element = document.querySelectorAll('.course');
        for(let i=0;i<C_name_element.length;i++){
            C_name_element[i].innerHTML = c_name[i];
            C_name_element[i].href = c_url[i];
        }
    });

setInterval(displayTime,1000);

function displayTime(){
  document.getElementById('date').innerText = today.toLocaleString('en-US',{
    dateStyle:'full'
  });

}

displayTime();
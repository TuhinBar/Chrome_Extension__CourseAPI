// creating functions

// function to populate divs for courses
function createCourseBody(){
  let items = document.querySelector(".items");
console.log(items);
for(let i = 1; i <= 10; i++){
  items.innerHTML += `<div class="items-head">
  <p>COURSE: ${i}</p>
  <hr />
</div>
<div class="items-body">
  <div class="items-body-content">
    <a id="course1" class="course" href="#" target="_blank"
      >Loading..</a
    >
  </div>
</div>`;
}
}

// Main function to fetch courses
function getCourses() {
  // API endpoint to get courses links and details
  const coursesEndpoint = "https://freecoursesfetch.herokuapp.com/";

  // Fetch free courses
  fetch(coursesEndpoint)
    .then((data) => data.json())
    .then((courses) => {
      // Storing courses name and links in arrays
      const courseNames = [];
      const courseUrls = [];

      // The course urls from the API contains a ad redirection links so looping through the course urls and removing the ad links
      for (let i = 0; i <= 9; i++) {
        courseNames.push(courses.results[i].name);
        if (
          courses.results[i].url.includes(
            "http://click.linksynergy.com/fs-bin/click?id=bnwWbXPyqPU&subid=&offerid=323058.1&type=10&tmpid=14537&RD_PARM1="
          )
        ) {
          courseUrls.push(
            courses.results[i].url.split(
              "http://click.linksynergy.com/fs-bin/click?id=bnwWbXPyqPU&subid=&offerid=323058.1&type=10&tmpid=14537&RD_PARM1="
            )[1]
          );
        } else {
          courseUrls.push(courses.results[i].url);
        }
      }

      // Grabbing the container to populate the courses
      const coursesContainer = document.querySelectorAll(".course");
      // Looping through the courses container and populating the courses name and links
      for (let i = 0; i < coursesContainer.length; i++) {
        coursesContainer[i].innerHTML = courseNames[i];
        coursesContainer[i].href = courseUrls[i];
      }
    });
}

// function to display date
function displayDate() {
  let today = new Date();
  document.getElementById("date").innerText = today.toLocaleString("en-US", {
    dateStyle: "full",
  });
}

// Calling functions
createCourseBody();
displayDate();
getCourses();




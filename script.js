function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup
    showPopup(true);

    // New 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
//Function to add border color to dynamically generated divs for skills

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function applyRandomBordersToDynamicDivs() {
  const skillDivs = document.querySelectorAll('.skill');

  // Start from the 6th div onward (index 5, since index is 0-based)
  skillDivs.forEach((div, index) => {
    if (index >= 5) {
      if (index % 2 === 0) {
        // Even divs
        div.style.borderColor = getRandomColor();
        div.style.borderTopColor = getRandomColor();
      } else {
        // Odd divs
        div.style.borderColor = getRandomColor();
        div.style.borderTopColor = getRandomColor();
      }
    }
  });
}

// Call this function after adding new divs dynamically
applyRandomBordersToDynamicDivs();


//ADD Hover effect to dynamically created divs
function applyDynamicHoverStyles() {
  const skillDivs = document.querySelectorAll('.skill');

  skillDivs.forEach((div, index) => {
    if (index >= 5) { // Apply styles only to dynamically added divs (6th and onwards)
      div.addEventListener('mouseover', () => {
        div.style.border = `solid 2px rgba(${getRandomColor().slice(1)}, 0.2)`;
        div.style.borderTopColor = getRandomColor();
        div.style.borderTopWidth = '6px';
        div.style.borderTopRightRadius = '15px';
      });

      div.addEventListener('mouseout', () => {
        div.style.border = '';
        div.style.borderTopColor = '';
        div.style.borderTopWidth = '';
        div.style.borderTopRightRadius = '';
      });
    }
  });
}

applyDynamicHoverStyles()

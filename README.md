Jane Doe - Simple Single Page Portfolio Website

Overview

This project is a personal portfolio website for "Remy Martin," designed to showcase Remy's skills, experience, and projects as a full-stack developer. The website consists of several sections, including "About Me," "Skills," "Projects," and "Recommendations." It is built using HTML, CSS, and JavaScript, and provides users with a responsive and interactive experience.

Additionally, the website includes a feature where visitors can leave recommendations via a form, which gets dynamically added to the page along with a pop-up confirmation.

Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [File Structure](#file-structure)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [Detailed Breakdown](#detailed-breakdown)
7. [Future Enhancements](#future-enhancements)
8. [Credits](#credits)

Features

- Responsive Design: The website is designed to be responsive and adjusts to different screen sizes.
- About Me Section: Introduction to the developer, Remy Martin, highlighting their skills and experience.
- Skills Section: Displays a list of technical skills with icons and experience levels.
- Projects Section: Includes detailed descriptions of projects completed by Remy Martin.
- Recommendations Section: Displays testimonials from clients and colleagues.
- Recommendation Form: Visitors can leave a new recommendation through a form that dynamically adds their input to the page.
- Pop-up Notification: A pop-up appears when a recommendation is successfully submitted.
- Scroll to Top Button: An easily accessible button to scroll back to the top of the page.

Technologies Used

- HTML5
- CSS3
- JavaScript
- Flexbox and Grid Layout
- SVG Icons

File Structure

```
portfolio-website/
├── index.html
├── style.css
├── script.js
└── html_finalprojimages/
      ├── envelope.png
      ├── phone.png
      ├── waving-hand.png
      ├── html5.png
      ├── js.jpeg
      ├── CSS3.png
      ├── java.png
      ├── react.png
      ├── checkmark--outline.svg
```

- index.html: Main HTML file containing the structure of the website.
- style.css: CSS file for styling the website, including layout, colors, fonts, and responsiveness.
- script.js: JavaScript file for handling interactive features like adding recommendations and showing pop-ups.
- html_finalprojimages/: Directory containing image assets used across the website.

Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website
   ```

2. Open the website:

   Open `index.html` in your browser to view the portfolio website locally.

Usage

Viewing the Website

- Simply open `index.html` in any modern web browser.
- You can navigate between sections using the top menu.
- Scroll through the sections to view the "About Me," "Skills," "Projects," and "Recommendations."
- Use the "Scroll to Top" button to quickly navigate back to the top of the page.

Adding a Recommendation

1. Scroll to the "Leave a Recommendation" section.
2. Enter a recommendation in the text area.
3. Click the "Submit" button.
4. A pop-up will appear thanking you for the recommendation.
5. Your recommendation will be dynamically added to the list of recommendations on the page.

Detailed Breakdown

Navigation Bar

The navigation bar features links to different sections of the page, such as "About Me," "Skills," "Projects," and "Recommendations." These links are styled with the `.topmenu` class and include a hover effect that slightly scales and underlines the text.

About Me Section

This section introduces the developer, Remy Martin. It includes a profile picture and a brief bio. The content is displayed using the `flexbox` layout, ensuring the image and text are aligned horizontally.

Skills Section

This section showcases the developer's skills with icons and brief descriptions. Each skill is placed in a card-like structure with some shadowing and rounded corners. Flexbox is used here to ensure the skills are displayed in a row and wrap accordingly on smaller screens.

Projects Section

The projects section lists the developer's past work, with each project presented as a card that includes the project title and a brief description. The project cards are separated by horizontal rules (`<hr>`) to provide a visual break between them.

Recommendations Section

The recommendation section displays client and colleague testimonials. Each recommendation is styled as a card with a quote symbol (`&#8220;` and `&#8221;`) and is aligned using flexbox.

Recommendation Form

A form at the bottom of the page allows users to leave recommendations. When a recommendation is submitted, it triggers a JavaScript function that adds the recommendation to the page dynamically and displays a pop-up message thanking the user.

Pop-up Notification

The pop-up message is initially hidden using `visibility: hidden` in CSS. When a recommendation is submitted, the pop-up is displayed using JavaScript by toggling the visibility. The pop-up contains a confirmation message and a button to dismiss it.

## Future Enhancements

Here are some ideas for future enhancements to this project:

1. Form Validation: Add input validation to the recommendation form to ensure proper submission (e.g., avoid empty submissions).
2. Backend Integration: Connect the form to a backend (e.g., Django or Node.js) to store recommendations in a database and load them dynamically when the page is loaded.
3. Enhanced Animations: Add more animations to the page transitions or the project cards to make the experience more dynamic.
4. Responsive Improvements:** Further optimize the design for mobile devices, particularly in how the skills and project cards are displayed on small screens.
5. Dark Mode: Add a toggle switch to allow users to switch between light and dark themes.

Credits

- Icons provided by **Icons8**.
- Giphy image used in the "About Me" section.
- Designed and developed by **Remy Martin** as a showcase of their portfolio.

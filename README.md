<div align="center">

  <img src="https://www.frontendmentor.io/static/images/logo-mobile.svg" alt="frontendmentor" width="80">

  <h2 align="center">Advice Generator Solution</h2>
  <p align="center">
    <a href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"><strong>Frontend Mentor Challenge</strong></a>
    <br />
    <br />
    <a href="https://advice-generator-0xabdulkhalid.vercel.app/">View Demo</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/0xabdulkhalid/advice-generator/issues">Report Bug</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/0xabdulkhalid/advice-generator/issues">Request Feature</a>
  </p>
</div>

<!-- Badges -->
<div align="center">
  <!-- Profiles -->
  <a href="https://www.frontendmentor.io/profile/0xabdulkhalid">
    <img src="https://img.shields.io/badge/Profile-0xAbdulKhalid-fefefe?style=for-the-badge&logo=frontendmentor" alt="Abdul Khalid's Profile">
  </a> &nbsp;&nbsp;&nbsp;

  <!-- Status -->
  <a href="#">
    <img src="https://img.shields.io/badge/Status-Completed-00CE80?style=for-the-badge" alt="Status Completed">
  </a> &nbsp;&nbsp;&nbsp;

  <!-- Difficulty -->
  <a href="https://www.frontendmentor.io/challenges?difficulties=1"  >
    <img src="https://img.shields.io/badge/Difficulty-Junior-AAC745?style=for-the-badge&logo=frontendmentor" alt="Challenge Difficulty - Junior">
  </a>

</div>
<br />
<br />

## Preview

<div align='center'>
<img src='./design/cover.webp' alt='Project cover image'>
</div>

<br>


## Links

- |||
  | :----- | :----- |
  | Solution URL: | [To be posted :hourglass_flowing_sand:](#link) |
  | Live Site URL: | [https://advice-generator-0xabdulkhalid.vercel.app/](https://advice-generator-0xabdulkhalid.vercel.app/) |
  |||


<br>


## Pagespeed Insights Score
  
- ||
  | :-----: |
  |  <b>Overall Score 99.3%, Average of Mobile and Desktop</b><br>[ Mobile devices score is only shown below ] |
  | |
  | <img src='./design/pagespeed-insights-score.svg' alt='Scoreboard'> |
  | |
  | Check out [**Pagespeed Insights**](https://pagespeed.web.dev/analysis/https-advice-generator-0xabdulkhalid-vercel-app/ne163fkmse?form_factor=mobile) to get live score |
  ||


<br>

## The Challenge

- Users should be able to:
  - View the optimal layout for the app depending on their device's screen size
  - See hover states for all interactive elements on the page
  - Generate a new piece of advice by clicking the dice icon

<br>


## Installation

To set up the Advice Generator Application locally, follow these steps:

1. Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/0xabdulkhalid/advice-generator.git
   ```

2. Navigate to the project's directory:

   ```bash
   cd advice-generator
   ```

3. Install the project's dependencies using npm:

   ```bash
   npm install
   ```

4. Build the project to bundle JavaScript, minify HTML and CSS, and move images:

   ```bash
   npm run build
   ```
5. The build files can be found on `dist` (distribution) directory.

<br>

## Tags

    ES6 Modules | Webpack Bundling | API Integration | Cross-Browser Compatibility | Responsive Design | Code Formatting Guidelines | Automated Deployment with Vercel   

<br>

## Learnings / Notes

- Finded a manual way for trigger/invoke click event for button element by creating a new `MouseEvent` object of type `"click"` and dispatch it on the button element using the `dispatchEvent` method. 
  - This will simulate a click on the button, and any event listeners attached to it will be triggered as if the button were clicked by the user.
  - I have implemented this feature for initializing advice feed once the user visits/open the app.

- Learned to create a 3D Dice by using multiple `div` elements for Dice face along with `preserve-3d`.
  - Each one uses the transform property to rotate or translate the face in 3D space, giving the illusion of a 3D object.
  - It also applies the dice-spin animation, which presumably spins the dice, the overall result is wonderfull!

<br>

## Built With

<div align=center>

 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) &nbsp;&nbsp;![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) &nbsp;&nbsp;![JavaScript](https://img.shields.io/badge/ES6%20Modules%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black) &nbsp;&nbsp;![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) &nbsp;&nbsp;![html-minifier](https://img.shields.io/badge/html%20minifier-A90533?style=for-the-badge&logo=html5&logoColor=white) &nbsp;&nbsp;![CSS3](https://img.shields.io/badge/css_minifier-2C2D72.svg?style=for-the-badge&logo=css3&logoColor=white)

</div>

<br>

## Tools Used

<div align=center>
  
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) &nbsp;&nbsp;![Google](https://img.shields.io/badge/google-DA4437?style=for-the-badge&logo=google&logoColor=white) &nbsp;&nbsp;![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) &nbsp;&nbsp;![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) &nbsp;&nbsp;![Visual Studio Code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) &nbsp;&nbsp;![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

<br>


## Acknowledgment

- Challenge was provided by [Frontend Mentor](https://www.frontendmentor.io)

<br>

## Let's Connect 👋

<div align=center>

  <a href="https://linkedin.com/in/0xabdulkhalid" >
    <img src="https://img.shields.io/badge/linkedin%20Profile-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin Profile">
  </a>&nbsp;

  <a href="mailto:0xabdulkhalid@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/gmail-%23EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white" alt=mail/>
  </a>&nbsp;

  <a href="https://www.frontendmentor.io/profile/0xabdulkhalid" >
    <img src="https://img.shields.io/badge/FEM%20Profile-f8f9f8?style=for-the-badge&logo=Frontend-Mentor&logoColor=black" alt="Frontend-Mentor Profile">
  </a> &nbsp;
  
  <a href="https://www.github.com/0xabdulkhalid/" >
    <img src="https://img.shields.io/badge/Github%20Profile-131313?style=for-the-badge&logo=github&logoColor=white" alt="Github Profile">
  </a>

</div>

<br>
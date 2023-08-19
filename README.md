# Mantis_eye_assessment

# Organizational Chart Project

This project demonstrates how to create a basic organizational chart using HTML, CSS, and JavaScript. The chart displays a hierarchical structure of employees within an organization.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Sample Data](#sample-data)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display a hierarchical organizational chart.
- Dynamically generate the chart from employee data using JavaScript.
- Basic styling for nodes and connecting lines.
- Expandable branches for team members.
- Zoom controls to zoom in and out (in advanced examples).

## Getting Started

1. Clone or download the repository to your local machine.

2. Open `index.html` in a web browser to see the organizational chart.

## Usage

The project is a simple demonstration of how to create an organizational chart. You can use the provided code as a starting point and build upon it for your own projects. Follow the steps in the "Getting Started" section to see the chart in action.

## Customization

To customize the project:

- Modify the `employees` array in `script.js` with your own organizational data.
- Adjust the HTML structure and CSS in `index.html` and `styles.css` to match your preferred design.

## Sample Data

The sample data provided in the project demonstrates the structure of the organizational chart. Replace it with your actual organizational data to see your own chart.

```javascript
const employees = [
  { fullName: "Alice Anderson", designation: "Founder", manager: null },
  // Add more employees here
];

# Build A Day Workday Scheduler
![Scheduler Screenshot](https://github.com/collin-beisel-tm/build-a-day/blob/main/assets/images/app-screenshot.PNG)

## App Description
- This application can be used to store your to do's for each hour of the day. It uses local storage to hold task description data, and will change the task color to grey for past times, red for current time, and green for future time.

## Technologies used
- HTML
- CSS
- JavaScript
- JQuery
- Bootstrap
- Luxon
- Git/GitHub

## Why did I build this project?
- I built this application as part of SMU's Full Stack Web Dev bootcamp. In this scenario I was tasked to build a daily work scheduler using JQery, bootstrap, and a time keeping API of my choice (Luxon).

## What did I learn?
- Building this application tought me how to research api's to pick the best one for my needs and parse through the api documentation to learn how to use it. It also helped me brush up on JQuery.

## Features
- Current date displayed in the top nav
- text box for each hour slot in a standard business day to write down to do's or notes (stored locally in browser so they will not go away upon page refresh)
- Every 30 seconds the app will check to see where your tasks are in relation to the current time (tasks are either passed current time slot, in current time slot, or in the future)
- text boxes that are from earlier in the day than the current hour will be grey, during the current hour will be red, and future tasks will be green.

## How to install this application
- No installation is required to use this web application. Simply navigate to the url in your favorite web browser (not compatible with Internet Explorer).

## How to use this application
- Navigate to https://collin-beisel-tm.github.io/password-generator/
- enter a task in the desired time slot
- click the blue save button 
- rinse and repeat for as many time slots as you'd like

## license
MIT License

Copyright (c) [2021] [CollinBeisel]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
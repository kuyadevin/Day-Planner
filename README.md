# Day-Planner
For this project, we were tasked with making a Day Planner that color-codes certain hours depending on if that hour has past, it is that current hour, or the hour is in the futre.

## Requirements
For the planner, I was tasked with meeting the following criteria:
-Create a planner
-When the planner is open the current date is displayed
-When you scroll down the timeblocks are representative of standard business hours
-The timeblocks are color coordinated to represent past, present, and future
-When you click a timeblock you can enter an event
-When you refresh the page the event still exists

## Use
To use this planner, enter you event into the text area. To save what you typed, press the save button. The event should remain even after refreshing the page.

## Code Problems
This project was definitely challenging but was one of the first I felt confident about. The biggest problem I had was trying to turn the numbers in the left column into values so I could compare them to the current time. I found the best way for me to do that was to use moment.js to log the numbers into the column that way I could use a parse function to get their values.

![CodeSnippet](https://github.com/kuyadevin/Day-Planner/blob/main/Assets/Screenshot%20(22).png)

## Live Link
[Devin Nguyen's Day Planner](https://kuyadevin.github.io/Day-Planner/)
![Example](https://github.com/kuyadevin/Day-Planner/blob/main/Assets/Screenshot%20(20).png)

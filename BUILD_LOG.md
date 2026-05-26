## Project purpose
This project with be an Angular application that will give you recipes based on your available ingredients. This app is for people who are interested in finding new dishes or can't think of what to make with what ingredients they have. This app matters to me because I'm always trying to quick and easy meals, but I never try cooking and making my own hearty meals.

## Task Decomposition
1. Task name: Create a standard Angular App. Verify: Run the app using npm start.
2. Task name: scaffold the repo and write the CLAUDE.md. Verify: Ask Claude to summarize the file
3. Task name: Create a list of ingredients which the user will be able to choose from. Verify: console.log the ingredients and check the output.
4. Task name: Create a dictionary of dishes that includes name, ingrdients and recipe. Verify: console.log the recipes and check the output.
5. Task name: Create a header component which will include a search bar and a button that will open a menu. Verify: Run the app and check if the components are present.
6. Task name: Create a body component which will include all the different dishes that the user could choose from. Verify: Run the app and check if the components are present.
7. Task name: Create a sidebar component which will be opened using the button on the header component. Verify: Run the app and ensure the component appears when clicking the menu button.
8. Task name: Using the list of ingredients, create toggle buttons which will appear on the sidebar component. Verify: Run the app and ensure the buttons appear and are able to be toggled.
9. Task name: Apply function to the ingredients buttons, making it so that only recipes that use the selected ingredients appear. Verify: Run the app and check if the buttons function properly.
10. Task name: Add function to the search bar. Verify: Searching a specific dish works.
11. Task name: Create a new page in which the user will be redirected to when clicking on a recipe. Verify: Clicking on a recipe should bring you to a new page.
12. Task name: Create new components on the new page which will include a picture of the dish, the name, required ingredients, and the recipe. Verify: The new page includes all of this information.


## Task 2 - Create the Angular App 
- Brief: ran "ng new recipe finder" to create the Angular app
- What Claude proposed: Nothing, I did this part.
- What I changed before approving: None
- Verification: Ran "npm start" to ensure the app worked.
- One thing I learned: ...

## Task 2 - Initialize Claude
- Brief: did /init so that claude populated the CLAUDE.md file using its surrounding context.
- What Claude proposed: The core functionality of the app and the architecture.
- What I changed before approving: Added restrictions on tests and dependencies
- Verification: Asked Claude of summarize the file
- One thing I learned: Claude was able to make a decent summarization of what I wanted using the task decomposition and base Angular app.

## Task 3 - Creating the ingredients list
- Brief: [text](task-3-plan.md)
- What Claude proposed: Create a new ingredients file and log the ingredients when the app initializes
- What I changed before approving: Had to provide Claude my full tasks list for it to understand to not go too in depth with the current task.
- Verification: The ingredients appear on the console window
- One thing I learned: Claude.ai will want to create a full plan unless you give it information that tells it what specifically you want and what will come later on.

## Task 4
- Brief: [text](task-4-plan.md)
- What Claude proposed: Create a new file containing only ingredients found in the ingredience list.
- What I changed before approving: No change was needed.
- Verification: Ran the app and viewed the recipes inside of the console window.
- One thing I learned: Claude is able to come up with more than just code, it can create instructions on how to cook!

## Task 5
- Brief: [text](task-5-plan.md)
- What Claude proposed: Create a new component with a search bar a side bar button with no functionality yet.
- What I changed before approving: Nothing, this was a pretty straight-forward task.
- Verification: Running the app, the component is visible with the search and button
- One thing I learned: Claude understands placeholders and removed them entirely when it needs to.

## Task 6
- Brief: [text](task-6-plan.md)
- What Claude proposed: Create a new body component which includes each recipe from the recipes list.
- What I changed before approving: Slightly modified the text with CSS
- Verification: Running the app, each recipe from the recipe list is present.
- One thing I learned: Claude was able to take a screenshot of the running app and use it to ensure that its changes were made correctly.

## Task 7
- Brief: [text](task-7-plan.md)
- What Claude proposed: Create a new sidebar component which doens't include anything yet.
- What I changed before approving: Added the sidebar header so that it wasn't just a blacnk bar.
- Verification: Ran the app and ensured pressing the button made the sidebar appear.
- One thing I learned: Claude isn't very great at styling, I might ask it to make it look prettier.

## Task 8
- Brief: [text](task-8-plan.md)
- What Claude proposed: populate the filters sidebar with buttons of each ingredient. Make each button change color when clicked so that the user knows it's selected.
- What I changed before approving: Nothing
- Verification: Running the app and pressing the buttons, everything woks fine
- One thing I learned: The buttons are kinda confusing to look at and it might be a good idea to categorize the ingredience (protiends, wheat, etc.)

## Task 9
- Brief:[text](task-9-plan.md)
- What Claude proposed: Use recipeService to hide dishes that don't use the selected ingredience
- What I changed before approving: The side-bar covered some of the dishes which made it hard to see if it was working correctly, so I changed some of the frontend so that the sidebar pushes the body contents inward when it opens.
- Verification: Clicking an ingredient only shows dishes that use that ingredient.
- One thing I learned: Not much really. This is something I've done in the past

## Task 10
- Brief:[text](task-10-plan.md)
- What Claude proposed: create a search query to search dishes
- What I changed before approving: Nothing, everything looked good
- Verification: searching something works even while filtering by ingredient
- One thing I learned: Using inputs from a different component requires more changes that I though it would.

## Task 11
- Brief:[text](task-11-plan.md)
- What Claude proposed: Using routes, make the page link change based on the id of each dish.
- What I changed before approving: I made it so that the id of each recipe shows up on the page so that it wasn't just a blank page.
- Verification: Clicking on each recipe brings you to a new page with the id of the recipe
- One thing I learned: Claude used RouterLink which I was unfamiliar with, but it seemed to work.

## Task 12
- Brief:[text](task-12-plan.md)
- What Claude proposed: Provided details to each page and added image urls to the recipes list
- What I changed before approving: Claude gave placeholders so I had to manually replace each image link with a working one.
- Verification: Each dish has its recipe and ingredience. All other UI elements still function normally.
- One thing I learned: Claude is unable to get images from the web, likely due to copright restrictions.

## Reflection

The agentic workflow let me ship things I wasn't able to do alone such as having the components talk to eachother or helping create the new page when the user clicked on a dish. 
The only times I overrode Claude was in the frontend code, when something looked off or was missing. 
Other than that, Claude did really well in the backend part of the app, which is what saved the most amount of time. However, this reveals a lot about my judgement gaps. I understand that Claude more than likely did something wrong and I just didn't catch it. By me saying that it did great, I do feel like it creates a large gap in what I see vs what I understand. I'll continue to improve though, and hopefully begin to truly understand the changes Claude makes and their potential risks. This is only the beginning, as I still have much more to learn about my coding journy. These agents are super helpful, and this experience really proved it. In fact, after I completed each task, I created a new branch and moved all my changes to that branch, but I had forgotten to but node_modules inside of a gitignore file, so my code ended up corrupting. After some back and forth with Claude, I was able to get it working again, which relieved me of so much stress.  Unfortunately, because of this, it made merging the branches kinda difficult and I'm afraid I don't have enough time to figure that out. This goes to show how much more I have to learn.
I'm sure this will be of great use throughout my internship. I would have never thought that using AI in this way could be so much more effective when trying to avoid as many problems as possible. This way, I can really see and understand what's happening when an agent writes code.
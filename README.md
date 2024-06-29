# Week-6-project-cookie-clicker-in-react

I will be creating a cookie (egg) clicker style game using React

# Egg Clicker

## User Stories

🐿️ As a user, I want to be able to click the cookie and increment the counter

🐿️ As a user, I want to see the counter automatically increment using an interval timer

🐿️ As a user, I want to purchase items i can afford in the shop and increase the number of cookies every time the interval passes

## Requirements

🎯 Create state variables to store the current number of cookies and the cookies PerSecond value (useState)

🎯 Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.

🎯 Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.

🎯 Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

## Submission

A link to my repository on GitHub: https://github.com/Adlam4002/Week-6-project-cookie-clicker-in-react

A link to my live page on Render: https://week-6-project-cookie-clicker-in-react.onrender.com

# Reflections

When I started this project the first thing, I did was create two variables to track the user’s current number of eggs and their eggs per second. Later, I decided to create a third variable to track the total number of eggs the user had created. The number of eggs currently possessed is called count and is used to purchase upgrades, the user can see their current number of eggs displayed on their screen. They can also see their current eggs per second (EPS). These values were passed into other components as props. Eps, count and total Eggs were passed into my timer component. Within the timer, I set an increment of one second and the function attached to it was to increase the user’s count and total eggs by EPS. To keep the timer clean I used the useEffect hook.
I created a JSON array of objects to store my shop items. These had an id, name, increase (how much they will increase EPS by), owned, and display (this was used later on for conditional rendering). This array was stored in a lib folder to keep it away from my component files. I imported this array into my shop component as it was used to create the items in the shop. I used the map method to loop through the array and do the same actions for each object ensuring the data for each item is consistent with the original array. As the items would act as upgrades to the user’s EPS I needed to pass count, setCount, EPS, setEPS, totalEggs, key, item name, item increase, item display, and item cost from the shop component to the shop item components. I needed these values as the name, increase, and cost were used to create a display that shows the user what each item does. Each item in the shop contains a button which increases the user’s EPS so I needed to increase (to know how much to increase the EPS by), the cost, and the values and functions of the states I was tracking. When the user clicks the shop button all the items are rendered on screen, this was achieved by tracking a state (in this case, show) and rendering them or not depending on the current state (the state was a boolean value that is changed when the shop button is clicked). When the shop items are rendered on screen the user can click a button to purchase the upgrades. For the upgrade to take effect the user needed to be able to afford it. If they have sufficient eggs when they click the button their current egg count is reduced by the price and their EPS is increased by the amount specified by the item. I wanted the items to be a mystery to the user until they met a certain egg threshold. For example, when they start only the lowest tier item is available to them in the shop and the second is unlocked when they reach 150 lifetime eggs. To do this I used the total eggs state (which is hidden from the user and doesn’t decrease when they purchase an item in the shop). I added a display value to the shop item’s object within the upgrades array. I added conditional rendering to each item. If the user’s lifetime eggs value was equal to or greater than the required eggs for an item to be displayed, then the item could be rendered with its name, cost, effect and button visible, but if the display value was greater than the user’s total eggs then the item is generated with red text and a message “you do not yet understand this chicken”.
I also decided to save the user's total eggs, current eggs and EPS to local storage every time these values changed. I then utilised the setState function to use the values stored in local storage or (||) 0 if no saved data is present. I also added a button to reset the user’s game. When the button is clicked the user’s current eggs, total eggs and EPS are reset to zero. When the user clicks the button, an alert is triggered, and they can confirm or cancel this effect. I added this so that it’s harder for users to reset their progress by mistake. I also added a favicon to my website, and it was a picture of an egg.
Generally, I found react quite easy and logical to use, compartmentalising all of the components made keeping track of functions easy. It also helped me to keep track of what tasks I had completed and what was still left to do.
Something that I struggled with for this project was setting up the conditional rendering for the content of the shop items

`return (
<>

<div className="Itembox">
{allEgg >= display ? (
<>
<h5 className="Item">
{name}: Increase eggs per second by {increase}. Cost: {cost} eggs{" "}
<button onClick={handleBuy}>buy</button>
</h5>
</>
) : (
<>
<h5 className="pre-item">You do not yet understand this chicken</h5>
</>
)}
</div>
</>
);`

I did not realise that when using JSX elements within a JS section within a JSX file I needed to contain the JSX in <> </> inside the {} signalling I was using JS inside the returned section of the JSX function. I think I figured this out while reading through the react.dev site.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

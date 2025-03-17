<!-- *****************start project on react************* -->

$ npm create vite@latest

<!-- *****************start project on react************* -->

React does not render `false`,`null`,`undefined`,or `NaN` in the DOM.These values ,when used in JSX ,will result in nothing being displayed

However .`0` and empty string (`""`) are exceptions:

- **`0`** is rendered in the DOM because it is concidered as a valid React node.This means that if `0` is the result of expression ,it will appear in your UI.

- **Empty String** (`""`) are also consered a valid react node and are rendered as well

// 1.variables
// you can embed any javascript variables within jsx by enclosing it in curly braces.The value of the variable will be inserted into DOM at respective location.

// 2.Expressions

// jsx allow yu to write javascript expressions inside curly braces.This includes operations,function calls,and other javascript expression that produce a vlaue.

//3.Function calls

// Functions ,especially those that return jsx,can evvoked directly within your jsx.

//Each jsx has one parent element,which means if yu try to return multiple elements,React will throw an error.

//Every JSX tag need to be closed .You can use self-closing tags for elements that don't have children.like Void Elements.The elements which doesnot have closing tags.
// e.g., <img src="url" />

// console.log(React.createElement("h1",null,"Hello my name is Guru"));

// output :-
// {$$typeof: Symbol(react.transitional.element), type: 'h1', key: null, props: {…}, _owner: null, …}
// $$typeof
// :
// Symbol(react.transitional.element)
// key
// :
// null
// props
// :
// {children: 'Hello my name is Guru'}
// type
// :
// "h1"
// \_owner
// :
// null
// \_store
// :
// {validated: 0}
// ref
// :
// null
// \_debugInfo
// :
// null
// [[Prototype]]
// :
// Object

<!-- *******************************************component*********************************** -->
<!-- **************combine import and export -->

so in a file we can make 3 different components:-
Named export
default export

in a single file we will use only 1 default export , 2 named export

<!-- **************combine import and export -->

<!-- *************Looping in jsx****************** -->

we can use `map` method to loop in jsx

<!-- *************Looping in jsx****************** -->

<!-- ***********************props*************** -->

so `props` is the shortform of properties 1)`Props` facilitates data transfer from parent to child components.
2)Data flow unidirectionally,ensuring a clear direction id information in react applications.
3)Props are immutable ,means child components cannot modify the data recieved from parent.
4)Child components access props through their function parameter
5)You can pass jsx as a props to another components

<!-- ***********************props*************** -->

<!-- *********************CSS Module*********************** -->

1)Every time you import a css file in your react component,they are regarded as a global css.
2)Css Modules help you keep styles specific to the component they're used in
3)Each module encapsulates its style,preventing unintended style conflicts with other modules.
4)The class names in css modules are often automatically generated reducing the likelihood of naming clashes.

<!-- *********************CSS Module*********************** -->

<!--************************* Rules for css in module *********************** -->

1)Name your css module file with the .module.css or .module,.scss extention
2)Import the css module file in your React component.Access class names as properties of the imported styles object.
3)Access class names as properties of the imported styles object.
4)Combine multiple class names using template literals or class liberary.
5)Dynamically apply class names based on component state

<!--************************* Rules for css in module *********************** -->

<!-- Event Handling  -->

Event Handling in React js is the process of capturing and responding to user interface such as clicks,keystrokes,or form submissions,within a react application.Event handling in React follows a simililar pattern to standard javascript event handling but with some key differences,such as using synthetic events for cross-browser compatibility and providing consistent event handling across different element and browser.

what is SyntheticBaseEvent in React?

When yu handle events in react ,like clicking a button or typing in a input box React Reps native browser events in something called a synthetic events.This syntheticEvent is a wrapper around the browser's native event ,making sure that events behave consistance browser.

like:- onClick,onChange,onSubmit,onMouseEnter,onMouseLeave,onKeyDown,onKeyUp,onFocus,onBlur,onInput.

<!-- Event Handling  -->

<!-- Passing Event Handlers as a props -->

Passing Event handlers as props in react js ia s a common pattern used to allow child components to communicate with parent Components.This pattern used in various scenerios including:

Form Handling
User Interface
State Management
Callback Function

<!-- Passing Event Handlers as a props -->

<!-- Event Props -->

<!-- Event Propagation -->

In React Js ,event propagation refers to the process by which events propagate or "bubble" up from the target element through its parent elements in the DOM hierarchy.
React follows thesame event propagationmodel as a regular js Dom Events.

<!-- Event Propagation -->

<!-- state -->

In React ,state refers to an object that holds data or information about component.State is managed within the component .However ,unlike regular variables,when state changes, React re-renders the component to reflect theses changes,keeping the user interface in sync with the data.

State is dynamic and mutable ,meaning it can be changed over time usally in response to user actions,server responses ,or other events

Why we use `state`?

- It's because those are normal variables and react doesnot know that it's going to be changed.

- And the react should respond or update DOM based on that.

- Those value are already rendered on DOM , there is no way they will be re-rendered.

-For that React.js provieds a function called `usedState`.

-This type of function which starts with `use` is called hooks

- This is a special function which has some features provided by react.js

`Why do we need State in React?`
1.Dynamic Ui Updates?
State allows your componenets to update dynamically in response to user input or other events.For Example in a form ,the state might hold the current value of the input fields.Udating in real time as the user types.

2.Interactivity:State makes your application interactive .By maintaining state,you can create components that responds to user actions ,such as clicks ,form submissions,or keyboard inputs.

3.Data Managements:State helps manage data within a components .FOr instance ,you can find data from Api and store it in the state,which will later used to rebder UI.

4.Component Communication:State can be lifted up to parent components to manage state across multiple child component,ensuring data flow and synchronize.

How state works?

In react state is a way to store and manage data that can be change over the lifetime of a component.When state changes ,React re-render the component to reflect the new state.

Using useState in Function Component?

Intitalization:You call useState with the initial state value.It returns an array with two elements the current state value and a function to update that state

Why the state value doesnot reset to its initial value on re-render?

`First Render`: const[count,setCount]= useState(0);
count is initilized to 0.

`Button Click`:increment function is called.

setCount(count+1) update count to 1.

`Re-render`:React `re-render` the component:{when user click button 2nd time }
const[count,setCount]=useState(0) sees that count is now `1` and uses `1` as current state.The useState hook is smart enoigh to only use the initial value the very first time component renders.

React `Reconciliation` is the process through which React updates the Browser DOM.

`The Diffing Algorithm`

Diffing short for Differences Alogrithm is used to differentiate the DOM Tree for efficient Updates

`Note:`When React js creates a new tree ,it will `re-render/re-run` the affected component and all its children.So in this case it will re-run our counter component it won't re-render the other components outside.

How state works

function App(){
return (

<div>
<ParentComponent>
<ChildComponent />
<AnotherChildComponent />
</ParentComponent>
<SiblingComponent />
</div>
);
}
Here is how the re-rendering works?
Initial Render:When the App component first renders,React renders `<ParentComponent>`,`<ChildComponent />`,`<AnotherChildComponent />`,`<SiblingComponent />`

State change in `<ParentComponent>`:Suppose there is state change in `<ParentComponent>`.React will `re-render` ParentComponent and all its children `<ChildComponent />`,`<AnotherChildComponent />`

Components Outside :`<SiblingComponent />` is affected by the state changes in parentComponent ,therefore it will not `re-rendered`

`Lift State Up`

Lifiting State Up is a pattern in React where yu `move the state from child components to a common parent component` so that multiple child components can share and synchronize this state.
This ensure that the state is managed at a higher level in the component hierarchy.

Use case:

when yu have two or more components that need to share the same state,yu should lift the state up to their nearest common ancestor.This allows these components to stay in sync and ensure that the state is managed in a single place.

                        `App`

`InputComponent` `OtherChildComp` `Display Component`

`How to pass data from one child to another child from InputComponent to Display Component`

`If the child has any stte variable it will lifit it to common  parent component and the parent component can share it via props to other child component`

For updating state of children from parent, you can use concept called `lifting the state up`.

Here , you will lift the state from child to parent then pass that state dowb using porops.

<!-- state -->

<!-- keys -->

1 A string or a number that uniquely identifies it among other items in that array.
2 Keys tell React which array item each component correseponds to , so that it can match them up later.
This becomes importatnt if your array items can move .

Rules
keys must be unique amiong siblings
keys must not change

<!-- keys -->

<!-- short circuit evaluation -->

short circuit evaluation is a technique used in js where expressions are evaluated from left to right.In logical opreations evaluation stops as soon as result is determined .This is often used in react to conditionally render components or execute code based on truthiness of certain conditions.

Rules of `short circuit evaluation`
short circuit involves logical operations (&&,||,??) and how they evaluate expressions based on the truthness of their opeands.

`Rule for || operator`
if expression 1 is true then return true else return expression 2
const res=false || 'Hello'->'Hello'
const res=true || 'world'->true

if expression 1 is false return expression 1 otherwise return expression2
const res=true && 'Hello'->'Hello'
const res=false && 'world'->false

Nullish Coalescing (??) expression

syntax expression1??expression2

Ruke If expression 1 is not null or undefined ,returned expression .Otherwise return expression2

const result=null ?? 'Hello'->Hello
const res1=undefined ?? 'world'->world
const res3='' ?? 'fallback'->''

<!-- short circuit evaluation -->

<!-- Rules for react Hooks -->

1)Hooks let you use different React features from your components
2)It starts with `use` prefix ex(useState,useEffect,UseReducer)
3)Hooks are used in the top level of the components
4)We can cretes Hooks in react components or custom Hooks

<!-- Rules for react Hooks -->

<!-- useState() Hooks -->

1)The useState hook is a fundamental hook in React that allows you to add state management to your functional component.It lets you to store and update values that changes over time ,enabling dynamic and interactive UI


Function passed to `useState()` and `setState()` run twice during development mode to prevent developers from running side effects.

Side Effects in profmming refers to the changes or interaction that occur outside the scope of the function or block of scope

It compares previous state and new state using `Object.is()`,if it find both are same tahen it wuill avaoid re-rendering.

so if yu try to access thye value immediately after setting a state , then yu will get old value as its asynchronous.                           
<!-- useState() Hooks -->



<!-- controlled Components -->
`Controlled component` in React  are those where form data is handled by React component state.

This means:
`state Management:` The value of the input field is controlled by React state.

`Events Handlers:`Changes to the input field.

`state Updates`:when the user interacts with the form input , React state is updated through event handlers and the input value reflects the current state value.

<!-- controlled Components -->


<!-- Uncontrolled Components -->

<!-- Uncontrolled Components -->
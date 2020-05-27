# Twitch React Test -- Alex Park


## File Directory Structure
<!-- We've provided you with a basic structure to get you started. However, feel free to change it in any way you see fit. -->
- When working in an existing codebase, I try to ensure my code conforms to the existing standard even if I prefer to do things in a different way.
A slightly less optimized, uniform codebase is much more maintainable than an optimized codebase with no standards. If there is a much better way
of doing things, I like to take initiative and make a case for a refactor. For this project, (though it is definitely overkill), I organized 
my components using Atomic Design (http://atomicdesign.bradfrost.com/chapter-2/). I find this pattern to be extremely scalable and reusable - 
especially paired with tools like Pattern Lab or Storybook and a design team that works in conjunction to build mocks using this. 

-index.tsx renders App.tsx, which contains page level components. Each component has its own modules and containers folder. 
The only components that connect to Redux are within the containers folder. The modules folder has the redux/types/adapter files.
I like to colocate my redux files with the page that is using it. Of course, in some projects it does not make sense doing this 
but in cases it does, I find it slightly increases my team's productivity and greatly increases the overall maintainability of the codebase.

- CSS:  In a similar vein, I have a separate CSS file for each component. Using vanilla SCSS, I normally would not do this, but I tried to refrain from 
adding too many dependencies to the project. Doing this colocates my CSS with my HTML/JS, and creates modular, reusable components. 
I prefer SCSS + Styled Components in case you are wondering! Also, some of the styling should be in different places, and the components should
have a styles prop so they can be configured, and more scss variables should be used (like font-sizes, line-spacings), 
and generally classes should be more reusable... but maybe not for a take-home ;P



## Technical
- I used the react-window library to only load the games that the user is viewing, instead of loading the entire list at the same time. 
It doesn't help too much in this use case with < 300 items in the list, but it will matter if the list becomes large. 

- I like having adapter functions to use in my redux action creators that makes api requests to reduce coupling between the frontend code and the api data model.
This is especially helpful during development because the data model frequently changes during development, and refactoring becomes much simpler.

- On lists that become updated, I normally do not implement a frontend cache (defaultsGameList in games reducer), but since our data is static I did so.
The same applies to search, filter, sort. It is usually more performant to have this logic on the backend. 



## Coding Standards
- Clean code is the foundation to a maintainable and scalable codebase! I strive to write simple, human readable code that doesn't require comments.

- I like defaulting to functional components in React. Not only is it cleaner (and no need to worry about this binding too!), 
React actually cannot fully perform its performance optimizations for class components (quoting Sophie Alpert @react-core-team). 

- Redux + TypeScript: instead of having separate interfaces for actions, dispatch actions, and props, I find it cleaner to use ReturnType<> for
redux action types since they are already strongly typed.



## Bonus, Not Required
- Given my time constraints with work, I did not have enough time to implement all the bonus features.
But - I would like to discuss how I would have tackled them given more time. 

<!-- - Implement Redux state and component testing using Jest -->
- While I did not implement any tests due to time, my general testing strategy is to focus on functional integration tests based on business/user requirements,
then to write e2e tests for important user flows (but not too many since e2e are brittle and take a lot of maintenance). If I have a strong foundation of 
integration and e2e tests, then I don't have to write too many unit tests. I reserve those for testing components with complex logic and redux state.
My preferred testing framework is react-testing-library, cypress, and jest-cucumber using the Gherkin syntax. If product/business writes user stories using 
the Gherkin syntax - Given, When, Then scenarios based on user features (https://cucumber.io/docs/gherkin/reference/) - the dev team can write really good frontend integration tests and backend component tests.

<!-- - Implement game search functionality -->
- Done! Also added a filter and sort.

<!-- - Implement functionality to periodically re-download the game data file (in case it has updated) -->
- For this project to do this I would use something like setInterval to periodically fetch game data. In the real world, this is not a good idea to do this
because it makes a large number of unnecessary requests. In that case, I would use a websocket connection.

<!-- - Provide details on choices regarding UI layout -->
- Did my best to replicate the feel of www.twitch.tv/directory.



## Closing Remarks
- Thank you for reading this far! I am super excited about this opportunity. Whether or not I move to the next stage, I am always looking to learn and 
would really appreciate any feedback you have regarding my code on things I could have done better or differently. 

Thanks,
Alex

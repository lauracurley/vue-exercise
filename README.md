# Vue Exercise

Please submit a pull request to this repo implementing the following feature:

Create a Vuex module and component(s) to display blog post data from the following web service:

<https://jsonplaceholder.typicode.com/posts>

- Display the posts for the current user in the left column, and posts for all other users in the right column. For the purposes of this exercise, you can hard-code the “current user ID” to 1.
- Handle both loading and error states.
- Unit test both the Vuex module and component(s). Cover all the important behavior of the code with tests, and get 100% test coverage for all metrics shown in the unit test output. For the purposes of this exercise, don't worry about doing any end-to-end testing.
- Add enough CSS to get the left/right column layout and make it look clean, but don’t worry about too fancy styling.

Feel free to reach out to <jjustice@bignerdranch.com> with questions!

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run unit:watch
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

______
### About Laura's Process

I spent about 2 hours prepping before downloading the coding challenge and getting started.
* First stop: the Vue docs
  * The docs are fantastic and accessible. I didn’t spend much time here since I knew I could reference information quickly
* Researched a few Vue project boilerplate examples
  * Got a sense for what’s available depending on requirements (GraphQL, Vuex, etc)
  * Found Vue CLI 3 (nice!), don't need boilerplate
* Looked at a few example projects in the View Mastery repos
  * I knew I would have to do a lot of pattern matching since I’m new to Vue
  * Project layout is important since I want to present readable modular code
  * Got a sense for possible levels of complexity I could choose from (depending on the challenge requirements, I may have to include Vuex, Vue CLI, Vue Router)

* Environment setup on my personal computer
  * Installed Vue devTools extension for Chrome
  * Cloned down a Vue sample project and got Webstorm IDE set up
  * Added the Vue plugin to Webstorm to recognize `.vue` files, etc
  * Made sure Webstorm was handling ES6+ code

Process
 1. Reviewed the README to get a sense of scope of the exercise
 2. Tests:  Usually I would write tests as I go. However in this case both the Vue ecosystem and the test suite were new to me (I use Jest at work). I made a call to leave tests for last in this case, for a couple reasons. First, if I were presenting to a client on a tight deadline, while I hope they'd care about code coverage, their primary concern is probably being able to play around with the product. For that reason, I decided to prioritize getting the components hooked up and working. Second, the combined complexity of tackling both Vue and its interactions with an unfamiliar test suite is probably out of scope for me to tackle in a four hour coding challenge.
 3. Created services to get posts and users from the api
 4. Created a blog container component, a reusable post list, and a reusable post entry
 5. Debugged in the browswer to ensure everything was working as expected
 6. Added minimal styling (credit for base styling goes to www.vuemastery.com)
 7. Added spec.js files for the components that at least show what I would try to cover

Given more time, I would want to:
 1. Ensure 100% code coverage of all components, services, and the store
 2. Further modularize the code (styles/templates could be in their own files as codebase grows)
 3. Add more formal jsdocs
 4. Add a locale file to handle potential plural/gender cases, or even other languages
 5. Further research and implement Vue best practices to improve performance and code quality
 6. Check http status codes on all responses and handle them appropriately
 7. Build out error notification messages in the UI in case of server errors
 8. Add loading states
 9. Add a scss or less

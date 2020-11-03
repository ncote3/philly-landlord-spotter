# [philly-landlord-spotter](http://www.philly-landlord-spotter.com/)
A React Visualization Project using Philadelphia's Open Data Program.

## Background
This project came about in early July of 2020 in response to the burgeoning eviction crisis amidst the
COVID-19 pandemic. As an organizer with the 
[Philadelphia Tenants Union](http://phillytenantsunion.org/), I saw that there was going to be a need
for more accessible data for tenants, tenant organizers, and journalists. I quickly got to
work brainstorming the best way to make
[Philadelphia's Open Data Program](https://www.opendataphilly.org/) more accessible and useful for the
public. To do this I attempt to flip the individualist narrative that typically comes with housing to a
more collective view of tenant issues through grouping properties by an owner, rather than displaying an 
individual property.

Since the start of this project the scope has grown from just a basic map of properties grouped by owner.
I have begun to use it as a bit of a research project to tell the story of Philadelphia property and how
it effects almost all of us in Philadelphia. The project has now expanded past just 
'philly-landlord-spotter', and into a greater collaboration with other volunteer programmers and housing
justice advocates across the country. I cannot discuss too much about it yet, but keep an eye out!

For a more in-depth explanation of this project and its background, check out my 
[Towards Data Science](https://towardsdatascience.com/) piece on it: 
[Landlord Spotting in City Property Data](https://towardsdatascience.com/landlord-spotting-in-city-data-e07fad2b5dc5)

## Press
* [Landlord Spotting in City Property Data](https://towardsdatascience.com/landlord-spotting-in-city-data-e07fad2b5dc5) 
by [Noah Cote](https://twitter.com/n_cote3)
* [In the absence of federal rent relief, guerrilla efforts are stepping in](https://www.mic.com/p/in-the-absence-of-federal-rent-relief-guerrilla-efforts-are-stepping-in-30680671)
by [Vanessa Taylor](https://twitter.com/bacontribe)

For press inquires please email me: *noah.cote3@gmail.com*

## Search By Owner Controversy
Recently, the City of Philadelphia removed the 'search by owner' functionality on its public property record tools.
They did this in the name of 'privacy/security related complaints' after a number of protests occurred at public
officials residencies. In the idea of accessibility and truly public data I believe this goes against those ideals.
The public records should be searchable by every field in the dataset. Part of being an elected official is being
a public figure and accountable to the public. It is infallible to hide public record to avoid accountability,

For further reading on the matter, check out this: 
[Why did Mayor Kenney disable a tool for fighting blight in the name of 'public safety'?](https://whyy.org/articles/why-philly-residents-are-mad-you-cant-search-city-property-owners-by-name-anymore/) 
by [Ryan Briggs](https://twitter.com/rw_briggs)

***Search by Owner is still available through this project:***
[Search By Owner](http://www.philly-landlord-spotter.com/ownerSearch)

## Similar Projects
* [Who owns what in nyc?](https://whoownswhat.justfix.nyc/en/)
    * [Github Project](https://github.com/JustFixNYC/who-owns-what)
* [Find My Landlord](https://findmylandlord.chicagodsa.org/)
* [Philadelphia Atlas](https://atlas.phila.gov/)

## Uses the Following Packages:
* [react](https://github.com/facebook/react)
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
    * Used for Icons
* [axios](https://github.com/axios/axios)
    * Used for async API calls
    * Dependency of `axios-hooks`
* [axios-hooks](https://github.com/simoneb/axios-hooks)
    * Used for aysnc API calls
    * This package enables me to use `axios` in hook form
* [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
    * For quick styling, although I've overridden a lot of it
* [react-map-gl](https://github.com/visgl/react-map-gl)
    * Used to display MapBox Maps
    * [Helpful Documentation](https://www.leighhalliday.com/mapbox-clustering)
* [supercluster](https://github.com/mapbox/supercluster)
    * Package that enables easy clustering
    * Dependency of `use-supercluster`
* [use-supercluster](https://github.com/leighhalliday/use-supercluster)
    * Hook based interface for `supercluster`
* [fuse.js](https://fusejs.io/)
    * JS fuzzy string matching
* [node-sass](https://github.com/sass/node-sass)
    * For compiling Sass
* [react-router-dom](https://github.com/ReactTraining/react-router#readme)
    * Allows for routing, key in this single page app
    * Dependency of `react-router-bootstrap`
* [react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
    * Package that allows me to use `react-router` with `react-bootstrap` components
* [victory](https://formidable.com/open-source/victory/)
    * Highly customizable charts for data visualization

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

--------------------------------------------------------------------------------------------

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
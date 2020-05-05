# DJ Zwackery

Homepage of Australia based Happy Hardcore DJ, Zwackery. Written with [React](https://reactjs.org/) using [Gatsby](https://www.gatsbyjs.org/).

## Getting Started

To run the project locally you must have [Node](https://nodejs.org/en/) installed. With it installed run `npm install` followed by `npm run-script start` to access the page on port `8000`.

### Updating Social Links

All of the social links, including contact information, is stored within the `.env.development` and `.env.production` files. To change the URL you must update it in both places and commit the changes to `dev`.

## Deploying

Any changes made to the `dev` branch will trigger a page re-build using the [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action). If a change is failing you can look at the `Actions` tab to figure out why.

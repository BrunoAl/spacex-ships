This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployed version

https://spacex-ships-three.vercel.app/login

## Getting Started

First, run the development server:

```bash
npm install && npm run dev
# or
yarn && yarn dev
```

To run the tests:

```bash
npm run test
# or
yarn test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Login credentials:

email: email@test.com
password: test123

## Note:

**To test the pagination and sorting feature select "Remember me" when you log in**, further explanation in the "TODO" section.

## Stack

- React
- Next.js (for SSR)
- Chakra.ui (styling)
- TypeScript

## TODO:

- Mobile version
- Request the ship launches and render them on the ship details.
- In the way the authentication is currently set up, when the page reloads the user has to login again (unless they've selected "Remember me" on the login page). Since its SSR, changing to a new page (e.g. sorting the ships; using the pagination feature) will redirect to the login page. Please, **to test the pagination and sorting feature, select "Remember me" when you log in**.
- Remove Cumulative Layout Shift (CLS)
- Add loading states
- Figured out a way to make the pagination scalable.
- Improve color contrast for a11y.

## Objectives:

### login:

- [x] Email (it should have input validation for email format 'xzy@test.com')
- [x] Password (should be masked)
- [x] Remember me (if selected, authentication should be persisted in local storage)

### Fake login button:

- [x] If different credentials are entered, the page should display an error message.
- [x] If correct credentials are entered, the app should be routed to /ships page.
- [x] If 'remember me' checkbox is checked, successful login should be persisted into the local storage (it can be a simple flag: authenticated: true/false), which means, when the app is reloaded from /ships page, the app should land on the /ships page again.
- [x] If 'remember me' is not checked, successful login should not be persisted into the local storage, which means, when app is reloaded from /ships page, the app should land on the /login page.

### Ships page - Header

- [x] Displays title, description (copied from docs).
- [x] Log out button (routes to login page and removes authentication flag from local storage if it's persisted).

### Ships page - Left table

- [x] Displays response from the API request https://api.spacexdata.com/v4/ships.
- [x] It should display columns: name, type, active, year built, home port and details column, that contains 'view' button for each record, which functionality will be described below.
- [x] The table should be server-side paginated with 10 results by page. Pagination controls should contain buttons for previous/next page and total number of pages.
- [x] Table should be servier-side sortable by all displayed columns.

### Ships page - Right table

- [x] Displays details about the selected ship from the table, by clicking 'view' button from the details column.
- [x] It should contain ship's name, year built, roles and image if it's available. If an image is not available, the placeholder image should be rendered.
- [ ] Displays 'launches' list that contains urls to wikipeadia articles about the launches ship was apart of

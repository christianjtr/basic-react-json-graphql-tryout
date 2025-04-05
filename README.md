# Product page consuming data from a mocked GraphQL server

This tryout aims to create a basic product page by fetching data from a mocked GraphQL server.

> [!NOTE]
>
> -   ❤️ Feel free to add any improvements or suggestions you consider.

1. [Goals](#001)
2. [Tech Stack](#002)
3. [Installation and running the project](#003)
4. [Samples](#004)
5. [Dev notes](#005)
6. [Next Steps](#006)

<a name="001"></a>

### 🎯 Goals

-   Meet the design given (File: design.jpg).
-   Consume data from GraphQL's server (Get product's data).
-   Use TypeScript.
-   Responsive UI.
-   **Features**
    -   Select quantity of the products.
    -   Add products to a shopping cart.

<a name="002"></a>

### Tech Stack

This conceptual test has been developed using the following technologies:

-   **Front-end**
    -   [React](https://react.dev/)
    -   [NextJS](https://nextjs.org/)
    -   [TypeScript](https://www.typescriptlang.org/)
    -   [Yarn](https://classic.yarnpkg.com/en/)
-   **GraphQL ecosystem**
    -   [json-graphql-server](https://www.npmjs.com/package/json-graphql-server) (Server)
    -   [graphql-request](https://www.npmjs.com/package/graphql-request) (Client)
-   **Tests**
    -   [Jest](https://jestjs.io/)

<a name="003"></a>

### Installation and running the project

The project requires:

-   [NodeJS](https://nodejs.org/)

**Clone the repository:**

```shell
git clone https://github.com/christianjtr/basic-react-json-graphql-tryout.git
```

**Scripts:**

Before executing these scripts, you must run **yarn install** in the directory you just downloaded/cloned the codebase. _Other scripts are in package.json file. Also, you may consult the CHALLENGE.md file_.

```shell
# Start the development environment
> yarn dev

# Run unit tests
> yarn test

```

<a name="004"></a>

### Samples

1. Product page

<p align="center">
  <img src="https://github.com/christianjtr/basic-react-json-graphql-tryout/blob/main/samples/product_page.gif"/>
</p>

<a name="005"></a>

### Dev notes

Tasks done before starting the project:

-   Fixed `yarn.lock` file which was corrupted.
    -   Deleting it and running `yarn install --check-files`.
-   Added missing types `yarn add --dev @types/react`.
-   Adapted `package.json` file.
-   Researching a **lightweight graphQL client**.
-   Checked mocked data integrity.
-   Moved routes to an appropiate convention (A redirection was put in place)
    -   Previous: `/product`
    -   Current: `/products/{ID}`
-   Figma usage to somehow determine size of UI elements and spacing.

<a name="006"></a>

### Next steps

-   Upgrade project dependencies
    -   Bump React version.
    -   Bump NextJS version.
    -   Other relevant libraries like testing ones.
-   As the project gets larger, we should investigate a robust state management solution.
    -   Redux Toolkit.
    -   Zustand.
    -   Others.
-   Pages
    -   Not found page.
    -   Loading page or component.

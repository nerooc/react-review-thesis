# Next.js Server-Side Rendering (SSR) Example

This directory contains a simple Next.js application that demonstrates server-side rendering (SSR) using Next.js. Here's a brief explanation of Next.js and how it's used in this app.

## What is Next.js?

[Next.js](https://nextjs.org/) is a popular React framework that enables server-side rendering (SSR) and other powerful features for building web applications. SSR, in particular, allows you to render pages on the server and send fully-rendered HTML to the client, which can improve performance and SEO.

## How is Next.js Used in This App?

In this app, we've created a basic example of server-side rendering using Next.js. Here's an overview of the main components and how they work:

### `pages/ssr.js`

Inside the `src` directory, you'll find a file named `ssr.js`. This is the page that's rendered using server-side rendering. In this example, we've created a simple React component (`SSRPage`) that receives data from the server and displays it. The `getServerSideProps` function fetches data on the server side and passes it as a prop to the component.

### Starting the Development Server

To run the app and see server-side rendering in action, use the following command:

```bash
npm run dev
```

This will start the Next.js development server, and you can access the SSR page at `http://localhost:3000/ssr`.

### Exploring More

This app provides a basic example of SSR with Next.js. Next.js offers many more features for building modern web applications, including client-side routing, API routes, and more. You can explore the [Next.js documentation](https://nextjs.org/docs) to dive deeper into its capabilities.
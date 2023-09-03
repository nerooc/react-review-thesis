# What is Atlassian Forge?

Atlassian Forge is a platform developed by Atlassian that allows developers to build and deploy apps for various Atlassian products like Jira, Confluence, and Bitbucket. Forge simplifies the app development process by providing a serverless architecture, a set of pre-built UI components, and an integrated development environment.

## Creating a Simple Forge App

Follow these steps to create a simple Forge app for React:

1. **Install Forge CLI:** If you haven't already, install the Atlassian Forge Command-Line Interface (CLI) by running the following command:

   ```
   npm install -g @forge/cli
   ```

2. **Create a New Forge App:** Run the following command to create a new Forge app:

   ```
   forge create
   ```

   Follow the prompts to set up your app. You can choose the name "forge-react-app" or any other name you prefer.

3. **Navigate to Your App's Directory:** Change your working directory to your Forge app:

   ```
   cd forge-react-app
   ```

4. **Set Up React:** You can set up React inside your Forge app by using a tool like Create React App (CRA) or by manually configuring React. If you choose CRA, run the following command:

   ```
   npx create-react-app my-react-app
   ```

   Replace "my-react-app" with your preferred app name.

5. **Start Developing:** You can now start developing your Forge app with React. Create React components, use the Forge UI kit, and leverage the power of Atlassian Forge to build custom apps for Atlassian products.

6. **Deployment:** Once your app is ready, you can deploy it to the Atlassian Forge platform. The deployment process will vary depending on your app's requirements and complexity.

The code in the "forge-react-app" directory is available for review, allowing you to explore the basic structure of a Forge app. It provides a simple example of how a Forge app is organized and can serve as a helpful reference for those interested in understanding the fundamental structure of such apps.

```
Please note that you cannot run someone else's Atlassian Forge app unless you have the right permissions. To create your own Forge app and run it, you need to follow the official Atlassian Forge documentation and the steps provided on the following page: [Getting Started with Atlassian Forge](https://developer.atlassian.com/platform/forge/getting-started/).

This page will guide you through the process of setting up your development environment, creating a Forge app, and running it in your Atlassian products.
```

Remember to consult the official Atlassian Forge documentation for more details and in-depth tutorials on building and deploying apps for Atlassian products.

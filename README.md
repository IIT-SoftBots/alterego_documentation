# Website

This repository hosts the official alterEgo website 

## How to contribute
We welcome contributions to improve the documentation and website. To contribute, please follow these steps:
1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Follow the installation instructions below to set up the development environment.
4. Make your changes and test them locally.
5. Commit your changes and push them. 

> [!NOTE]
> Every commit automatically triggers a GitHub Action that builds the website and publishes it.
> Please ensure your changes are working as expected before pushing !!!

## Local development

First, navigate into the project directory and then install the dependencies:
```bash
cd alterEGO-documentation
npm install 
```

Then run the development server:
```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```



This command generates static content into the `build` directory and can be served using any static contents hosting service.

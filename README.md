# Dev Insights - Mini Blog

This is a small Mini Blog project I built using React, TypeScript, and Vite.

I made this project for my React formative assessment. The main things I wanted to practice were React components, TypeScript, CSS styling, optimization, and Higher-Order Components.

## Features

* Dev Insights header
* New Post link
* Three sample blog posts
* Reusable Post component
* TypeScript type for posts
* CSS and inline styling
* Conditional styling
* React.memo
* Unique keys for posts
* withLogger HOC

## Technologies Used

* React
* TypeScript
* Vite
* CSS

## Project Structure

```text
src/
├── components/
│   ├── Header.tsx
│   ├── Post.tsx
│   └── PostList.tsx
├── hoc/
│   └── withLogger.tsx
├── styles/
│   └── blog.css
├── types/
│   └── Post.ts
├── App.tsx
└── main.tsx
```

## How to Run the Project

First, clone the repository:

```bash
git clone https://github.com/Esther447/react-dev-formative-1.git
```

Then go into the project:

```bash
cd react-dev-formative-1
```

Install the packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

To build the project:

```bash
npm run build
```

## Testing

This project does not have a separate testing library yet.

I used `npm run build` to check that the TypeScript and React code builds successfully without errors.

## Components

I used functional components for this project because they are the modern standard in React and work well with hooks like `useEffect`, which I used inside the `withLogger` HOC. Functional components are simpler to read and write compared to class components, and they do not require managing `this` or lifecycle methods like `componentDidMount` and `componentWillUnmount`. React also recommends functional components for new projects, and they integrate naturally with `React.memo` for optimization.

The `Header` component shows the Dev Insights name and the New Post link.

The `PostList` component contains the sample posts.

The `Post` component is reusable and displays the information for each post.

## Styling

I used an external CSS file called `blog.css` for the main styling.

I also used inline styling in the `Header` component.

For conditional styling, I highlighted posts written by Esther with a different style.

## Optimization

I used `React.memo` with the `Post` component.

I also used a unique `key` for each post when displaying the list.

## Higher-Order Component

I created a simple `withLogger` HOC.

It logs a message when a component is mounted and unmounted.

I applied it to the `Header` component.

## Challenges

One challenge I had was understanding how the different components work together.

I also had to learn how to use TypeScript types with React components.

Working on `React.memo` and the HOC also helped me understand how React components can be optimized and reused.

## Packages

I used the packages that came with the React TypeScript Vite project, including:

* React
* React DOM
* TypeScript
* Vite

## Author

Esther Mushimiyimana

GitHub: https://github.com/Esther447

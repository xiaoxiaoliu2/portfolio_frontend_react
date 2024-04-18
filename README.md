# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# 创建React项目

npm create vite@latest project-name
npm install

## To run the react program
npm run dev

### Install the package
npm install @sanity/client @sanity/image-url framer-motion node-sass react-icons



# modify data using sanity cms
## connect sanity to our application

cd .\backend_sanity
sanity manage

use sanity data to fetch real data from the sanity dashboard


# Sanity + react

cd backend
npm install @sanity/cli
npx sanity manage

to use react and sanity to fetch real dynamic data from cms

http://localhost:3000


# deployment
## frontend: 
npm run dev

生成dist文件放进netlify: npm run build

## backend
npx sanity manage
do not use：sanity manage

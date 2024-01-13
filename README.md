![](https://cdn.discordapp.com/attachments/816335215625764865/1195705199520653394/Group_2.png?ex=65b4f63e&is=65a2813e&hm=2d003df89776f23d60123e92ac8ddf502c1c2dcd7e6f0c0f7007645766a62fdd&)

# Dynodeck (Frontend)

[Project under construction]

![](https://cdn.discordapp.com/attachments/816335215625764865/1195705919217082509/Landing_center_og.png?ex=65b4f6ea&is=65a281ea&hm=1d7968c99edcd3638716c2e9d2529208605b5335256a63e68648380724ee5213&)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

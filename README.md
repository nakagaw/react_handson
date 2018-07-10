# React & storybook with TypeScript

webpack-dev-server
```
$npm start
```

storybook
```
$npm run storybook
$npm run build-storybook
```

## There are must keep versions below:
- ts-loader@v3.5.0 => storybook is OK, but ts compile is not working
- ts-loader@v4.4.2 => ts compile is OK, but storybook is not working
### So, There are must keep versions below:
- ts-loader@^4.4.2
- webpack@^4.15.1
- @storybook/* @v4.0.0-alpha.10

## Reference to make the environment
- https://qiita.com/m0a/items/4ebb05cdcaebbd39601d
- https://storybook.js.org/configurations/custom-webpack-config/
- http://www.joshschreuder.me/react-storybooks-with-typescript/

## Reference of component-based development
- https://tech.decisiv.com/structuring-our-styled-components-part-i-2bf21fa64b28
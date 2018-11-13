# Jobseed
Jobseed is a super simple job search and posting for Developers

## How can you benefit from it?
If your site is deployed to a non-root URL, you will need to set the base option in .vuepress/config.js. For example, if you plan to deploy your site to https://foo.github.io/bar/, then base should be set to "/bar/" (it should always start and end with a slash).

With a base URL, if you want to reference an image in .vuepress/public, you'd have to use URLs like /bar/image.png. However, this is brittle if you ever decide to change the base later. To help with that, VuePress provides a built-in helper $withBase (injected onto Vue's prototype) that generates the correct path:

## How does it work
If your site is deployed to a non-root URL, you will need to set the base option in .vuepress/config.js. For example, if you plan to deploy your site to https://foo.github.io/bar/, then base should be set to "/bar/" (it should always start and end with a slash).

With a base URL, if you want to reference an image in .vuepress/public, you'd have to use URLs like /bar/image.png. However, this is brittle if you ever decide to change the base later. To help with that, VuePress provides a built-in helper $withBase (injected onto Vue's prototype) that generates the correct path:
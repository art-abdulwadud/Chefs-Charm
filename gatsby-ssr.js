/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

export { wrapRootElement } from './gatsby-shared';

export function onRenderBody({ setHtmlAttributes }) {
  setHtmlAttributes({ lang: 'en' });
}

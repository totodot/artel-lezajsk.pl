/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const project = process.env.GATSBY_PROJECT || 'artel';
if (project === 'artel') {
  require('./src/styles/artel.scss');
} else if (project === 'ada') {
  require('./src/styles/ada.scss');
}

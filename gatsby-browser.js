// The file gatsby-browser.jsx/gatsby-browser.tsx lets you respond to
// Gatsby-specific events within the browser, and wrap your page
// components in additional global components.

const React = require('react');
const { RecoilRoot } = require('recoil');

module.exports.wrapRootElement = ({ element }) =>
    React.createElement(RecoilRoot, null, element);

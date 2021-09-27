import React from 'react';

export default {
  title: 'Components/Typography',
};

export const Header = () => (
  <>
    <h1>h1 text</h1>
    <h2>h2 text</h2>
    <h3>h3 text</h3>
    <h4>h4 text</h4>
  </>
);

export const HeaderUsingClassAttribute = () => (
  <>
    <div className="h1">h1 text using class attribute</div>
    <div className="h2">h2 text using class attribute</div>
    <div className="h3">h3 text using class attribute</div>
    <div className="h4">h4 text using class attribute</div>
  </>
);

export const text = () => (
  <>
    <div className="text1">text1 text</div>
    <div className="text2">text2 text</div>
    <div className="text3">text3 text</div>
    <div className="text4">text4 text</div>
    <div className="text5">text5 text</div>
  </>
);

export const Boldtext = () => (
  <>
    <div className="text1Bold">text1 Bold text</div>
    <div className="text2Bold">text2 Bold text</div>
    <div className="text3Bold">text3 Bold text</div>
    <div className="text4Bold">text4 Bold text</div>
    <div className="text5Bold">text5 Bold text</div>
  </>
);

export const Caption = () => (
  <>
    <div className="caption">caption text</div>
    <div className="smallCaption">small text</div>
  </>
);

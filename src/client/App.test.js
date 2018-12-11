import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  List,
  Write,
  Read,
  Edit
} from './view';

test('renders App without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < App / > , div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders List page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < List / > , div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Write page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < Write / > , div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Edit page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < Edit / > , div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Read page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < Read / > , div);
  ReactDOM.unmountComponentAtNode(div);
});
import React from 'react';
// import { screen, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

global.React = React;
// global.render = render;
global.userEvent = userEvent;
// global.screen = screen;

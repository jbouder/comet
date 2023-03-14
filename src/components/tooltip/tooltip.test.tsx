import React from 'react';
import { render } from '@testing-library/react';

import Button from './../button';
import Tooltip from './tooltip';

describe('Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render a top tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip" position="top">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('top');
  });
  it('should render a right tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip" position="right">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('right');
  });
  it('should render a bottom tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip" position="bottom">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('bottom');
  });
  it('should render a left tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip" position="left">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('left');
  });
});
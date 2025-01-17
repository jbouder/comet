import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import Breadcrumb, { BreadcrumbItem } from './breadcrumb';

describe('Breadcrumb', () => {
  test('should render with no accessibility violations', async () => {
    const spy = jest.fn();
    const crumbs = [{ path: '/test', name: 'test' }];
    const { container } = render(
      <Breadcrumb id="breadcrumb" items={crumbs} current="foo" action={spy} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render with given props and is callable', () => {
    const spy = jest.fn();
    const crumbs = [{ path: '/test', name: 'test', action: spy }];
    render(<Breadcrumb id="breadcrumb" items={crumbs} current="foo" action={spy} />);

    expect(screen.getByText('test')).toBeVisible();
    expect(screen.getByText('foo')).toBeVisible();

    fireEvent.click(screen.getByTestId('breadcrumb-link'));

    expect(spy).toHaveBeenCalledWith('/test');
  });

  test('should render when current is optional', () => {
    const spy = jest.fn();
    const crumbs = [{ path: '/test', name: 'test' }];
    render(<Breadcrumb id="breadcrumb" items={crumbs} action={spy} />);
  });

  test('should not render when no children or items are provided', () => {
    const spy = jest.fn();
    const { container } = render(<Breadcrumb id="breadcrumb" action={spy} />);
    expect(container.querySelector('#breadcrumb')).toBeFalsy();
  });

  test('should render with children', () => {
    const spy = jest.fn();
    const { container } = render(
      <Breadcrumb id="breadcrumb" action={spy}>
        <BreadcrumbItem path="/test" name="test" />
      </Breadcrumb>,
    );
    expect(container.querySelector('#breadcrumb')).toBeTruthy();
  });
});

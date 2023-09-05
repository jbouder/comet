import React from 'react';
import { act, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import DataTable from './data-table';
import { createColumnHelper } from '@tanstack/react-table';

export interface Person {
  firstName: string;
  lastName: string;
}

describe('DataTable', () => {
  const basicData: Person[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    {
      firstName: 'Bob',
      lastName: 'Ross',
    },
    {
      firstName: 'Elon',
      lastName: 'Musk',
    },
    {
      firstName: 'Bill',
      lastName: 'Gates',
    },
    {
      firstName: 'Ada',
      lastName: 'Lovelace',
    },
    {
      firstName: 'Alan',
      lastName: 'Turing',
    },
    {
      firstName: 'Dwayne',
      lastName: 'Johnson',
    },
    {
      firstName: 'Kirk',
      lastName: 'Hammett',
    },
  ];

  const columnHelper = createColumnHelper<Person>();

  const cols = [
    columnHelper.accessor('firstName', {
      cell: (info) => info.getValue(),
      header: () => 'First Name',
    }),
    columnHelper.accessor('lastName', {
      cell: (info) => info.getValue(),
      header: () => 'Last Name',
    }),
  ];

  test('should render with no accessibility violations', async () => {
    const { container } = render(<DataTable id="table-1" columns={[]} data={[]}></DataTable>);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a basic data table successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData}></DataTable>,
    );

    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
  });

  test('should render a striped table successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData} striped></DataTable>,
    );
    const table = baseElement.querySelector('#table-1.striped');
    expect(table).toBeTruthy();
  });

  test('should render a default sortable table successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData} sortable></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const sortableBtns = baseElement.querySelectorAll('.cursor-pointer');
    expect(sortableBtns).toHaveLength(2);
  });

  test('should render a non-default sortable table successfully', () => {
    const { baseElement } = render(
      <DataTable
        id="table-1"
        columns={cols}
        data={basicData}
        sortable
        sortCol="lastName"
        sortDir="asc"
      ></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const sortableBtns = baseElement.querySelectorAll('.cursor-pointer');
    expect(sortableBtns).toHaveLength(2);
  });

  test('should render a default pageable table successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData} pageable></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const pagingSection = baseElement.querySelector('.table-paging');
    expect(pagingSection).toBeTruthy();
  });

  test('should render a non-default pageable table successfully', () => {
    const { baseElement } = render(
      <DataTable
        id="table-1"
        columns={cols}
        data={basicData}
        pageable
        pageIndex={1}
        pageSize={3}
      ></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const pagingSection = baseElement.querySelector('.table-paging');
    expect(pagingSection).toBeTruthy();
  });

  test('should page through table ', async () => {
    const { baseElement } = render(
      <DataTable
        id="table-1"
        columns={cols}
        data={basicData}
        pageable
        pageIndex={0}
        pageSize={3}
      ></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();

    const pagingSection = baseElement.querySelector('.table-paging');
    if (pagingSection) {
      const nextBtn = pagingSection.querySelector('#table-paging-next-btn') as HTMLButtonElement;
      const prevBtn = pagingSection.querySelector('#table-paging-prev-btn') as HTMLButtonElement;
      const pageBtn = pagingSection.querySelector('#table-paging-btn') as HTMLButtonElement;
      if (nextBtn) {
        expect(nextBtn).toBeTruthy();
        await act(async () => {
          nextBtn.click();
        });
      }
      if (prevBtn) {
        expect(prevBtn).toBeTruthy();
        await act(async () => {
          prevBtn.click();
        });
      }
      if (pageBtn) {
        expect(pageBtn).toBeTruthy();
        await act(async () => {
          pageBtn.click();
        });
      }
    }
  });

  test('should render a table with custom class successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData} className="width-full"></DataTable>,
    );
    const table = baseElement.querySelector('#table-1.width-full');
    expect(table).toBeTruthy();
  });
});

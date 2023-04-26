import { Meta, StoryFn } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import Label from '../label/label';
import { Dropdown, DropdownOption, DropdownProps } from './dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'USWDS/Forms/Dropdown',
  component: Dropdown,
  argTypes: {
    id: { required: true },
    name: { required: true },
  },
};
export default meta;

const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];
const options = loremWords.map((word) => {
  return { value: word.toLowerCase(), label: word } as DropdownOption;
});

const DropdownWrapper: React.FC<DropdownProps> = (props: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  const onChange = (event: ChangeEvent<HTMLSelectElement>): void =>
    setSelectedValue(event.target.value);
  return (
    <>
      <Label htmlFor={props.id}>Dropdown label</Label>
      <Dropdown id={props.id} name={props.name} options={props.options} onChange={onChange} />
      <p>Selected value: {selectedValue}</p>
    </>
  );
};

const Template: StoryFn<typeof Dropdown> = (args: DropdownProps) => <DropdownWrapper {...args} />;
export const Standard = Template.bind({});
Standard.args = {
  id: 'dropdown-1',
  name: 'dropdown-1',
  options,
};
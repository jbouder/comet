import React, { ChangeEventHandler } from 'react';
export interface DropdownOption {
    /**
     * The value for the option
     */
    value: string | readonly string[] | number;
    /**
     * The label for the option
     */
    label: string;
}
export interface DropdownProps {
    /**
     * The unique identifier for the dropdown
     */
    id: string;
    /**
     * The name of the dropdown
     */
    name: string;
    /**
     * The default option of the dropdown
     */
    defaultOption?: DropdownOption | null;
    /**
     * The options of the dropdown
     */
    options?: DropdownOption[];
    /**
     * Event handler for when value of dropdown is change
     */
    onChange?: ChangeEventHandler<HTMLSelectElement>;
}
/**
 * A dropdown component allows users to choose one option from a temporary modal menu.
 */
export declare const Dropdown: ({ defaultOption, options, onChange, className, ...selectProps }: DropdownProps & JSX.IntrinsicElements['select']) => React.ReactElement;
export default Dropdown;

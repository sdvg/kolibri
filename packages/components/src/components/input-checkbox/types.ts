import { Generic } from '@a11y-ui/core';
import { InputTypeOnDefault } from '../../types/input/types';
import { InputRequiredProps } from '../input-text/types';
import { AnyIconFontClass } from '../../types/icon';
import { Stringified } from '../../components';
import { PropIndeterminate } from '../../types/props';

export type InputCheckboxVariant = 'button' | 'checkbox' | 'switch';

export type InputCheckboxIcon = {
	checked: AnyIconFontClass;
	indeterminate?: AnyIconFontClass;
	unchecked?: AnyIconFontClass;
} & {
	checked?: AnyIconFontClass;
	indeterminate: AnyIconFontClass;
	unchecked?: AnyIconFontClass;
} & {
	checked?: AnyIconFontClass;
	indeterminate?: AnyIconFontClass;
	unchecked: AnyIconFontClass;
};

/**
 * API
 */
type RequiredProps = InputRequiredProps;
type OptionalProps = {
	alert: boolean;
	accessKey: string;
	checked: boolean;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	icon: Stringified<InputCheckboxIcon>;
	name: string;
	on: InputTypeOnDefault;
	required: boolean;
	touched: boolean;
	tabIndex: number;
	/**
	 * @deprecated
	 */
	type: InputCheckboxVariant;
	value: string;
	variant: InputCheckboxVariant;
} & PropIndeterminate;
export type Props = Generic.Element.Members<RequiredProps, OptionalProps>;

type RequiredStates = {
	checked: boolean;
	icon: InputCheckboxIcon;
	id: string;
	variant: InputCheckboxVariant;
} & PropIndeterminate;
type OptionalStates = {
	alert: boolean;
	accessKey: string;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	name: string;
	on: InputTypeOnDefault;
	required: boolean;
	touched: boolean;
	tabIndex: number;
	value: string;
};

export type States = Generic.Element.Members<RequiredStates, OptionalStates>;

export type Watches = Generic.Element.Watchers<RequiredProps, OptionalProps>;

export type ComponentApi = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;

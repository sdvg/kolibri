import type { Generic } from 'adopted-style-sheets';

import type {
	PropDisabled,
	PropHasCounter,
	PropHideError,
	PropHideLabel,
	PropId,
	PropLabelWithExpertSlot,
	PropName,
	PropReadOnly,
	PropRequired,
	PropSyncValueBySelector,
	PropTouched,
} from '../props';
import type { InputTypeOnDefault, InputTypeOnOff, KoliBriHorizontalIcons, Stringified } from '../types';
import type { ButtonProps } from './button';

type RequiredProps = NonNullable<unknown>;
type OptionalProps = {
	accessKey: string;
	alert: boolean;
	autoComplete: InputTypeOnOff;
	error: string;
	hint: string;
	icons: Stringified<KoliBriHorizontalIcons>;
	maxLength: number;
	on: InputTypeOnDefault;
	pattern: string;
	placeholder: string;
	smartButton: Stringified<ButtonProps>;
	tabIndex: number;
	value: string;
} & PropDisabled &
	PropHasCounter &
	PropHideError &
	PropHideLabel &
	PropLabelWithExpertSlot &
	PropName &
	PropReadOnly &
	PropRequired &
	PropSyncValueBySelector &
	PropTouched;

type RequiredStates = {
	autoComplete: InputTypeOnOff;
	hasValue: boolean;
} & PropId &
	PropHideError &
	PropLabelWithExpertSlot;
type OptionalStates = {
	accessKey: string;
	alert: boolean;
	currentLength: number;
	error: string;
	hint: string;
	icons: KoliBriHorizontalIcons;
	maxLength: number;
	on: InputTypeOnDefault;
	pattern: string;
	placeholder: string;
	smartButton: ButtonProps;
	tabIndex: number;
	value: string | null;
} & PropDisabled &
	PropHasCounter &
	PropHideLabel &
	PropName &
	PropReadOnly &
	PropRequired &
	PropTouched;

export type InputPasswordProps = Generic.Element.Members<RequiredProps, OptionalProps>;
export type InputPasswordStates = Generic.Element.Members<RequiredStates, OptionalStates>;
export type InputPasswordWatches = Generic.Element.Watchers<RequiredProps, OptionalProps>;
export type InputPasswordAPI = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;

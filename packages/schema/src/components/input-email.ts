import type { Generic } from 'adopted-style-sheets';

import type {
	PropDisabled,
	PropHasCounter,
	PropHideError,
	PropHideLabel,
	PropId,
	PropLabelWithExpertSlot,
	PropMultiple,
	PropName,
	PropReadOnly,
	PropRequired,
	PropSuggestions,
	PropSyncValueBySelector,
	PropTouched,
} from '../props';
import type { InputTypeOnDefault, InputTypeOnOff, KoliBriHorizontalIcons, Stringified, W3CInputValue } from '../types';
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
	PropMultiple &
	PropName &
	PropReadOnly &
	PropRequired &
	PropSuggestions &
	PropSyncValueBySelector &
	PropTouched;

type RequiredStates = {
	autoComplete: InputTypeOnOff;
	hasValue: boolean;
	suggestions: W3CInputValue[];
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
	value: string;
} & PropDisabled &
	PropHasCounter &
	PropHideLabel &
	PropMultiple &
	PropName &
	PropReadOnly &
	PropRequired &
	PropTouched;

export type InputEmailProps = Generic.Element.Members<RequiredProps, OptionalProps>;
export type InputEmailStates = Generic.Element.Members<RequiredStates, OptionalStates>;
export type InputEmailWatches = Generic.Element.Watchers<RequiredProps, OptionalProps>;
export type InputEmailAPI = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;

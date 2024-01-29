import type { Generic } from 'adopted-style-sheets';

import type {
	PropDisabled,
	PropHideError,
	PropHideLabel,
	PropId,
	PropLabelWithExpertSlot,
	PropName,
	PropSuggestions,
	PropSyncValueBySelector,
	PropTouched,
} from '../props';
import type { InputTypeOnDefault, InputTypeOnOff, KoliBriHorizontalIcons, Stringified, W3CInputValue } from '../types';

type RequiredProps = NonNullable<unknown>;
type OptionalProps = {
	accessKey: string;
	alert: boolean;
	autoComplete: InputTypeOnOff;
	error: string;
	hint: string;
	icons: Stringified<KoliBriHorizontalIcons>;
	max: number;
	min: number;
	on: InputTypeOnDefault;
	step: number;
	tabIndex: number;
	value: number;
} & PropDisabled &
	PropHideError &
	PropHideLabel &
	PropLabelWithExpertSlot &
	PropName &
	PropSuggestions &
	PropSyncValueBySelector &
	PropTouched;

type RequiredStates = {
	autoComplete: InputTypeOnOff;
	suggestions: W3CInputValue[];
} & PropId &
	PropHideError &
	PropLabelWithExpertSlot;
type OptionalStates = {
	accessKey: string;
	alert: boolean;
	error: string;
	hint: string;
	icons: KoliBriHorizontalIcons;
	max: number;
	min: number;
	on: InputTypeOnDefault;
	step: number;
	tabIndex: number;
	value: number;
} & PropDisabled &
	PropHideLabel &
	PropName &
	PropTouched;

export type InputRangeProps = Generic.Element.Members<RequiredProps, OptionalProps>;
export type InputRangeStates = Generic.Element.Members<RequiredStates, OptionalStates>;
export type InputRangeWatches = Generic.Element.Watchers<RequiredProps, OptionalProps>;
export type InputRangeAPI = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;

import type { Generic } from 'adopted-style-sheets';

import type { PropCollapsible, PropHasCompactButton, PropHideLabel, PropLabel } from '../props';
import type { ButtonOrLinkOrTextWithChildrenProps, Orientation, Stringified } from '../types';

type RequiredProps = {
	links: Stringified<ButtonOrLinkOrTextWithChildrenProps[]>;
} & PropLabel;
type OptionalProps = {
	orientation: Orientation;
} & PropCollapsible &
	PropHasCompactButton &
	PropHideLabel;

type RequiredStates = {
	links: ButtonOrLinkOrTextWithChildrenProps[];
	orientation: Orientation;
	expandedChildren: ButtonOrLinkOrTextWithChildrenProps[][];
} & PropCollapsible &
	PropHasCompactButton &
	PropLabel &
	PropHideLabel;
type OptionalStates = NonNullable<unknown>;

export type NavProps = Generic.Element.Members<RequiredProps, OptionalProps>;
export type NavStates = Generic.Element.Members<RequiredStates, OptionalStates>;
export type NavAPI = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;

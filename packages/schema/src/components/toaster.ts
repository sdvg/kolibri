import type { Generic } from 'adopted-style-sheets';

import type { LabelPropType } from '../props';
import type { AlertType, AlertVariant } from './alert';

const toastStatusOptions = ['adding', 'settled', 'removing'] as const;
type ToastStatus = (typeof toastStatusOptions)[number];

export type Toast = {
	description?: string;
	render?: (nodeRef: HTMLElement, options: { close: () => void }) => void;
	label: LabelPropType;
	type: AlertType;
	alertVariant?: AlertVariant;
};

export type ToastState = {
	toast: Toast;
	status: ToastStatus;
	id: string;
};

export type ToasterOptions = {
	defaultAlertVariant: AlertVariant;
};

type RequiredProps = NonNullable<unknown>;
type OptionalProps = NonNullable<unknown>;

type RequiredStates = RequiredProps & {
	toastStates: ToastState[];
};
type OptionalStates = OptionalProps;

export type ToasterProps = Generic.Element.Members<RequiredProps, OptionalProps>;
export type ToasterStates = Generic.Element.Members<RequiredStates, OptionalStates>;
export type ToasterAPI = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;

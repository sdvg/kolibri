import React from 'react';
import { KolButton, KolForm, KolHeading, KolSelect } from '@public-ui/react';
import { Field, FieldProps, useFormikContext } from 'formik';
import { FormValues } from './AppointmentForm';
import { ErrorListPropType } from '@public-ui/components';

const LOCATION_OPTIONS = [
	{
		value: 'Aplerbeck',
		label: 'Aplerbeck',
	},
	{
		value: 'Brackel',
		label: 'Brackel',
	},
	{
		value: 'Dorstfeld',
		label: 'Dorstfeld',
	},
	{
		value: 'Innenstadt Ost',
		label: 'Innenstadt Ost',
	},
	{
		value: 'Innenstadt West',
		label: 'Innenstadt West',
	},
];

export function DistrictForm() {
	const form = useFormikContext<FormValues>();
	const errorList = createErrorList(form.errors);

	function createErrorList(formikErrors: Record<string, string>): ErrorListPropType[] {
		return Object.keys(formikErrors).map((fieldName) => ({
			message: formikErrors[fieldName],
			selector: `#field-${fieldName}`,
		}));
	}

	return (
		<div className="p-2">
			<KolHeading _level={2} _label="Wählen Sie einen Stadtteil aus"></KolHeading>
			<KolForm
				_errorList={errorList}
				_on={{
					onSubmit: () => {
						void form.submitForm();
					},
				}}
			>
				<Field name="district">
					{({ field }: FieldProps<FormValues['district']>) => (
						<KolSelect
							id="field-district"
							_label="Stadtteil"
							_options={[{ label: 'Bitte wählen…', value: '' }, ...LOCATION_OPTIONS]}
							_value={[field.value]}
							_error={form.errors.district || ''}
							_touched={form.touched.district}
							_required
							_on={{
								onChange: (event, values: unknown) => {
									// Select und Radio setzen den Wert immer initial.
									if (event.target) {
										const [value] = values as [FormValues['district']];
										void form.setFieldTouched('district', true);
										void form.setFieldValue('district', value, true);
									}
								},
							}}
						/>
					)}
				</Field>

				<KolButton _label="Weiter" _type="submit" className="mt-2" />
			</KolForm>
		</div>
	);
}

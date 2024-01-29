import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { getDetailsHtml } from './html.mock';

import type { SpecPage } from '@stencil/core/testing';
import type { DetailsProps } from '@public-ui/schema';

executeTests<DetailsProps>(
	'Details',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-details {...props} />,
		});
		return page;
	},
	{
		_label: ['Zusammenfassung'],
		_open: [false, true],
	},
	getDetailsHtml,
	{
		execMode: 'default', // ready
	}
);

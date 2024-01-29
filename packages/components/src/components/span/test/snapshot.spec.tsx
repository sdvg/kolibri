import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { getSpanHtml } from './html.mock';

import type { SpecPage } from '@stencil/core/testing';
import type { SpanProps } from '@public-ui/schema';

executeTests<SpanProps>(
	'Span',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-span {...props} />,
		});
		return page;
	},
	{
		_icons: ['codicon codicon-home'],
		_hideLabel: [true, false],
		_label: ['Text', ''],
	},
	getSpanHtml,
	{
		execMode: 'default', // ready
	}
);

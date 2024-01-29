import { executeTests } from 'stencil-awesome-test';

import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { COMPONENTS } from '../../component-list';
import { getBadgeHtml } from './html.mock';

import type { BadgeProps } from '@public-ui/schema';
import type { SpecPage } from '@stencil/core/testing';

executeTests<BadgeProps>(
	'Badge',
	async (props): Promise<SpecPage> => {
		const page = await newSpecPage({
			components: COMPONENTS,
			template: () => <kol-badge {...props} />,
		});
		return page;
	},
	{
		_color: ['#000000'],
		_icons: ['codicon codicon-home'],
		_label: ['Text', '**Te**xt'],
	},
	(props) => getBadgeHtml(props),
	{
		execMode: 'default', // ready
	}
);

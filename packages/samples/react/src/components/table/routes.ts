import { Routes } from '../../shares/types';

import { TableBadgeSize } from './badge-size';
import { TableColumnAlignment } from './column-alignment';
import { TableRenderCell } from './render-cell';
import { TableSortData } from './sort-data';
import { TableWithPagination } from './with-pagination';
import { PaginationPosition } from './pagination-position';
import { TableHorizontalScrollbar } from './horizontal-scrollbar';

export const TABLE_ROUTES: Routes = {
	table: {
		'badge-size': TableBadgeSize,
		'column-alignment': TableColumnAlignment,
		'horizontal-scrollbar': TableHorizontalScrollbar,
		'render-cell': TableRenderCell,
		'sort-data': TableSortData,
		'with-pagination': TableWithPagination,
		'pagination-position': PaginationPosition,
	},
};

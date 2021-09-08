// ----------------------------------------------------------------------

import { Theme } from '@material-ui/core';

export default function Tooltip(theme:Theme) {
	return {
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					backgroundColor: theme.palette.grey[800]
				},
				arrow: {
					color: theme.palette.grey[800]
				}
			}
		}
	};
}

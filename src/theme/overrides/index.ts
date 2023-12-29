import { merge } from 'lodash';
import Card from '@/theme/overrides/Card';
import Lists from '@/theme/overrides/Lists';
import Paper from '@/theme/overrides/Paper';
import Input from '@/theme/overrides/Input';
import Button from '@/theme/overrides/Button';
import Tooltip from '@/theme/overrides/Tooltip';
import Backdrop from '@/theme/overrides/Backdrop';
import Typography from '@/theme/overrides/Typography';
import IconButton from '@/theme/overrides/IconButton';
import Autocomplete from '@/theme/overrides/Autocomplete';
import { Theme } from '@mui/material';

const ComponentsOverrides = (theme: Theme) => {
    return merge(
        Card(theme),
        Lists(theme),
        Paper(),
        Input(theme),
        Button(theme),
        Tooltip(theme),
        Backdrop(theme),
        Typography(theme),
        IconButton(theme),
        Autocomplete(theme)
    );
};

export default ComponentsOverrides;

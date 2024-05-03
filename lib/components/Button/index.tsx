import './button.scss'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function LibButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button className="btn" variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    );
}
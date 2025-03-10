import { useColorScheme } from '@mui/material/styles'

import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SystemModeIcon from '@mui/icons-material/SystemUpdateAlt'

function ModeSelect() {
    const { mode, setMode } = useColorScheme()
    if (!mode) {
        return null
    }

    const handleChange = (event) => {

        setMode(event.target.value)
    }

    return (
        <FormControl size='small' sx={{ minWidth: '120px' }}>
            <InputLabel
                sx={{
                    color: 'white',
                    '&.Mui-focused': {
                        color: 'white'
                    }

                }}
                id="label-select-mode">Mode
            </InputLabel>
            <Select
                sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white'
                    },
                    '& .MuiSelect-icon': {
                        color: 'white'
                    }

                }}
                labelId="label-select-mode"
                id="select-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}

                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="light">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LightModeIcon fontSize='small' /> Light
                    </Box>

                </MenuItem>
                <MenuItem value="dark">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <DarkModeIcon fontSize='small' /> Dark
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SystemModeIcon fontSize='small' /> System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl >
    )
}


export default ModeSelect
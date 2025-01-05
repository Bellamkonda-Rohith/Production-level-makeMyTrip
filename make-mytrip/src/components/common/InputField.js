import * as React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'

export default function InputField({ data, neededlabel, name, setsearchdata }) {
    const options = data.map(option => option[neededlabel]).filter(Boolean)

    return (
        <Stack spacing={2}>
            <Autocomplete
                onInputChange={(event, value) => setsearchdata(value)}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={options}
                renderInput={params => (
                    <TextField
                        style={{ color: 'lightgray' }}
                        className="w-100 "
                        {...params}
                        label={name}
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                type: 'search'
                            }
                        }}
                    />
                )}
            />
        </Stack>
    )
}

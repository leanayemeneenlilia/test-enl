import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import MyDatePickerField from './froms/MyDatePickerField'
import MyTextField from './froms/MyTextField'
import MySelectField from './froms/MySelectField'
import MyMultilineField from './froms/MyMultilineField'
import {useForm} from 'react-hook-form'


const Create = () => {

    const {handleSubmit, reset, setValue, control} = useForm()
    const submission = (data) => console.log(data)

    return(
        <div>
            <form onSubmit={handleSubmit(submission)}>

            <Box sx= {{display: 'flex', width: '100%', backgroundColor: '#00003f', marginBottom: '10px'}}>
                <Typography sx = {{marginLeft:'20px', color:'#fff'}}>
                    Create records
                </Typography>

            </Box>

            <Box sx= {{display: 'flex', width: '100%', boxShadow : 3, padding: 4, flexDirection: 'column'}}>

                <Box sx= {{display: 'flex', justifyContent : 'space-around', marginBottom :'40px' }}>
                    <MyTextField
                      label = "Name"
                      name = 'name'
                      control = {control}
                      placeholder = 'Provide a project name'
                      width = {'30%'}
                    />

                    <MyDatePickerField
                        label = 'Start date'
                        name= 'start_date'
                        control = {control}
                        width = {'30%'}
                    />

                    <MyDatePickerField
                        label = 'End sate'
                        name= 'end_date'
                        control = {control}
                        width = {'30%'}
                    />
                </Box>
                <Box sx= {{display: 'flex', justifyContent : 'space-around'}}>
                    <MyMultilineField
                        label = "Comments"
                        name = 'comments'
                        control = {control}
                        placeholder = 'Provide a project comments'
                        width = {'30%'}
                        />

                    <MySelectField
                        label = 'Status'
                        name= 'status'
                        control = {control}
                        width = {'30%'}
                    />

                    <Box sx = {{ width:'30%'}}>
                        <Button variant = 'contained' type='submit' sx= {{width : '100%'}}>
                            Submit
                        </Button>

                    </Box>
                </Box>
            </Box>
            </form>
        </div>
    )
}

export default Create

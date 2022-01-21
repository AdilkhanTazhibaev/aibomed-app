import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Button, Paper} from "@mui/material";
import MainSearch from "../DataPicker/MainSearch";
import TableMain from "../Tables/Tables";
import ModalFrom from "../../Modal/ModalForm/ModalForm";
import EditForm from "../../Modal/ModalForm/EditSubmit";
import DoneTable from "../Tables/DoneTable";
import {useQuery} from "react-query";
import {baseURL, userAxios} from "../../../../services/axiosSettings";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <>{children}</>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function MainTabs() {




    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Текущие задачи" {...a11yProps(0)} />
                    <Tab label="Завершенные задачи" {...a11yProps(1)} />

                    <div style={{flex: '2',textAlign: 'end'}}>
                        <Button onClick={() =>handleOpen()}color="primary" variant={"contained"}>Добавить задачу</Button>
                    </div>

                </Tabs>

            </Box>
            <TabPanel value={value} index={0}>
                <Paper sx={{marginBottom: '30px', padding: '20px'}}><MainSearch/></Paper>
                <TableMain/>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper sx={{marginBottom: '30px', padding: '20px'}}><MainSearch/></Paper>
                <DoneTable/>
            </TabPanel>

            <ModalFrom handleClose={handleClose} createOpen={open} />
            <EditForm />
        </Box>
    );
}
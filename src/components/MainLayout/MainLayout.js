import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Content from "./Content/Content";
import LogoComponent from "./LogoComponent/LogoComponent";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {useDispatch, useSelector} from "react-redux";
import {setRoutePath} from "../../redux/actions/layuout-action";
import {useNavigate } from "react-router-dom";
import {useState} from "react";
const drawerWidth = 240;

const stylesListItem = {
    background: '#007cf8',
    color: '#fff',
    width: '90%',
    borderBottomRightRadius: '20px',
    borderTopRightRadius: '20px'
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    background: '#fff',
    color: '#000',
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',

    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function MainLayout() {
const {pathRoute} = useSelector(state=>state.layout)
    const[url, setUrl] = useState('task');

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
const dispatch = useDispatch()
    React.useEffect(()=>{
        setUrl('tasks')
        dispatch(setRoutePath('task'))
    }, [url])
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Задачи
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <LogoComponent/>
                    <IconButton onClick={handleDrawerClose}>
                        <MenuIcon />
                    </IconButton>
                </DrawerHeader>
                <List>

                    <ListItem button style={'home' === url ? stylesListItem : null}  onClick={()=>{
                        navigate(`/`)
                        setUrl('home')
                        dispatch(setRoutePath('home'))
                    }}>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Главная'} />
                    </ListItem>
                    <ListItem button style={'tasks' === url ? stylesListItem : null}  onClick={()=>{
                        navigate(`/tasks`)
                        setUrl('tasks')
                        dispatch(setRoutePath('tasks'))
                    }}>
                        <ListItemIcon>
                           <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Задачи'} />
                    </ListItem>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
              <Content />
            </Main>
        </Box>
    );
}
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useContext, useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SettingsIcon from '@mui/icons-material/Settings';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import Badge from "@mui/material/Badge";
import CustomCard from "../Card/CustomCard";
import Chart from "react-apexcharts";
import { Card, Grid } from "@mui/material";
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const Data = {
    height: 350,
    type: "bar",
    options: {
      chart: {
        id: "bar-chart",
        stacked: true,
        toolbar: {
          show: true,
        },
        redrawOnWindowResize: true,
        redrawOnParentResize: true,
        zoom: {
          enabled: true,
        },
        background: theme.palette.background.default,
      },
      theme: {
        mode: theme.palette.mode,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: `'Roboto', sans-serif`,
        position: "bottom",
        offsetX: 20,
        labels: {
          useSeriesColors: false,
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 8,
        },
      },
      fill: {
        type: "solid",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
      },
    },
    series: [
      {
        name: "Investment",
        data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75],
      },
      {
        name: "Loss",
        data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75],
      },
      {
        name: "Profit",
        data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
      },
      {
        name: "Maintenance",
        data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0],
      },
    ],
  };
  const Data2 = {
    height: 350,
    type: "pie",
    options: {
      chart: {
        id: "bar-chart",
        stacked: true,
        toolbar: {
          show: true,
        },
        redrawOnWindowResize: true,
        redrawOnParentResize: true,
        zoom: {
          enabled: true,
        },
        background: theme.palette.background.default,
      },
      theme: {
        mode: theme.palette.mode,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: `'Roboto', sans-serif`,
        position: "bottom",
        offsetX: 20,
        labels: {
          useSeriesColors: false,
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 8,
        },
      },
      fill: {
        type: "solid",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
      },
    },
    series: [
      {
        name: "Investment",
        data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75],
      },
      {
        name: "Loss",
        data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75],
      },
      {
        name: "Profit",
        data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
      },
      {
        name: "Maintenance",
        data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0],
      },
    ],
  };
  const options = {
    labels: ["eBill", "pd2Xml", "wordToPdf", "interconnection", "fileSharing"],
    theme: {
      mode: theme.palette.mode,
    },
    chart: {
      background: theme.palette.background.default,
    },
  };
  const series = [4, 5, 6, 1, 5]; //our data
  const data = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      theme: {
        mode: theme.palette.mode,
        palette: "palette1",
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
      chart: {
        background: theme.palette.background.default,
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const chartData = {
    type: "area",
    height: 95,
    options: {
      chart: {
        id: "support-chart",
        sparkline: {
          enabled: true,
        },
        background: theme.palette.mode === "dark" ? "#2d364e" : "#fffff",
      },
      theme: {
        mode: theme.palette.mode,
        palette: "palette1",
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: "Ticket ",
        },
        marker: {
          show: false,
        },
      },
    },
    series: [
      {
        data: [0, 15, 10, 50, 30, 40, 25],
      },
    ],
  };
  const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "johndoe",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "51034szv",
      user: "goodmanave",
      date: "2022-11-05",
      cost: "200.95",
    },
    {
      txId: "0a123sb",
      user: "stevebower",
      date: "2022-11-02",
      cost: "13.55",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "120s51a",
      user: "wootzifer",
      date: "2019-04-15",
      cost: "24.20",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
  ];

  const chartData2 = {
    type: "line",
    height: 95,
    options: {
      chart: {
        id: "support-chart",
        sparkline: {
          enabled: true,
        },
        background: theme.palette.mode === "dark" ? "#2d364e" : "#fffff",
      },
      theme: {
        mode: theme.palette.mode,
        palette: "palette1",
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: "Ticket ",
        },
        marker: {
          show: false,
        },
      },
    },
    series: [
      {
        data: [0, 15, 10, 50, 30, 40, 25],
      },
    ],
  };
  const chartData3 = {
    type: "area",
    height: 95,
    options: {
      chart: {
        id: "support-chart",
        sparkline: {
          enabled: true,
        },
        background: theme.palette.mode === "dark" ? "#2d364e" : "#fffff",
      },
      theme: {
        mode: theme.palette.mode,
        palette: "palette1",
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: "Ticket ",
        },
        marker: {
          show: false,
        },
      },
    },
    series: [
      {
        data: [0, 15, 10, 50, 30, 40, 25],
      },
    ],
  };
  const chartData4 = {
    type: "bar",
    height: 95,
    options: {
      chart: {
        id: "support-chart",
        sparkline: {
          enabled: true,
        },
        background: theme.palette.mode === "dark" ? "#2d364e" : "#fffff",
      },
      theme: {
        mode: theme.palette.mode,
        palette: "palette1",
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: "Ticket ",
        },
        marker: {
          show: false,
        },
      },
    },
    series: [
      {
        data: [0, 15, 10, 50, 30, 40, 25, 10, 20, 50, 40, 60, 70],
      },
    ],
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ background: "#1D2445" }}>
          <IconButton
            size="large"
            edge="start"
            onClick={handleDrawerOpen}
            aria-label="open drawer"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>

          <Box sx={{ display: { xs: "block", sm: "block", md: "flex" }, justifyContent: "space-between", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="primary">
                <NotificationsIcon
                  style={{ color: "white" }}
                />
              </Badge>
            </IconButton>
            <IconButton onClick={colorMode.toggleColorMode} size="large">
              <LightModeOutlinedIcon
                style={{ color: "white" }}
              />
            </IconButton>
            <div style={{ backgroundImage: "url('../logo-light.svg')", width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
            <Chip
              label="Timothy's Org"
              avatar={<Avatar alt="Timothy's Org" src="/static/images/avatar/1.jpg" />}
              onDelete={() => console.log('hello')}
              deleteIcon={<KeyboardArrowDownIcon style={{ color: "white" }} />}
              variant="outlined"
              sx={{ color: "white", backgroundColor: "#3C4667" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ display: "flex", justifyContent: "space-between", background: "#0B1535" }}>
          <div style={{backgroundImage: "url('../logo-light.svg')", width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
          <IconButton
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <MenuIcon style={{ color: "white" }} />
            ) : (
              <MenuIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <List sx={{ background: "#0B1535", color: "white", height: "100%" }}>
          <ListItem key="Dashboard" disablePadding selected={true}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <Divider color="#b7eb00" />
          </ListItem>
          {/* <Divider color="#b7eb00" /> */}
          <ListItem key="Devices" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DeviceThermostatIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Devices" />
            </ListItemButton>
          </ListItem>
          {/* <Divider color="#b7eb00" /> */}
          <ListItem key="Usage" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SsidChartIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Usage" />
            </ListItemButton>
          </ListItem>
          {/* <Divider color="#b7eb00"  /> */}
          <ListItem key="Settings" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              <Divider color="#b7eb00" sx={{ height:1.5}} />
            </ListItem>
            
          ))} */}
          {/* <Divider color="#b7eb00" sx={{ height:1.5}} /> */}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Header title="DASHBOARD" subtitle="Welcome to dashboard" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Card
              sx={{ p: 2, maxWidth: "100%" }}
              style={{ backgroundColor: theme.palette.background.default }}
            >
              <Grid container sx={{ p: 0, pb: 0, color: "#fff" }}>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        color={theme.palette.primary.main}
                        fontWeight="bold"
                      >
                        eBill-Service
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h4" sx={{ color: colors.grey[100] }}>
                        $1839.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: colors.grey[100] }}
                  >
                    10% Profit
                  </Typography>
                </Grid>
              </Grid>
              <Chart {...chartData} />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                bgcolor: theme.palette.background.default,
                p: 2,
                maxWidth: "100%",
              }}
            >
              <Grid container sx={{ p: 0, pb: 0, color: "#fff" }}>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        color={theme.palette.primary.main}
                        fontWeight="bold"
                      >
                        File Sharing-Service
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h4" sx={{ color: colors.grey[100] }}>
                        $1839.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: colors.grey[100] }}
                  >
                    20% Profit
                  </Typography>
                </Grid>
              </Grid>
              <Chart {...chartData2} />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                bgcolor: theme.palette.background.default,
                p: 2,
                maxWidth: "100%",
              }}
            >
              <Grid container sx={{ p: 0, pb: 0, color: "#fff" }}>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        color={theme.palette.primary.main}
                        fontWeight="bold"
                      >
                        File Conversion-Service
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h4" sx={{ color: colors.grey[100] }}>
                        $1839.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: colors.grey[100] }}
                  >
                    30% Profit
                  </Typography>
                </Grid>
              </Grid>
              <Chart {...chartData3} />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                bgcolor: theme.palette.background.default,
                p: 2,
                maxWidth: "100%",
              }}
            >
              <Grid container sx={{ p: 0, pb: 0, color: "#fff" }}>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        color={theme.palette.primary.main}
                        fontWeight="bold"
                      >
                        Other Services
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h4" sx={{ color: colors.grey[100] }}>
                        $1839.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: colors.grey[100] }}
                  >
                    40% Profit
                  </Typography>
                </Grid>
              </Grid>
              <Chart {...chartData4} />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{ boxShadow: 3, p: 2, overflow: "hidden", borderRadius: 1 }}
            >
              <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "0 0 5px 0", mt: "20px" }}
              >
                Total Growth
              </Typography>
              <Typography variant="h5" color={theme.palette.primary.main}>
                Company Total Growth Displayed Here
              </Typography>
              {/* <Chart options={data.options} series={data.series} type="bar" width={500} height={320} /> */}
              <Chart {...Data} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={theme.palette.background.default}
              boxShadow={3}
              borderRadius={1}
              padding={2}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                colors={colors.grey[100]}
                p="15px"
              >
                <Typography
                  color={colors.grey[100]}
                  variant="h3"
                  fontWeight="bold"
                >
                  Recent Transactions
                </Typography>
              </Box>
              <Box overflow="auto" maxHeight={380}>
                {mockTransactions.map((transaction, i) => (
                  <Box
                    key={`${transaction.txId}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    //  borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                    boxShadow={2}
                  >
                    <Box>
                      <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        color={theme.palette.primary.main}
                        fontWeight="600"
                      >
                        {transaction.txId}
                      </Typography>
                      <Typography color={colors.grey[100]}>
                        {transaction.user}
                      </Typography>
                    </Box>
                    <Box color={colors.grey[100]}>{transaction.date}</Box>
                    <Box
                      backgroundColor={theme.palette.primary.main}
                      p="5px 10px"
                      borderRadius="4px"
                      color="white"
                    >
                      ${transaction.cost}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                boxShadow: 3,
                p: 2,
                overflow: "hidden",
                height: "75vh",
                borderRadius: 1,
              }}
            >
              <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{
                  m: "0 0 5px 0",
                  mt: "20px",
                  // display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                Profit By Service
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "60vh",
                }}
              >
                {" "}
                <Chart
                  options={options}
                  series={series}
                  type="donut"
                  width="380"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ boxShadow: 3, p: 2, height: "100%", borderRadius: 1 }}>
              <Contacts />
            </Box>
          </Grid>
        </Grid>
        {/* <Box  sx={{ display:'flex', flexDirection:"row", flexWrap:"wrap"  }}>
        <Box sx={{m:'10px'}}> <CustomCard  title="Pdftoxml-Services" subText="send pdf we convert to xml" btnText="apply"/></Box>
        <Box sx={{m:'10px'}}> <CustomCard  title="EDI-Services" subText="simplyfy the process with EDI" btnText="configure"/></Box>
        <Box sx={{m:'10px'}}> <CustomCard  title="eBill-Services" subText="simple creation of eBill" btnText="apply"/></Box>
        <Box sx={{m:'10px'}}> <CustomCard  title="Interconnect" subText="send docs to the partners" btnText="configure"/></Box> */}

        {/* <Box sx={{m:'10px'}}> <CustomCard /></Box>
        <Box sx={{m:'10px'}}> <CustomCard /></Box>
        <Box sx={{m:'10px'}}> <CustomCard /></Box>
        <Box sx={{m:'10px'}}> <CustomCard /></Box> */}
        {/* </Box> */}
        <Footer />
      </Main>
    </Box>
  );
}

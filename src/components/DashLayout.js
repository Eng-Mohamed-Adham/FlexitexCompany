import { Outlet } from "react-router-dom"
import DashFooter from "./DashFooter"
import { Box, Grid } from "@mui/material"
import HeaderDash from "./HeaderDash"

const DashLayout = () => {
  return (
    <Box
    sx={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-start',
      flexWrap:{xs:'wrap',md:'nowrap'},
      height:'100%',
      background:'#E5E6E9',
      

    }}

    >

    <HeaderDash />
    <Outlet />
    <DashFooter />
    </Box>
    
  )
}

export default DashLayout

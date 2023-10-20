import { Box, Grid, Stack } from "@mui/material"
import { Link, Outlet, useLocation } from "react-router-dom"

const SIDEBAR_ITEMS = [
  {
    id: 1,
    name: "Profile",
    path: "/home/user/profile",
  },
  {
    id: 2,
    name: "Description",
    path: "/home/user/description",
  },
  {
    id: 3,
    name: "Past Contract",
    path: "/home/user/past-contracts",
  },
  {
    id: 4,
    name: "Partner Reviews",
    path: "/home/user/partner-reviews",
  },
  {
    id: 5,
    name: "Payment",
    path: "/home/user/payment",
  }
]

const User = () => {
  const { pathname } = useLocation()
  return (
    <Box
      sx={{
        height: "100%",
        borderRadius: "30px",
        borderBottomLeftRadius: "0px",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
        width: "98%",
      }}
    >
      <Grid container spacing={0} className="h-full">
        <Grid item xs={2} className="h-full">
          <Stack className='h-full bg-[#E8E9F4]'>
            {
              SIDEBAR_ITEMS.map((item) => {
                const selected = pathname.includes(item.path);
                return (
                  <Link to={`${item.path}`} key={item.id} className={`${selected ? "bg-white" : ""} p-4 font-bold`}>
                    <h1>{item.name}</h1>
                  </Link>
                )
              })
            }
          </Stack>
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  )
}

export default User
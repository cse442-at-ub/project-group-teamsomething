import { Box, Grid, Stack } from "@mui/material"
import { Link, Outlet, useLocation } from "react-router-dom"

const SIDEBAR_ITEMS = [
  {
    id: 1,
    name: "Profile",
    path: "/profile",
  },
  {
    id: 2,
    name: "Description",
    path: "/description",
  },
  {
    id: 3,
    name: "Past Contract",
    path: "/past-contracts",
  },
  {
    id: 4,
    name: "Partner Reviews",
    path: "/partner-reviews",
  },
  {
    id: 5,
    name: "Payment",
    path: "/payment",
  }
]

const UserSidebar = () => {
  const { pathname } = useLocation()
  return (
    <Box
      sx={{
        height: "100%",
        borderRadius: "30px",
        borderBottomLeftRadius: "0px",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={0} className="h-full bg-[#E8E9F4]">
        <Grid className="h-full">
          <Stack>
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
      </Grid>
    </Box>
  )
}

export default UserSidebar
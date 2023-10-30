// import React from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   Stack,
//   Typography,
  
// } from "@mui/material";



// import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
// import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
// import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
// import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

// const MatchesCard = ({
//     profilePhoto,
//     profileName,
//     profileLocation,
//     profileAge,
//     ProfileDescription,
//     ReviewerContent,
//     ReviewerName,
//     ReviewerAge,
//     Duration,
//     TotalWagered,
//     TotalTime,
//     GoalMet,
//     GoalFail,
//     Wager,
//     TimeDuration
// }) => {
//   return (
//     <Grid container spacing={0}>
      
//       <Grid item xs ={10}>
//       <div className="flex justify-center items-center w-full h-full bg-[#E8E9F4]">
//         <Box p={20}>
//         <Card>
//           <CardContent>
//             <Grid container spacing={0}>
//               <Grid item xs={2}>
//                 <Stack spacing={2}>
//                   <img
//                     src={profilePhoto}
//                     className="w-[150px] h-[150px] object-cover object-top"
//                   />
//                   <Stack spacing={1} direction="row">
//                     <PaidOutlinedIcon sx={{ fontSize: 30 }} />
//                     <Stack>
//                       <Typography fontSize={16} fontWeight={400}>
//                         Total waggered
//                       </Typography>
//                       <Typography fontSize={16} fontWeight={600}>
//                         {TotalWagered}
//                       </Typography>
//                     </Stack>
//                   </Stack>
//                   <Stack spacing={1} direction="row">
//                     <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
//                     <Stack>
//                       <Typography fontSize={16} fontWeight={400}>
//                         Total time
//                       </Typography>
//                       <Typography fontSize={16} fontWeight={600}>
//                         {TotalTime}
//                       </Typography>
//                     </Stack>
//                   </Stack>
//                   <Stack spacing={1} direction="row">
//                     <GpsFixedOutlinedIcon sx={{ fontSize: 30 }} />
//                     <Stack>
//                       <Typography fontSize={16} fontWeight={400}>
//                         Goal Met/Failed
//                       </Typography>
//                       <Typography fontSize={16} fontWeight={600}>
//                         {GoalMet}/{GoalFail}
//                       </Typography>
//                     </Stack>
//                   </Stack>
//                   <Box py={2} />
                  
//                 </Stack>
//               </Grid>
//               <Grid item xs={7}>
//                 <Stack spacing={2}>
              

//                   <Stack direction="row" spacing={2} alignItems="flex-start">
//                     <Stack>
//                       <Typography fontSize={20} fontWeight={600}>
//                         {profileName}
//                       </Typography>
//                       <Typography fontSize={14} fontWeight={600}>
//                         {profileLocation}
//                       </Typography>
//                       <Typography fontSize={14} fontWeight={600}>
//                         Age: {profileAge}
//                       </Typography>
//                     </Stack>
//                     <Stack direction="row" alignItems="center" spacing={1}>
//                       <GppGoodOutlinedIcon sx={{ fontSize: 24 }} />
                      
//                     </Stack>
//                   </Stack>
//                   <Typography fontSize={14} fontWeight={400}>
//                     {ProfileDescription}
                    
//                   </Typography>
//                   <Stack direction="row" spacing={2} alignItems="flex-start">
//                     <Stack>
//                       <Typography fontSize={14} fontWeight={600}>
//                         Pal Reviews
//                       </Typography>
                      
//                     </Stack>
//                   </Stack>
//                   <Box sx={{ background: ['#E0F6DC'], padding: '10px', borderRadius: '10px' }} p={2} >
//                     <Typography fontSize={14} fontWeight={400} sx={{ background: ['#E0F6DC'], padding: '10px', borderRadius: '5px' }}>
//                     {ReviewerContent}
                      
//                     </Typography>
//                     <Typography fontSize={14} fontWeight={400} fontStyle="italic" mt={0} textAlign="center" >
//                       - {ReviewerName}, {ReviewerAge}
//                     </Typography>
//                     <Typography fontSize={14} fontWeight={400} fontStyle="italic" mt={0}>
//                       Partner with {ReviewerName} for {Duration} Months
//                     </Typography>
//                   </Box>
                  
                  
//                 </Stack>
                
//               </Grid>
//               <Grid item xs={3}>
//                 <Stack spacing={3} justifyContent="space-between" height="100%">
//                   <Stack spacing={1} direction="column" alignItems="start">
//                     <Stack spacing={1} direction="row" alignItems="center">
//                       <PaidOutlinedIcon sx={{ fontSize: 30 }} />
//                       <Typography fontSize={16} fontWeight={600}>
//                         Wager: {Wager}
//                       </Typography>
//                   </Stack>
//                   <Stack spacing={1} direction="row" alignItems="center">
//                     <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
//                     <Typography fontSize={16} fontWeight={600}>
//                       {TimeDuration} Months
//                     </Typography>
//                   </Stack>
//                 </Stack>
//                 <Button variant="contained">
//                         Accept Match
//                 </Button>
//                 </Stack>
                
//               </Grid>
//             </Grid>
            
              
            
//           </CardContent>
//         </Card>
//       </Box>
//       </div>
//     </Grid>  
//     </Grid>
//   );
// };

// export default MatchesCard;

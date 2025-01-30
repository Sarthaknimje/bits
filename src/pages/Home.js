import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Typography, Grid } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const menuItems = [
  {
    title: 'NFT Market Report',
    description: 'Comprehensive NFT market analytics and insights',
    icon: <ShowChartIcon sx={{ fontSize: 40 }} />,
    path: '/nft-market-report',
    gradient: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)'
  },
  {
    title: 'NFT Portfolio',
    description: 'Track and analyze your NFT portfolio',
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />,
    path: '/nft-portfolio',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)'
  },
  {
    title: 'Whale Identification',
    description: 'Identify and track major NFT market players',
    icon: <WhatshotIcon sx={{ fontSize: 40 }} />,
    path: '/whale-identification',
    gradient: 'linear-gradient(135deg, #7dd3fc 0%, #0284c7 100%)'
  },
  {
    title: 'Whale Movement Alert',
    description: 'Get alerts on significant whale activities',
    icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
    path: '/whale-movement-alerts',
    gradient: 'linear-gradient(135deg, #00f2fe 0%, #0284c7 100%)'
  }
];

const Home = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      p: { xs: 2, sm: 4 }
    }}>
      <Typography variant="h3" sx={{
        textAlign: 'center',
        mb: 6,
        color: '#fff',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 30px rgba(0, 242, 254, 0.3)',
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
      }}>
        NFT Analytics Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ maxWidth: 1200, mx: 'auto' }}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} key={item.path}>
            <Link to={item.path} style={{ textDecoration: 'none' }}>
              <Card sx={{
                p: 3,
                height: '100%',
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0, 242, 254, 0.2)',
                  '& .icon': {
                    transform: 'scale(1.1)',
                    background: item.gradient
                  }
                }
              }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <Box className="icon" sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    mb: 2,
                    transition: 'all 0.3s ease'
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h5" sx={{ color: '#fff', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
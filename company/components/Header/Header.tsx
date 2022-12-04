import { FC, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { getHeaderMenuItems } from '~/utils/common/getHeaderMenuItems'
import Link from 'next/link'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'

export const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElId, setAnchorElId] = useState<null | number>(null)
  const menuItems = getHeaderMenuItems()
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElId(Number(event.currentTarget.getAttribute('data-id')))
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElId(null)
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            花将
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            花将
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => {
              return 'subs' in item ? (
                <div key={item.id}>
                  <MenuItem
                    key={item.id}
                    sx={{ py: 2, color: 'white', display: 'flex' }}
                    onMouseOver={handleOpenNavMenu}
                    data-id={item.id}
                  >
                    <Box sx={{ mr: 1, display: 'flex' }}>{item.icon}</Box>
                    <Typography textAlign="center">{item.title}</Typography>
                    <Box sx={{ ml: 2, display: 'flex' }}>
                      {anchorElId === item.id && Boolean(anchorElNav) ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </Box>
                  </MenuItem>
                  <Menu
                    sx={{ mt: '45px' }}
                    id={`menu-appbar${item}`}
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    keepMounted
                    MenuListProps={{
                      onMouseLeave: handleCloseNavMenu,
                    }}
                    onClose={handleCloseNavMenu}
                    open={anchorElId === item.id && Boolean(anchorElNav)}
                  >
                    {item.subs.map((sub) => (
                      <Link
                        href={sub.to}
                        key={sub.id}
                        passHref
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <MenuItem
                          sx={{
                            display: 'flex',
                          }}
                          onClick={handleCloseNavMenu}
                        >
                          <Box sx={{ mr: 1, display: 'flex' }}>{sub.icon}</Box>
                          <Typography textAlign="center">
                            {sub.title}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </div>
              ) : (
                <Link
                  href={item.to}
                  key={item.id}
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <MenuItem
                    sx={{
                      py: 2,
                      color: 'white',
                      display: 'flex',
                    }}
                  >
                    <Box sx={{ mr: 1, display: 'flex' }}>{item.icon}</Box>
                    <Typography>{item.title}</Typography>
                  </MenuItem>
                </Link>
              )
            })}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

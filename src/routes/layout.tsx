import { NavLink, Outlet } from "react-router-dom";
import { Global, css } from '@emotion/react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import GradeIcon from '@mui/icons-material/Grade';
import { colors } from "../consts";
import { circleIcon, circleIconHover } from '../styles'

const theme = createTheme({
    palette: {
      primary: {
        main: colors.white,
      },
      secondary: {
        main: colors.teal
      },
    },
    components: {
        MuiGrid2: {
            styleOverrides: {
                root: {
                    padding: '8px 8px'
                }
            }
        }
    }
  });

const NAV_LINK_STYLE = css(circleIcon, circleIconHover)

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <div css={{height: '100vh', display: 'flex', flex: '1', position: 'relative', justifyContent: 'center'}}>
                <div css={{padding: '10px 20px', display: 'flex', position: 'fixed', top: 0, right: 0, gap: '15px;'}}>
                    <NavLink
                        to={'/'}
                        css={NAV_LINK_STYLE}
                    >
                        <SearchIcon fontSize="large" />
                    </NavLink>
                    <NavLink
                        to={'/favourites'}
                        css={NAV_LINK_STYLE}
                    >
                        <GradeIcon fontSize="large" />
                    </NavLink>
                </div>
                <Global
                    styles={{
                        'body': {
                            backgroundColor: colors.teal,
                            color: colors.darkGrey,
                            margin: 0,
                            fontFamily: 'Jura, sans-serif',
                        },
                        '#root': {
                            display: 'flex',
                            justifyContent: 'center',
                        }
                    }}
                />
                <Outlet />
            </div>
        </ThemeProvider>
    );
}

export default Layout
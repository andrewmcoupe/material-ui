import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet, { sheetClasses } from '@mui/joy/Sheet';
import Switch, { switchClasses } from '@mui/joy/Switch';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded';
import Flight from '@mui/icons-material/Flight';
import Wifi from '@mui/icons-material/Wifi';
import Bluetooth from '@mui/icons-material/Bluetooth';
import Podcasts from '@mui/icons-material/Podcasts';

export default function ExampleIOSList() {
  return (
    <Sheet variant="soft" sx={{ width: 343, p: 2, borderRadius: 'sm' }}>
      <Typography level="h3" fontSize="xl2" fontWeight="xl" id="ios-example-demo">
        Settings
      </Typography>
      <List
        aria-labelledby="ios-example-demo"
        sx={(theme) => ({
          '& ul': {
            '--List-gap': '0px',
            bgcolor: 'background.surface',
            '& > li:first-child > [role="button"]': {
              borderTopRightRadius: 'var(--List-radius)',
              borderTopLeftRadius: 'var(--List-radius)',
            },
            '& > li:last-child > [role="button"]': {
              borderBottomRightRadius: 'var(--List-radius)',
              borderBottomLeftRadius: 'var(--List-radius)',
            },
          },
          '--List-radius': '8px',
          '--List-gap': '1rem',
          '--List-divider-gap': '0px',
          '--List-item-paddingY': '0.5rem',
          // override global variant tokens
          '--joy-palette-neutral-plainHoverBg': 'rgba(0 0 0 / 0.08)',
          '--joy-palette-neutral-plainActiveBg': 'rgba(0 0 0 / 0.12)',
          [theme.getColorSchemeSelector('light')]: {
            '--joy-palette-divider': 'rgba(0 0 0 / 0.08)',
          },
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-neutral-plainHoverBg': 'rgba(255 255 255 / 0.1)',
            '--joy-palette-neutral-plainActiveBg': 'rgba(255 255 255 / 0.16)',
          },
        })}
      >
        <ListItem nested>
          <List aria-label="Personal info" sx={{ '--List-decorator-width': '72px' }}>
            <ListItem>
              <ListItemDecorator>
                <Avatar size="lg" sx={{ '--Avatar-size': '60px' }}>
                  MB
                </Avatar>
              </ListItemDecorator>
              <div>
                <Typography fontSize="xl">Murphy Bates</Typography>
                <Typography fontSize="xs">
                  Apple ID, iCloud, Media & Purchase
                </Typography>
              </div>
            </ListItem>
            <ListDivider inset="startContent" />
            <ListItem>
              <ListItemButton>
                <ListItemContent>iCloud+ Feature Updates</ListItemContent>
                <KeyboardArrowRight fontSize="xl3" sx={{ color: 'text.tertiary' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem nested>
          <ListItem
            sx={{
              bgcolor: 'background.surface',
              mb: 1,
              borderRadius: 'var(--List-radius)',
            }}
          >
            <ListItemButton
              aria-describedby="apple-tv-description"
              sx={{ borderRadius: 'var(--List-radius)' }}
            >
              Apple TV+ Free Year Available
            </ListItemButton>
          </ListItem>
          <Typography id="apple-tv-description" level="body3" aria-hidden>
            Included with your recent Apple device purchase. Must be accepted within
            90 days of activation.
          </Typography>
        </ListItem>
        <ListItem nested>
          <List
            aria-label="Network"
            sx={{
              [`& .${sheetClasses.root}`]: {
                p: 0.5,
                lineHeight: 0,
                borderRadius: 'sm',
              },
            }}
          >
            <ListItem>
              <ListItemDecorator>
                <Sheet variant="solid" color="warning">
                  <Flight />
                </Sheet>
              </ListItemDecorator>
              <ListItemContent htmlFor="airplane-mode" component="label">
                Airplane Mode
              </ListItemContent>
              <Switch
                id="airplane-mode"
                size="lg"
                color="success"
                sx={(theme) => ({
                  '--Switch-thumb-shadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
                  '--Switch-thumb-size': '27px',
                  '--Switch-track-width': '51px',
                  '--Switch-track-height': '31px',
                  '--Switch-track-background': theme.vars.palette.background.level3,
                  [`& .${switchClasses.thumb}`]: {
                    transition: 'width 0.2s, left 0.2s',
                  },
                  '&:hover': {
                    '--Switch-track-background':
                      theme.vars.palette.background.level3,
                  },
                  '&:active': {
                    '--Switch-thumb-width': '32px',
                  },
                  [`&.${switchClasses.checked}`]: {
                    '--Switch-track-background': 'rgb(48 209 88)',
                    '&:hover': {
                      '--Switch-track-background': 'rgb(48 209 88)',
                    },
                  },
                })}
              />
            </ListItem>
            <ListDivider inset="startContent" />
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <Sheet variant="solid" color="primary">
                    <Wifi />
                  </Sheet>
                </ListItemDecorator>
                <ListItemContent>Wi-Fi</ListItemContent>
                <Typography textColor="text.tertiary">Mars</Typography>
                <KeyboardArrowRight fontSize="xl3" sx={{ color: 'text.tertiary' }} />
              </ListItemButton>
            </ListItem>
            <ListDivider inset="startContent" />
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <Sheet variant="solid" color="primary">
                    <Bluetooth />
                  </Sheet>
                </ListItemDecorator>
                <ListItemContent>Bluetooth</ListItemContent>
                <Typography textColor="text.tertiary">On</Typography>
                <KeyboardArrowRight fontSize="xl3" sx={{ color: 'text.tertiary' }} />
              </ListItemButton>
            </ListItem>
            <ListDivider inset="startContent" />
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <Sheet
                    variant="solid"
                    color="success"
                    sx={{ bgcolor: 'success.500' }}
                  >
                    <Podcasts />
                  </Sheet>
                </ListItemDecorator>
                <ListItemContent>Cellular</ListItemContent>
                <KeyboardArrowRight fontSize="xl3" sx={{ color: 'text.tertiary' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Sheet>
  );
}

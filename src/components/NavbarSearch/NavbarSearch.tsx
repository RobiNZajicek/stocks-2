  import {
    TextInput,
    Code,
    UnstyledButton,
    Badge,
    Text,
    Group,
    ActionIcon,
    Tooltip,
    rem,
  } from '@mantine/core';
  import{
    IconSwitchHorizontal,
    IconLogout,
  } from '@tabler/icons-react';
  
  import { IconBulb, IconUser, IconCheckbox, IconSearch, IconPlus } from '@tabler/icons-react';
  // import { UserButton } from '../UserButton/UserButton';
  import Profilos from '../Profilos';
  import classes from './NavbarSearch.module.css';
  import { NavLink } from 'react-router-dom';
  const links = [
    { icon: IconBulb, label: 'Activity', notifications: 3 },
    { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
    { icon: IconUser, label: 'Contacts' },
  ];
  
  const collections = [
    { emoji: '🏠', label: 'Home',labelos: '/' },
    { emoji: '📈', label: 'Stocks',labelos: 'Stocks' },
    { emoji: '💸', label: 'Profile',labelos: 'Profile' },
    { emoji: '🛠️', label: 'Tools',labelos: 'Tools' },
    { emoji: '✨', label: 'Achievements',labelos: 'Achievements' },
    { emoji: '🛒', label: 'Shop',labelos: 'Shop' },
    { emoji: '📅', label: 'Events',labelos: 'Events' },
    { emoji: '👨‍💼', label: 'Portfolio',labelos: 'Portfolio' },
    { emoji: '📁', label: 'Folder', labelos: 'Folder' },
    { emoji: '📁', label: 'Folder', labelos: 'Folder' },
    { emoji: '📁', label: 'Folder', labelos: 'Folder' },
  

    
  ];
  
  export function NavbarSearch() {
    const mainLinks = links.map((link) => (
      <UnstyledButton key={link.label} className={classes.mainLink}>
        <div className={classes.mainLinkInner}>
          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
          <span>{link.label}</span>
        </div>
        {link.notifications && (
          <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
            {link.notifications}
          </Badge>
        )}
      </UnstyledButton>
    ));
  
    const collectionLinks = collections.map((collection) => (
      <NavLink
        to={collection.labelos}
        
        key={collection.label}
        className={classes.collectionLink}
      >
        <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
        {collection.label}
      </NavLink>
    ));
  
    return (
      <nav className={classes.navbar}>
        <div className={classes.section}>
          <Profilos/>
        </div>
  
        <TextInput
          placeholder="Search"
          size="xs"
          leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
          rightSectionWidth={70}
          rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
          styles={{ section: { pointerEvents: 'none' } }}
          mb="sm"
        />
  
        <div className={classes.section}>
          <div className={classes.mainLinks}>{mainLinks}</div>
        </div>

        <div className={classes.section}>
          <Group className={classes.collectionsHeader} justify="space-between">
            <Text size="xs" fw={500} c="dimmed">
              Collections
            </Text>
            <Tooltip label="Create collection" withArrow position="right">
              <ActionIcon variant="default" size={18}>
                <IconPlus style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          </Group>
          
          <div className={classes.collections}>{collectionLinks}</div>
        </div>
        <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
      
      </nav>
    );
  }
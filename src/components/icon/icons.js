const icons = [
  {
    idx: 0,
    name: 'Start',
    icon: 'home',
    type: 'action',
    action: 'STARTMENU'
  },
  {
    idx: 1,
    name: 'Search',
    icon: 'search',
    type: 'action',
    action: 'SEARCHMENU'
  },
  {
    idx: 2,
    name: 'Widget',
    icon: 'widget',
    type: 'action',
    action: 'WIDGETS'
  },
  {
    idx: 3,
    name: 'Settings',
    icon: 'settings',
    type: 'app',
    action: 'SETTINGS'
  },
  {
    idx: 4,
    name: 'File Explorer',
    icon: 'explorer',
    type: 'app',
    action: 'FILEXP'
  },
  {
    idx: 5,
    name: 'Edge',
    icon: 'edge',
    type: 'app',
    action: 'MSEDGE'
  },
  {
    idx: 6,
    name: 'Store',
    icon: 'store',
    type: 'app',
    action: 'WNSTORE'
  },
  {
    idx: 7,
    name: 'Recycle Bin',
    icon: 'bin0',
    type: 'app',
    action: 'RECYCLE'
  },
  {
    idx: 8,
    name: 'Blue',
    icon: 'win/userDir',
    type: 'short',
    action: 'FOLDER',
    payload: '/'
  }, {
    idx: 9,
    name: 'Alarms',
    icon: 'alarm',
    type: 'app',
    action: 'ALARMAPP'
  },
  {
    idx: 10,
    name: 'Calculator',
    icon: 'calculator',
    type: 'app',
    action: 'CALCUAPP'
  },
  {
    idx: 11,
    name: 'Calender',
    icon: 'calender',
    type: 'app',
    action: 'CALENDER'
  },
  {
    idx: 12,
    name: 'Camera',
    icon: 'camera',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 13,
    name: 'VS Code',
    icon: 'code',
    type: 'app',
    action: 'VSCODE'
  },
  {
    idx: 14,
    name: 'Excel',
    icon: 'excel',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 15,
    name: 'Your Phone',
    icon: 'yphone',
    type: 'app',
    action: 'YOURPHONE'
  },
  {
    idx: 16,
    name: 'Feedback',
    icon: 'feedback',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 17,
    name: 'Get Started',
    icon: 'getstarted',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 18,
    name: 'Groove Music',
    icon: 'groove',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 19,
    name: 'Help',
    icon: 'help',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 20,
    name: 'Yammer',
    icon: 'yammer',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 21,
    name: 'Mail',
    icon: 'mail',
    type: 'app',
    action: 'MSEMAIL'
  },
  {
    idx: 22,
    name: 'Maps',
    icon: 'maps',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 23,
    name: 'Movies',
    icon: 'movies',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 24,
    name: 'Xbox',
    icon: 'xbox',
    type: 'app',
    action: 'XBOXAPP'
  },
  {
    idx: 25,
    name: 'MsOffice',
    icon: 'msoffice',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 26,
    name: 'Narrator',
    icon: 'narrator',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 27,
    name: 'News',
    icon: 'news',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 28,
    name: 'Notepad',
    icon: 'notepad',
    type: 'app',
    action: 'NOTEPAD'
  },
  {
    idx: 29,
    name: 'Sticky Notes',
    icon: 'notes',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 30,
    name: 'OneDrive',
    icon: 'oneDrive',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 31,
    name: 'OneNote',
    icon: 'onenote',
    type: 'app',
    action: 'ONENOTE'
  },
  {
    idx: 32,
    name: 'Outlook',
    icon: 'outlook',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 33,
    name: 'Paint',
    icon: 'paint',
    type: 'app',
    action: 'PAINTAPP'
  },
  {
    idx: 34,
    name: 'People',
    icon: 'people',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 35,
    name: 'Photos',
    icon: 'photos',
    type: 'app',
    action: 'PHOTOSAPP'
  },
  {
    idx: 36,
    name: 'Pinterest',
    icon: 'pinterest',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 37,
    name: 'PowerPoint',
    icon: 'powerpoint',
    type: 'app',
    action: 'POWERPNT'
  },
  {
    idx: 38,
    name: 'Security',
    icon: 'security',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 39,
    name: 'Spotify',
    icon: 'spotify',
    type: 'app',
    action: 'LNKSPOTIFY'
  },
  {
    idx: 40,
    name: 'Share',
    icon: 'share',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 41,
    name: 'Skype',
    icon: 'skype',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 42,
    name: 'Snipping Tool',
    icon: 'snip',
    type: 'app'
  },
  {
    idx: 43,
    name: 'Soltaire',
    icon: 'soltaire',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 44,
    name: 'Twitter',
    icon: 'twitter',
    type: 'app',
    action: 'LNKTWITTER'
  },
  {
    idx: 45,
    name: 'Teams',
    icon: 'teams',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 46,
    name: 'Terminal',
    icon: 'terminal',
    type: 'app',
    action: 'TERMINAL'
  },
  {
    idx: 47,
    name: 'Tips',
    icon: 'tips',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 48,
    name: 'To Do',
    icon: 'todo',
    type: 'app',
    action: 'MSTODO'
  },
  {
    idx: 49,
    name: 'Voice Recorder',
    icon: 'voice',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 50,
    name: 'Weather',
    icon: 'weather',
    type: 'app',
    action: 'ACTION'
  },
  {
    idx: 51,
    name: 'Word',
    icon: 'winWord',
    type: 'app',
    action: 'MSWORD'
  },
  {
    idx: 52,
    name: 'White Board',
    icon: 'board',
    type: 'app',
    action: 'WHITEBOARD'
  },
  {
    idx: 53,
    name: 'Cortana',
    icon: 'cortana',
    type: 'app',
    action: 'WHITEBOARD'
  },
  {
    idx: 54,
    name: 'Github',
    icon: 'github',
    type: 'app',
    action: 'LNKTWITTER'
  }
]

const iconIdx = {
  taskbar: [0,1,2,3,4,5,6],
  desktop: [8,7,4,6,5],
  pinned: [5,51,37,31,21,48,6,35,15,28,33,10,11,44,39,13,46,54],
  recent: [11,21,44,39,13,46]
}

export const taskApps = iconIdx.taskbar.map(idx => icons[idx])

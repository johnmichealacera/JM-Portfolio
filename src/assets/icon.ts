const icons = {
  database: [
    { fill: 'none', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    }
  ],
  dedication: [
    {
      fill: 'none',
      d: 'M12 2C10.5 4 9 6 9 9c0 2 1.5 3.5 3 4s3-1 3-3c0-2.5-1.5-4-3-8z',
    },
  ],
  backend: [
    { fill: 'none', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    }
  ],
  webApp: [
    { fill: '#606c38', d: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    }
  ],
  github: [
    { fill: '#dda15e', strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z',
    }
  ],
  facebook: [
    { fill: '#dda15e', strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z',
    }
  ],
  twitter: [
    { fill: '#dda15e', strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z',
    }
  ],
  linkedIn: [
    { fill: '#dda15e', strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z',
    }
  ],
  person: [
    { fill: '#606c38', strokeLinecap: 'round', strokeLinejoin: 'round', stroke: '#01a2a6', d: 'M9.5,16.5H.5c.423-2.286.353-3.58,1.609-4.118L6.5,10.5v-2S5.555,8.15,5.555,6c-.981,0-.981-2,0-2,0-.288-1.644-2.43.422-2,.491-2,5.331-2,5.822,0a2.63,2.63,0,0,1-.44,2c.951,0,.691,2,.007,2,0,2.15-.866,2.5-.866,2.5v2l1.5.643' },
    { fill: '#606c38', strokeLinecap: 'round', strokeLinejoin: 'round', stroke: '#01a2a6', d: 'M11.500 17.500 A6.000 6.000 0 1 0 23.500 17.500 A6.000 6.000 0 1 0 11.500 17.500 Z' },
    { fill: '#606c38', strokeLinecap: 'round', strokeLinejoin: 'round', stroke: '#01a2a6', d: 'M17.5 14.5L17.5 20.5' },
    { fill: '#606c38', strokeLinecap: 'round', strokeLinejoin: 'round', stroke: '#01a2a6', d: 'M20.5 17.5L14.5 17.5' }
  ],
  instagram: [
    { fill: '#dda15e', d: 'M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z',
    }
  ],
  hamburgerClose: [
    { strokeLineCap: 'round', strokeLineJoin: 'round', strokeWidth: 2, stroke: 'currentColor', fill: 'none' , d: 'M3 12h18M3 6h18M3 18h18',
    }
  ],
  hamburgerOpen: [
    {
    strokeLineCap: 'round', strokeLineJoin: 'round', strokeWidth: 2, stroke: 'currentColor', fill: 'none', d: 'M6 18L18 6M6 6l12 12',
    }
  ],
  contactMe: [
    {
      d: 'M6.5 23L8.5 21 6.5 19', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M1,8.979A1.517,1.517,0,0,0,2.5,10.5h9A1.518,1.518,0,0,0,13,8.979V3a1.5,1.5,0,0,0-1.5-1.5h-9A1.5,1.5,0,0,0,1,3Z', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M1 7.5L13 7.5', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M4.5 12.5L9.5 12.5', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M7 10.5L7 12.5', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M14,11.5a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v11a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1Z', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M2.5,16a5,5,0,0,0,5,5h1', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M18.5 1L16.5 3 18.5 5', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M22.5,8a5,5,0,0,0-5-5h-1', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M14 19.5L22 19.5', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    },
    {
      d: 'M18,21.25a.25.25,0,1,0,.25.25.25.25,0,0,0-.25-.25h0', strokeLineCap: 'round', strokeLineJoin: 'round', stroke: '#000', fill: 'none'
    }
  ],
  personalGrowth: [
    {
      fill: 'none',
      d: 'M3 17h2v-5h2v5h2v-8h2v8h2v-3h2v3h2v-6h2v6h2',
    },
  ],
  learnings: [
    {
      fill: 'none',
      d: 'M4 19.5A2.5 2.5 0 006.5 22H18M4 4v15.5M4 4h16v16H6.5A2.5 2.5 0 014 19.5V4z',
    },
  ],
  programming: [
    {
      fill: 'none',
      d: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
    },
  ],
  teamplayer: [
    {
      fill: 'none',
      d: 'M7 14s-3 1-3 4v2h16v-2c0-3-3-4-3-4M12 14a4 4 0 100-8 4 4 0 000 8z',
    },
  ],
  adaptability: [
    {
      fill: 'none',
      d: 'M17 3v4h-4M7 21v-4h4M3 7l5-5 5 5M21 17l-5 5-5-5',
    },
  ],
  skills: [
    {
      fill: 'none',
      d: 'M12 2l2.09 6.26L20 9l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.64 4 9l5.91-.74L12 2z',
    },
  ],
};

export default (name) => icons[name];

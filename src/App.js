import React from 'react';
import * as s from './App.styles';
import * as Palette from './colors'

// Components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'


const App = () => {
  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'Authetntik Sol',
    shortName: 'AS'
  };
  const menuItems = [
    {name: 'Home', to: '/', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'Teacher', to: '/teacher', icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'Student', to: '/student', icon: '/icons/about.svg', 
      subMenuItems: [
        { name: 'Batch', to: '/batch'},        
        { name: 'Year', to: '/year'},
       
      ] },
    
    {name: 'Services', to: '/services', icon: '/icons/services.svg', subMenuItems: [] },
    {name: 'Contacts', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [] }
  ];

  const fonts = {
    header: 'ZCOOL KuaiLe',
    menu: 'Poppins'
  }

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.swampy}
      />
      <MainView />
    </s.App>
  );
}

export default App;

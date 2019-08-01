import React, { Fragment } from 'react';
import Header from './header.component';
import Scene from './scene.component';
import Footer from './footer.component';

const AppComponent = ({ collection, selected, selPrimitive, addSuccess, delPrimitive }) => {
  return (
    <Fragment>
      <Header onSelected = {selPrimitive}/>
      <Scene selected={selected} onAddSuccess = {addSuccess}/>
      <Footer collection={collection}/>
    </Fragment>
  )
};

export default AppComponent;

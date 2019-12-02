import React, {useState} from 'react';
import {Layout} from 'react-wui-modern';
import Header from './main/Header';
import SliderContent from './main/SliderContent';
import {LayoutContentRoute} from './common/RouteConfig';

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
      <>
        <Header/>
        <Layout>
          <Layout.Split style={{marginBottom: '1rem'}}>
            <Layout.Slider collapse={collapse} extraClassName="demo-slider"
                           style={{flex: '0 0 250px'}}>
              <div className="demo-slider-mask"></div>
              <SliderContent/>
            </Layout.Slider>
            <Layout>
              <LayoutContentRoute collapse={collapse}
                                  setCollapse={setCollapse}/>
            </Layout>
          </Layout.Split>
        </Layout>
      </>

  );
}

export default App;

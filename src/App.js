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
          <Layout.Split>
            <Layout.Slider collapse={collapse}
                           extraClassName="demo-slider"
                           style={{
                             position: 'fixed',
                             flex: '0 0 auto',
                             width: '250px',
                             left: 0,
                             paddingTop: '4rem',
                           }}>
              <div className="demo-slider-mask"></div>
              <SliderContent/>
            </Layout.Slider>
            <Layout style={{marginLeft: '250px', paddingTop: '4rem'}}>
              <LayoutContentRoute collapse={collapse}
                                  setCollapse={setCollapse}/>
            </Layout>
          </Layout.Split>
        </Layout>
      </>

  );
}

export default App;

import React from 'react';
import Sidebar from './Sidebar';
import SidebarLink from './SidebarLink';
import { Icon } from '../Iconography';
import MiniTrigger from './MiniTrigger';
import ProductSwitch2 from './ProductSwitch2';

const bodyStyle = {
  width: '100%',
  height: '100vh',
};

export default {
  title: 'Components/Sidebar Component',
  component: [Sidebar],
};

function DemoLink(props) {
  const { children } = props;
  return <a {...props}>{children}</a>;
}

export const Default = () => {
  const [mini, setMini] = React.useState(false);
  return (
    <div style={bodyStyle}>
      <Sidebar
        mini={mini}
        logo={<div>logo</div>}
        profile={<div>profile</div>}
        links={
          <>
            <SidebarLink
              active
              component={DemoLink}
              href="https://ui.accordium.com"
              icon={<Icon src="home" verticalAlign="middle" style={{ fontSize: '19px' }} />}
              iconOnly={mini}
              showPopover={mini}
            >
              Dashboard
            </SidebarLink>
            <SidebarLink
              component={DemoLink}
              href="https://ui.accordium.com"
              icon={<Icon src="archive" verticalAlign="middle" style={{ fontSize: '19px' }} />}
              iconOnly={mini}
              showPopover={mini}
            >
              Archive
            </SidebarLink>
          </>
        }
        footer={
          <>
            <SidebarLink
              component={DemoLink}
              href="https://accordium.typeform.com/to/D1yFXx"
              icon={<Icon src="feedback" verticalAlign="middle" style={{ fontSize: '19px' }} />}
              iconOnly={mini}
              showPopover={mini}
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback
            </SidebarLink>
            <ProductSwitch2 title="Switch Product" mini={mini}>
              <SidebarLink
                component={DemoLink}
                href="/dashboard"
                icon={<Icon src="product_contract" verticalAlign="middle" style={{ fontSize: '19px' }} />}
                iconOnly={mini}
                showPopover={mini}
                slim
                onDark
              >
                eSignature
              </SidebarLink>
              <SidebarLink
                active
                component={DemoLink}
                href="/eg/dashboard"
                icon={<Icon src="product_engage" verticalAlign="middle" style={{ fontSize: '19px' }} />}
                iconOnly={mini}
                showPopover={mini}
                slim
                onDark
              >
                Engage
              </SidebarLink>
            </ProductSwitch2>
          </>
        }
        miniTrigger={<MiniTrigger mini={mini} toggle={() => setMini(prevState => !prevState)} />}
      />
    </div>
  );
};

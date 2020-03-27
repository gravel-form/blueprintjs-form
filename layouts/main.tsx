import * as React from 'react';
import Router from 'next/router';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';

import { Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';

const backendUrl = process.env.BACKEND_URL || '';

const Page: React.FC = ({ children }) => {
  const nav = (url: string) => () => {
    Router.push(url, `${backendUrl}${url}`, { shallow: true });
  };

  return (
    <>
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>Gravel Form</NavbarHeading>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} text="Basic" onClick={nav('/basic')} />
          <Button className={Classes.MINIMAL} text="Kitchen Sink" onClick={nav('/kitchensink')} />
          <Button className={Classes.MINIMAL} text="Simple Middlewares" onClick={nav('/simple-middlewares')} />
          <Button className={Classes.MINIMAL} text="Grid" onClick={nav('/grid')} />
          <Button className={Classes.MINIMAL} text="Single Field Async" onClick={nav('/single-async-validate')} />
          <Button className={Classes.MINIMAL} text="Dynamic Array" onClick={nav('/dynamic-array')} />
          <Button className={Classes.MINIMAL} text="Calculated Field" onClick={nav('/calculated-field')} />
        </NavbarGroup>
      </Navbar>
      {children}
    </>
  );
};

export default Page;

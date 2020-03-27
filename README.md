# @gravel-form/blueprintjs

A flexible middlewares driven json schema form. The only limitation is your imagination.

## Quick start

```bash
npm install @gravel-form/blueprintjs
npm install @blueprintjs/datetime # optional
```

``` jsx
import React from 'React';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import { Form, presetMws } from "@gravel-form/blueprintjs";

const MyFirstForm = () => {
  const schema = {
    type: 'object',
    properties: {
      username: { type: 'string' },
      password: { type: 'string' },
    },
  };

  const extraProps = {
    properties: {
      password: { component: 'Password' },
    },
  };

  const [data, setData] = React.useState();

  return (
    <Form
      layout="vertical"
      middlewares={presetMws}
      schema={schema}
      extraProps={extraProps}
      data={data}
      onChange={setData}
      onSubmit={(data) => {
        alert(JSON.stringify(data, null, 2));
      }}
    />
  );
};
```

## Playground
More examples can be found on the [playground](https://gravel-form.github.io/blueprintjs-form/basic).

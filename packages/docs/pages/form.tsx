import {
  Box,
  Button,
  Checkbox,
  Counter,
  Datepicker,
  Fieldset,
  Form,
  FormControlLabel,
  FormGroup,
  H1,
  Input,
  Link,
  MultiSelect,
  Panel,
  Radio,
  Select,
  Switch,
  Text,
  Textarea,
  Timepicker,
} from '@bigcommerce/big-design';
import React, { Fragment, useState } from 'react';

import { Code, CodePreview, ContentRoutingTabs, GuidelinesTable, List } from '../components';
import {
  FormDescriptionPropTable,
  FormErrorPropTable,
  FormFieldsetPropTable,
  FormGroupPropTable,
  FormLabelPropTable,
  FormPropTable,
  MarginPropTable,
} from '../PropTables';

const FormPage = () => {
  return (
    <>
      <H1>Form</H1>

      <Panel header="Overview" headerId="overview">
        <Text>
          The provided <Code primary>Form</Code> component is a wrapper around an{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
            external
            target="_blank"
            rel="nofollow noreferrer"
          >
            HTML {'<form />'}
          </Link>{' '}
          element. It provides form width styling and accessibility features when using form controls within.
        </Text>
        <Text bold>When to use:</Text>
        <List>
          <List.Item>Any usage of a form control.</List.Item>
        </List>
      </Panel>

      <Panel header="Implementation" headerId="implementation">
        <ContentRoutingTabs
          id="implementation"
          routes={[
            {
              id: 'basic',
              title: 'Basic',
              render: () => (
                <>
                  <Text>
                    Form fields are essential to any website or web application. Unique <Code>id</Code>'s' will be
                    auto-generated for the form fields and labels <Code>for</Code> attribute, unless manually specified.
                  </Text>
                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Form>
                      <FormGroup>
                        <Input
                          label="Email"
                          type="email"
                          description="Please provide a valid email address."
                          placeholder="Email address"
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input label="Password" type="password" placeholder="Password" required />
                      </FormGroup>
                      <Box marginTop="xxLarge">
                        <Button type="submit">Sign in</Button>
                      </Box>
                    </Form>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
            {
              id: 'input-types',
              title: 'Input types',
              render: () => (
                // React doesn't see this fragment as unique, so we use a key to force uniqueness.
                <Fragment key="input-types">
                  <Text>
                    BigDesign comes with many input types: <Code>Input</Code>, <Code>Checkbox</Code>, <Code>Radio</Code>
                    , <Code>Select</Code>, <Code>MultiSelect</Code>, <Code>Textarea</Code>, <Code>Counter</Code>,{' '}
                    <Code>Switch</Code>, <Code>Datepicker</Code>, and <Code>Timepicker</Code>.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Form>
                      <FormGroup>
                        <Input label="Example Input" placeholder="Example" />
                      </FormGroup>
                      <FormGroup>
                        <Checkbox checked={true} onChange={() => null} label="Example Checkbox" />
                      </FormGroup>
                      <FormGroup>
                        <Radio checked={true} onChange={() => null} label="Example Radio" />
                      </FormGroup>
                      <FormGroup>
                        <Select
                          label="Example Select"
                          onOptionChange={() => null}
                          options={[
                            { value: 1, content: 'Option 1' },
                            { value: 2, content: 'Option 2' },
                            { value: 3, content: 'Option 3' },
                            { value: 4, content: 'Option 4' },
                          ]}
                          placeholder="Example"
                        />
                      </FormGroup>
                      <FormGroup>
                        <MultiSelect
                          label="Example MultiSelect"
                          onOptionsChange={() => null}
                          options={[
                            { value: 1, content: 'Option 1' },
                            { value: 2, content: 'Option 2' },
                            { value: 3, content: 'Option 3' },
                            { value: 4, content: 'Option 4' },
                          ]}
                          placeholder="Example"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Textarea label="Example Textarea" placeholder="Example" />
                      </FormGroup>
                      <FormGroup>
                        <Counter label="Example Counter" value={1} onCountChange={() => null} />
                      </FormGroup>
                      <FormGroup>
                        <div>
                          <FormControlLabel renderOptional={true}>Example Switch</FormControlLabel>
                          <Switch checked={true} onChange={() => null} />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Datepicker
                          label="Example Datepicker"
                          value={new Date().toISOString()}
                          onDateChange={() => null}
                          dateFormat="MMMM d, yyyy"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Timepicker label="Example Timepicker" value={'13:00'} onTimeChange={() => null} />
                      </FormGroup>
                    </Form>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </Fragment>
              ),
            },
            {
              id: 'layout',
              title: 'Layout',
              render: () => (
                <>
                  <Text>
                    You can up to 3 <Code>Input</Code> components in row to add more dimension to a{' '}
                    <Code>FormGroup</Code>. <Code>Radio</Code> and <Code>Checkbox</Code> components will never display
                    inline inside a <Code>FormGroup</Code>.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Form>
                      <FormGroup>
                        <Input label="Company" placeholder="BigCommerce" required />
                      </FormGroup>
                      <FormGroup>
                        <Input label="First Name" placeholder="John" required />
                        <Input label="Last Name" placeholder="Doe" required />
                      </FormGroup>
                      <FormGroup>
                        <Input label="City" placeholder="Austin" required />
                        <Input label="State" placeholder="Texas" required />
                        <Input label="Postal Code" placeholder="78726" required />
                      </FormGroup>
                      <Fieldset legend="Shipping Method">
                        <FormGroup>
                          <Radio label="Free – Three Day Shipping" checked onChange={() => null} />
                          <Radio label="$4.99 – Two Day Shipping" />
                          <Radio label="$9.99 – One Day Shipping" />
                        </FormGroup>
                      </Fieldset>
                    </Form>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
            {
              id: 'validation',
              title: 'Validation',
              render: () => (
                <>
                  <Text>
                    All form controls are tied to <Code primary>onChange</Code> or equivalent event handlers. Validation
                    messages can be passed through the <Code>error</Code> prop. All input errors in an{' '}
                    <Code>FormGroup</Code> will appear at the bottom of the group component component.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    {function Example() {
                      const ERROR_MSG = 'Must be less than or equal to 3 characters long.';

                      const [value, setValue] = useState('BigCommerce');
                      const [error, setError] = useState(ERROR_MSG);

                      const handleSubmit = (event) => {
                        const form = event.currentTarget;

                        if (form.checkValidity() === false) {
                          event.preventDefault();
                          event.stopPropagation();
                        }
                      };

                      const handleChange = (event) => {
                        const { target } = event;
                        const regex = RegExp(target.pattern, 'g');

                        regex.test(target.value) ? setError('') : setError(ERROR_MSG);

                        setValue(target.value);
                      };

                      return (
                        <Form onSubmit={handleSubmit}>
                          <FormGroup>
                            <Input
                              label="Example"
                              description="Remove characters to preview validation."
                              value={value}
                              error={error}
                              onChange={handleChange}
                              pattern="^.{1,3}$"
                              required
                            />
                          </FormGroup>
                          <FormGroup>
                            <Input label="City" error="You must enter a valid City." placeholder="Austin" required />
                            <Input label="State" placeholder="Texas" required />
                            <Input
                              label="Postal Code"
                              error="You must enter a valid Postal Code."
                              placeholder="78726"
                              required
                            />
                          </FormGroup>
                        </Form>
                      );
                    }}
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
          ]}
        />
      </Panel>

      <Panel header="Props" headerId="props">
        <ContentRoutingTabs
          id="props"
          routes={[
            {
              id: 'form',
              title: 'Form',
              render: () => <FormPropTable renderPanel={false} inheritedProps={<MarginPropTable collapsible />} />,
            },
            {
              id: 'form-group',
              title: 'FormGroup',
              render: () => <FormGroupPropTable renderPanel={false} />,
            },
            {
              id: 'form-control-error',
              title: 'FormControlError',
              render: () => <FormErrorPropTable renderPanel={false} />,
            },
            {
              id: 'form-control-label',
              title: 'FormControlLabel',
              render: () => <FormLabelPropTable renderPanel={false} />,
            },
            {
              id: 'form-control-description',
              title: 'FormControlDescription',
              render: () => <FormDescriptionPropTable renderPanel={false} />,
            },
            {
              id: 'form-fieldset',
              title: 'Fieldset',
              render: () => <FormFieldsetPropTable renderPanel={false} />,
            },
          ]}
        />
      </Panel>

      <Panel header="Do's and Don'ts" headerId="guidelines">
        <GuidelinesTable
          recommended={[
            <>
              Use max-width form for most scenarios. <Code primary>fullWidth</Code> prop should be used non-traditional
              forms.
            </>,
            <>
              Use <Code>type="submit"</Code> on the button you want as your submit button (HTML defaults the first
              button as the submit action)
            </>,
            'Validate form fields before the user submits the form.',
          ]}
          discouraged={['Use forms for immediate actions (i.e. toggling a setting)']}
        />
      </Panel>
    </>
  );
};

export default FormPage;

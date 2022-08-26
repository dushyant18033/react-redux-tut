import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, IconButton, Button } from '@fluentui/react';
import './App.css';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { connect, ConnectedProps } from 'react-redux';
import { decrement, increment, login, logout, reset } from './actions';
initializeIcons();

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

interface RootState {
  counter : 0,
  logged : false,
};

const mapStateToProps = (state:RootState) => {
  return {
     counter: state.counter,
     logged: state.logged
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  login,
  logout
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>;

const App: React.FunctionComponent<HeaderProps> = ({counter, logged, increment, reset, decrement, login, logout}) => {
  
  // const counter = useSelector((state:RootState) => state.counter);
  // const dispatch = useDispatch();
  const PlusButton = () => <IconButton iconProps={{ iconName: 'CircleAdditionSolid' }} title="Add" ariaLabel="Add" onClick={() => increment()}/>;
  const ResetButton = () => <IconButton iconProps={{ iconName: 'RevToggleKey' }} title="Reset" ariaLabel="Reset" onClick={()=>reset()}/>;
  const MinusButton = () => <IconButton iconProps={{ iconName: 'SkypeCircleMinus' }} title="Sub" ariaLabel="Subtract" onClick={()=>decrement()}/>;
  
  console.log(logged);

  return (
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
      
      {!logged && <Button style={{colorScheme: 'light'}} onClick={() => login()}>LOGIN</Button>}
      {logged &&
        (<Stack horizontalAlign="center" verticalAlign="center" styles={stackStyles} tokens={stackTokens}>
          <Text variant="xxLarge" styles={boldStyle}>
            Welcome
          </Text>

          <Button style={{colorScheme: 'light'}} onClick={() => logout()}>LOGOUT</Button>

          <Text variant="large" styles={boldStyle}>
            Counter: {counter}
          </Text>

          <Stack horizontal tokens={stackTokens} horizontalAlign="center">
            <PlusButton /> <ResetButton /> <MinusButton />
          </Stack>
        </Stack>
      )}

      {/* <Text variant="large">For a guide on how to customize this project, check out the Fluent UI documentation.</Text>
      <Text variant="large" styles={boldStyle}>
        Essential links
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fluentui#/get-started/web">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
        <Link href="https://github.com/microsoft/fluentui/">Github</Link>
        <Link href="https://twitter.com/fluentui">Twitter</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design system
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</Link>
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web">Styles</Link>
        <Link href="https://aka.ms/themedesigner">Theme designer</Link>
      </Stack> */}
    </Stack>
  );
};

export default connector(App);
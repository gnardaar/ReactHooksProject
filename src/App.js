import NameStateComponent from "./StateComponents/NameStateComponent";
import UseReducerHook from "./UseReducerHook";
import UseEffectHook from "./UseEffectHook";
import UseRefHook from "./UseRefHook";
import UseLayoutEffect from "./UseLayoutEffect";
import StateCounterComponent from "./StateComponents/StateCounterComponent";
import ImperitaveHandle from "./imperitiveComponents/imperitaveHandle";
import ContextTutorial from './contextComponents/ContextTutorial'
import UseMemoHook from "./UseMemoHook";
import UseCallbackHook from "./useCallbackComponents/UseCallbackHook";


const App = () => {
  return (
    <div >
      <StateCounterComponent />
      <br />
      <NameStateComponent />
      <br />
      <UseReducerHook />
      <br />
      <UseEffectHook />
      <br />
      <UseRefHook />
      <br />
      <UseLayoutEffect />
      <br />
      <ImperitaveHandle/>
      <br/>
      <ContextTutorial/>
      <br/>
      <UseMemoHook/>
      <br/>
      <UseCallbackHook/>
    </div>
  );
};

export default App;


import './App.css';
import Sidebar from "./componets/sidebar/Sidebar";
import Feed from "./componets/feed/Feed";
import Widgets from "./componets/widget/Widgets";



function App() {
  return (
    <div className="app">
   
     {/* sidebar */}
     <Sidebar/>
     
     {/* feed */}
      <Feed/>
     {/* widgets */}
     <Widgets/>

    </div>
  );
}

export default App;
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import OrderViewPage from './components/OrderViewPage'
import Home from './components/Home'

const App =()=>(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orderPage" component={OrderViewPage} />
    </Switch>
  </BrowserRouter>
)

export default App
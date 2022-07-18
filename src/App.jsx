import 'bootstrap/dist/css/bootstrap.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import {Example1} from './pages/Example1'
import {Example2} from './pages/Example2'

function App() {
  return (
    <div>
      <h4>Pagination</h4>
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="React Only">
          <Example1 />
        </Tab>
        <Tab eventKey="second" title="React Query">
          <Example2/>
        </Tab>
        <Tab eventKey="third" title="Reference">
          <span>
            <a href="https://react-query.tanstack.com/guides/paginated-queries">React Query: Paginated Queries</a>
          </span>
        </Tab>
      </Tabs>
    </div>
  )
}

export default App

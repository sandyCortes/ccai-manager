import React from 'react';
// import { InputLabel } from '../components/ui/Inputs/InputLabel'
import { TabsComponent } from './../components/commond/Tabs'
// import { CardComponent } from './../components/ui/Cards'
// import { HeaderComponent } from './../components/ui/Header/HeaderComponent';


const Login = () => {
  return (
    <div>
      <div style={{ width: '50%', margin: 'auto', marginTop: '20px' }}>
        <TabsComponent />
      </div>
      <div class="field">
        <p class="control has-icons-right">
          <input class="input" type="email" placeholder="Email" />
          <span class="icon is-small is-right">
            <i class="fa-solid fa-barcode"></i>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
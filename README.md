# Perfect Match Website

[Working Application - Deployed](https://perfect-match-nanny-agency.netlify.app/)

#### SRC Folder (boilerplate)

- index.js

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

// styles (typically global)
import './index.css'

// convention to name it App and setup in a separate file
import App from './App'
// import report web vitals
import reportWebVitals from './reportWebVitals'

// StrictMode

// StrictMode is a tool for highlighting potential problems in an application.Activates additional checks and warnings for its descendants.Runs only in Development, does not impact the production build. RENDERS TWICE !!! Possible to remove.

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```

- remove in src

  - setupTests.js
  - reportWebVitals.js
  - App.test.js

- be careful with multiple css files


#### Warnings "Gotcha"

- Netlify treats warnings as errors

package.json

```json
"scripts": {
    "start": "react-scripts start",
    "build": "CI= react-scripts build",
    "local-build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

#### Credits

[Photo by Kampus Production](https://www.pexels.com/photo/a-woman-doing-babysitter-7414391/)

[Photo by Kampus Production](https://www.pexels.com/photo/nanny-and-kids-sitting-on-green-grass-8954794/)

[Photo by Maria Orlova](https://www.pexels.com/photo/happy-mother-with-son-on-arms-in-park-4947596/)

[Photo by cottonbro studio](https://www.pexels.com/photo/babysitter-with-boy-6986435/)

[Photo by Ron Lach](https://www.pexels.com/photo/boy-sitting-on-a-woman-s-lap-9478793/)

[Photo by Oleksandr Pidvalnyi](https://www.pexels.com/photo/blue-jeans-3036405/)

[Photo by Keira Burton](https://www.pexels.com/photo/happy-mother-learning-black-baby-walking-6624243/)

[Photo by Vlada Karpovich](https://www.pexels.com/photo/a-little-girl-hugging-her-parents-4609046/)

[Photo by Luana Freitas](https://www.pexels.com/photo/portrait-of-a-smiling-boy-15466135/)

[Photo by Mikhail Nilov](https://www.pexels.com/photo/girl-lying-on-top-of-an-elderly-woman-8307442/)

[Photo by Anna Shvets](https://www.pexels.com/photo/elderly-woman-sitting-on-sofa-with-children-11378068/)

[Looka (logo generator)](https://looka.com/dashboard)

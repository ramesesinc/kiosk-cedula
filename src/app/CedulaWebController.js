import React, { useState, useEffect } from 'react'
import { Page, Panel } from 'rsi-react-web-components'
import HomeScreen from './home'
import IndividualScreen from './individual'
import CorporateScreen from './corporate'

const CedulaWebController = (props) => {
  const [page, setPage] = useState('home')

  const onComplete = (args) => {
    props.history.goBack()
  }

  const onCancel = (type) => {
    if (type) {
      setPage(type)
    } else {
      props.history.goBack()
    }
  }

  const onSelectType = (type) => {
    setPage(type)
  }

  const commonProps = { onComplete, onCancel }

  return (
    <Page>
      <Panel visibleWhen={page === 'home'}>
        <HomeScreen {...props} {...commonProps} onSelectType={onSelectType} />
      </Panel>

      <Panel visibleWhen={page === 'individual'}>
        <IndividualScreen {...props} {...commonProps} />
      </Panel>

      <Panel visibleWhen={page === 'corporate'}>
        <CorporateScreen {...props} {...commonProps} />
      </Panel>
    </Page>
  )
}

export default CedulaWebController

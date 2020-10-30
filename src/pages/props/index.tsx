import React, { useMemo, useState } from 'react'
import NameContainer from '../../components/NameContainer'
import Child from './components/Child'
import Parent from './components/Parent'

const PropsPage = () => {
  // 用于记录parent组件传递的计数
  const [parentCount, setParentCount] = useState<number>()

  return useMemo(() => {
    return (
      <div>
        <h3 className="header">子父组件通信</h3>
        <NameContainer name="页面">
          <p>Parent组件传递的计数：{parentCount}</p>
          <div className="mt10">
            <Parent onQueryCount={setParentCount} />
          </div>
          <div className="mt10">
            <Child count={parentCount} onQueryCount={setParentCount} />
          </div>
        </NameContainer>
      </div>
    )
  }, [parentCount])
}

export default PropsPage

import React, { FC, useMemo, useState } from 'react'
import NameContainer from '../../../components/NameContainer'
import Child from './Child'

interface Props {
  onQueryCount(count: number): void
}

const Parent: FC<Props> = ({ onQueryCount }) => {
  // 当前组件的计数
  const [count, setCount] = useState(10)

  return useMemo(() => {
    return (
      <NameContainer name="Parent组件">
        <div className="mt10">
          <p>
            <button onClick={() => setCount(count + 1)}>当前组件计数 +1</button>
          </p>
          <p>
            <button onClick={() => onQueryCount(count)}>计数传递给父组件</button>
          </p>
        </div>
        <div className="mt10">
          <p>计数: {count}</p>
        </div>
        <Child count={count} />
      </NameContainer>
    )
  }, [count, onQueryCount])
}

export default Parent

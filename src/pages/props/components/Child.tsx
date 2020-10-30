import React, { useCallback, useEffect, useMemo, useState } from 'react'
import NameContainer from '../../../components/NameContainer'

interface Props {
  count?: number
  onQueryCount?(count: number): void
}

const Child = (props: Props) => {
  // 当前组件的计数
  const [count, setCount] = useState(0)
  // 用于初始化父组件传递的计数
  const [initCount] = useState(props.count)
  // 用于承接父组件传递的计数
  const [asyncMiddleCount, setAsyncMiddleCount] = useState(0)

  useEffect(() => {
    props.count !== undefined && setAsyncMiddleCount(props.count)
  }, [props.count])

  const handleClick = useCallback(() => {
    const asyncCount = asyncMiddleCount + 1
    setAsyncMiddleCount(asyncCount)
    props.onQueryCount && props.onQueryCount(asyncCount)
  }, [asyncMiddleCount, props])

  return useMemo(() => {
    return (
      <NameContainer name="Child组件">
        <div className="mt10">
          <p>
            <button onClick={() => setCount(count + 1)}>当前组件计数 +1</button>
          </p>
          {props.onQueryCount && (
            <p>
              <button onClick={handleClick}>实时父组件计数 +1</button>
            </p>
          )}
        </div>
        <div className="mt10">
          <p>当前组件计数: {count}</p>
          <p>初始化承接父组件计数: {initCount}</p>
          {props.onQueryCount && <p>实时承接父组件计数: {asyncMiddleCount}</p>}
        </div>
      </NameContainer>
    )
  }, [asyncMiddleCount, count, handleClick, initCount, props.onQueryCount])
}

export default Child

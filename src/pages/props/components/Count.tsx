import React, { useEffect, useMemo, useState } from 'react'

interface Props {
  count: number
}

const Count = (props: Props) => {
  const [nullRelyCount, setNullRelyCount] = useState(0)
  const [count, setCount] = useState(() => props.count)

  useEffect(() => {
    setCount(props.count)
  }, [props.count])

  useEffect(() => {
    console.log('空useEffect依赖，执行次数')
  }, [])

  return useMemo(() => {
    return (
      <div>
        <p>Count组件创建中介state承接计数: {count}</p>
        <div className="mt10">
          <button onClick={() => setCount(count + 1)}>Count组件点击增加计数 +1</button>
        </div>
      </div>
    )
  }, [count])
}

export default Count

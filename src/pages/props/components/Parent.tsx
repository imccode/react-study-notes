import React, { FC, useMemo, useState } from 'react'

interface Props {
  onQueryCount(count: number): void
}

const Parent: FC<Props> = ({ onQueryCount }) => {
  // 当前组件的计数
  const [count, setCount] = useState(0)

  return useMemo(() => {
    return (
      <div className="module1">
        <div className="text1">Parent组件：</div>
        <div className="mt10">
          <p>
            <button onClick={() => setCount(count + 1)}>计数 +1</button>
          </p>
          <p>
            <button onClick={() => onQueryCount(count)}>计数传递给父组件</button>
          </p>
        </div>
        <div className="mt10">
          <p>计数: {count}</p>
        </div>
      </div>
    )
  }, [count, onQueryCount])
}

export default Parent

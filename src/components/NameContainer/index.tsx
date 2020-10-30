import React, { ReactNode, useMemo } from 'react'
import styles from './index.module.scss'

interface Props {
  name: string
  children: ReactNode
}

const NameContainer = (props: Props) => {
  return useMemo(() => {
    return (
      <div className={styles.nameContaienr}>
        <div className={styles.title}>{props.name}</div>
        <div className={styles.content}>{props.children}</div>
      </div>
    )
  }, [props.children, props.name])
}

export default NameContainer

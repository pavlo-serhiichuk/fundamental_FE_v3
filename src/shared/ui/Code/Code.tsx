import {memo, useCallback} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Button} from '@/shared/ui/Button/Button'
import CopyIcon from '@/shared/assets/icons/copy.svg'
import * as s from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo((props: CodeProps) => {
  const {className, text} = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={cls(s.Code, {}, [className])}>
      <Button theme="clear" onClick={onCopy} className={s.copyBtn}><CopyIcon /></Button>
      <code>
        {text}
      </code>
    </pre>
  )
})

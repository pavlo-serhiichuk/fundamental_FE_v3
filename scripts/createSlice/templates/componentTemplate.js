const interfaceConst = 'interface'

module.exports = (componentName) => `import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './${componentName}.module.scss'

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={cls(s.${componentName}, {}, [className])}>
           
        </div>
    )
})`

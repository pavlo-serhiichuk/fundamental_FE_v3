import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { HStack } from '@/shared/ui/stationary/Stack'
import { cls } from '@/shared/lib/cls/cls'
import { Icon } from '@/shared/ui/V2/Icon'
import Logo from '@/shared/assets/icons/_cube.svg'
import { Text } from '../Text'
import { AppLink } from '@/shared/ui/V2/AppLink'
import { getRouteMain } from '@/shared/const/routers'

interface AppLogoProps {
  className?: string
  withTitle?: boolean
  testId?: string
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, withTitle = false, testId } = props
  const { t } = useTranslation()
  return (
    <AppLink
      to={getRouteMain()}
      className={cls('', {}, [className])}
      data-testid={testId || 'AppLogo'}
    >
      <HStack gap="10">
        <Icon Svg={Logo} width={25} height={25} />
        {withTitle && (
          <Text
            title="Fundamental FE"
            size="text_size_s"
            testId={`${testId || 'AppLogo'}.Title`}
          />
        )}
      </HStack>
    </AppLink>
  )
})

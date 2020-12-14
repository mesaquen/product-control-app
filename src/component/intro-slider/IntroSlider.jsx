import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'
import { Button } from 'react-native-paper'
import IconMessage from '../icon-message/IconMessage'
import AppIntroSlider from 'react-native-app-intro-slider'

const SLIDES = [
  {
    key: 'k1',
    title: 'Product control app',
    text: 'Bem vindo ao app de controle de produto'
  },
  {
    key: 'k2',
    icon: 'view-list',
    title: 'Produtos disponíveis',
    text: 'Use esse menu para vizualizar os produtos ativos'
  },
  {
    key: 'k3',
    icon: 'tune',
    title: 'Gerenciar catálogo',
    text: 'Aqui você pode adicionar, editar ou remover produtos'
  },
  {
    key: 'k4',
    icon: 'account',
    title: 'Conta',
    text: 'Use esse menu para acessar sua conta'
  }
]

const IntroSlider = ({ onDone, onSkip, ...props }) => {
  const renderSliderItem = ({ item }) => (
    <SafeAreaView style={{ flex: 1 }}>
      <IconMessage icon={item.icon} title={item.title} subtitle={item.text} />
    </SafeAreaView>
  )

  const renderSkipButton = props => <Button {...props}>Pular</Button>
  const renderNextButton = props => <Button {...props}>Próximo</Button>
  const renderDoneButton = props => <Button {...props}>Começar</Button>

  return (
    <AppIntroSlider
      {...props}
      data={SLIDES}
      onDone={onDone}
      onSkip={onSkip}
      renderItem={renderSliderItem}
      renderSkipButton={renderSkipButton}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      showSkipButton
    />
  )
}

IntroSlider.propTypes = {
  onDone: PropTypes.func,
  onSkip: PropTypes.func
}

export default IntroSlider
import {Component} from 'react'

import {
  AppContainer,
  Heading,
  ButtonsList,
  ListItem,
  LanguageBtn,
  LanguageImg,
} from './StyledComponents'

class MultilingualGreetings extends Component {
  state = {languagesList: [], activeLanguageId: ''}

  componentDidMount() {
    const {languages} = this.props
    this.setState({languagesList: languages, activeLanguageId: languages[0].id})
  }

  onClickBtn = id => {
    this.setState({activeLanguageId: id})
  }

  renderLanguageImage = id => {
    const {languagesList} = this.state
    const activeLanguage = languagesList.find(eachItem => eachItem.id === id)
    console.log(activeLanguage)

    if (activeLanguage !== undefined) {
      return (
        <LanguageImg
          src={activeLanguage.imageUrl}
          alt={activeLanguage.imageAltText}
        />
      )
    }
    return null
  }

  render() {
    const {languagesList, activeLanguageId} = this.state

    return (
      <AppContainer>
        <Heading>Multilingual Greetings</Heading>
        <ButtonsList>
          {languagesList.map(eachItem => {
            const {id, buttonText} = eachItem
            const onClickButton = () => {
              this.onClickBtn(id)
            }
            return (
              <ListItem key={id}>
                <LanguageBtn
                  onClick={onClickButton}
                  active={(id === activeLanguageId).toString()}
                >
                  {buttonText}
                </LanguageBtn>
              </ListItem>
            )
          })}
        </ButtonsList>
        {this.renderLanguageImage(activeLanguageId)}
      </AppContainer>
    )
  }
}

export default MultilingualGreetings

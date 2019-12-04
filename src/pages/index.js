import React, { Component } from "react"
import styled, { createGlobalStyle } from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Section from "../components/section"
import Button from "../components/button"
import FirstHeaderText from "../components/firstHeaderText"
import PhotosWrapper from "../components/photosWrapper"
import MaltaPhoto from "../components/maltaPhoto"
import PlayerWrapper from "../components/playerWrapper"
import SecondText from "../components/secondText"
import Sticker from "../components/sticker"
import ThirdText from "../components/thirdText"
import RocketPig from "../components/rocketPig"
import FourthText from "../components/fourthText"
import FifthText from "../components/fifthText"
import SixthText from "../components/sixthText"

import backgroundImage_1 from "../assets/background-1.png"
import backgroundImage_2 from "../assets/background-2.png"
import backgroundImage_3 from "../assets/background-3.png"
import backgroundImage_4 from "../assets/background-4.png"
import backgroundImage_5 from "../assets/background-5.png"
import backgroundImage_6 from "../assets/background-6.png"
import backgroundImage_7 from "../assets/background-7.png"
import malta_photo_1 from "../assets/malta-photo-1.png"
import malta_photo_2 from "../assets/malta-photo-2.png"
import malta_photo_3 from "../assets/malta-photo-3.png"
import malta_photo_4 from "../assets/malta-photo-4.png"
import malta_photo_5 from "../assets/malta-photo-5.png"
import malta_photo_6 from "../assets/malta-photo-6.png"
import ok_sticker from "../assets/stickers/ok-sticker.png"
import wow_sticker from "../assets/stickers/wow-sticker.png"
import zigzag_sticker from "../assets/stickers/zigzag-sticker.png"
import loud_sticker from "../assets/stickers/loud-sticker.png"
import palm_sticker from "../assets/stickers/palm-sticker.png"
import umbrela_sticker from "../assets/stickers/umbrela-sticker.png"
import glasses_image from "../assets/glasses.png"
import fontRegular from "../font/bebas-font/BebasNeueRegular.otf"
import fontLight from "../font/bebas-font/BebasNeueLight.otf"
import fontBold from "../font/bebas-font/BebasNeueBold.otf"

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "Bebas Neue Regular";
    src: url(${fontRegular});
  }

  @font-face {
    font-family: "Bebas Neue Light";
    src: url(${fontLight});
  }

  @font-face {
    font-family: "Bebas Neue Bold";
    src: url(${fontBold});
  }

  html {
  scroll-behavior: smooth;
}

  body {
    margin: 0;
    padding: 0;
    font-family: "Bebas Neue Regular";
    font-style: italic;
    letter-spacing: 1.8px;
    font-size: 42px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSection: [],
      offset: 0,
    }
    this._getSetionsTopOffset = this._getSetionsTopOffset.bind(this)
    this.handleParallax = this.handleParallax.bind(this)
  }

  componentDidMount() {
    this.sectionsTopOffset = this._getSetionsTopOffset(".section")
    this.setActiveSection()
    window.addEventListener("scroll", this.handleScroll)
  }

  // componentDidUpdate() {}

  componentWillUnmount() {
    window.removeEventListener(this.handleScroll)
  }

  _getActiveSection = () => {
    const sectionsId = []
    for (const item of this.sectionsTopOffset) {
      if (this._checkIfSectionIsActive(item.id)) sectionsId.push(item.id)
    }
    return sectionsId
  }

  setActiveSection = () => {
    const activeSection = this._getActiveSection()

    if (!this.state.activeSection.length) {
      this.setState({ activeSection })
      return
    }

    let isTheSame = true

    if (activeSection.length !== this.state.activeSection.length) {
      isTheSame = activeSection.every(
        (elem, index) => elem === this.state.activeSection[index]
      )
    }

    if (!isTheSame) {
      this.setState({ activeSection })
    }
  }

  handleParallax(rate) {
    const offset = rate * window.pageYOffset
    this.setState({ offset })
  }

  handleScroll = e => {
    this.handleParallax(0.1)
    this.setActiveSection()
    // this.checkIfCanAnimate("section-3")
    console.log("handleScroll")
  }

  _getSetionsTopOffset(selector) {
    return [...document.querySelectorAll(selector)].map(section => ({
      id: section.id,
      top: section.offsetTop,
      bottom: section.offsetTop + section.clientHeight,
    }))
  }

  checkIfCanAnimate = id => {
    const canAnimate = this.state.activeSection.some(
      activeSection => activeSection === id
    )
    return canAnimate
  }

  _checkIfSectionIsActive = id => {
    const offset = this.sectionsTopOffset.find(elem => elem.id === id)
    const scrollAndScreenOffset = window.pageYOffset + window.innerHeight
    if (
      scrollAndScreenOffset <
        offset.bottom + (offset.bottom - offset.top) * 1.5 &&
      scrollAndScreenOffset > offset.top - 40
    ) {
      return true
    }
    return false
  }

  // _handleTickScrolling = () => {
  //   if (this.interval) {
  //     clearTimeout(this.interval)
  //     delete this.interval
  //   }
  //   this.interval = setTimeout(this.handleParallax, 50)
  // }

  render() {
    return (
      <>
        <GlobalStyle />
        <SEO title="Sizeer" />
        <Layout>
          <Section
            backgroundImg={backgroundImage_1}
            id="section-1"
            className="section"
          >
            <Button text={"Poznaj Kicksa"} dark />
            <FirstHeaderText />
          </Section>
          <Section
            isFlex
            backgroundImg={backgroundImage_2}
            id="section-2"
            className="section"
          >
            <PhotosWrapper left>
              <MaltaPhoto
                checkIfCanAnimate={() => this.checkIfCanAnimate("section-2")}
                photo={malta_photo_1}
                alter="Malta photo 1"
                active={() => this.checkIfCanAnimate}
                Yoffset={-this.state.offset * 0.8}
                rotate={10 + this.state.offset * 0.2}
                zIndex="3"
              />
              <MaltaPhoto
                checkIfCanAnimate={() => this.checkIfCanAnimate("section-2")}
                photo={malta_photo_2}
                alter="Malta photo 2"
                Yoffset={-this.state.offset * 0.8}
                rotate={-1 + this.state.offset * -0.2}
                zIndex="2"
              />
              <MaltaPhoto
                checkIfCanAnimate={() => this.checkIfCanAnimate("section-2")}
                photo={malta_photo_3}
                alter="Malta photo 3"
                Yoffset={-this.state.offset * 0.8}
                rotate={3 + this.state.offset * 0.1}
                zIndex="1"
              />
            </PhotosWrapper>
            <PlayerWrapper />
            <PhotosWrapper>
              <MaltaPhoto
                checkIfCanAnimate={() => this.checkIfCanAnimate("section-2")}
                photo={malta_photo_4}
                alter="Malta photo 4"
                Yoffset={-this.state.offset * 0.8}
                rotate={-10 + this.state.offset * 0.2}
                zIndex="1"
              />
              <MaltaPhoto
                checkIfCanAnimate={() => this.checkIfCanAnimate("section-2")}
                photo={malta_photo_5}
                alter="Malta photo 5"
                Yoffset={-this.state.offset * 0.8}
                rotate={10 + this.state.offset * -0.2}
                zIndex="3"
              />
              <MaltaPhoto
                checkIfCanAnimate={() => this.checkIfCanAnimate("section-2")}
                photo={malta_photo_6}
                alter="Malta photo 6"
                Yoffset={-this.state.offset * 0.8}
                Xoffset={-this.state.offset * 0.8}
                rotate={1 + this.state.offset * 0.2}
                zIndex="2"
                id="malta-photo-6"
              />
            </PhotosWrapper>
          </Section>
          <Section
            backgroundImg={backgroundImage_3}
            className="section"
            id="section-3"
          >
            <SecondText />
            <Sticker
              image={ok_sticker}
              alter="Ok sticker"
              position={{ bottom: -80, left: 28 }}
              positionUnits={{ left: "%" }}
              checkIfCanAnimate={() => this.checkIfCanAnimate("section-3")}
              Yoffset={this.state.offset * 0.1}
              Xoffset={this.state.offset * 0.1}
            />
          </Section>
          <Section
            backgroundImg={backgroundImage_4}
            id="section-4"
            className="section"
          >
            <RocketPig
              checkIfCanAnimate={() => this.checkIfCanAnimate("section-4")}
              Yoffset={-this.state.offset * 0.1}
              Xoffset={-this.state.offset * 0.2}
              rotate={this.state.offset * 0.01}
            />
            <Sticker
              image={wow_sticker}
              alter="Wow sticker"
              position={{ bottom: -80, left: 28 }}
              positionUnits={{ left: "%" }}
              checkIfCanAnimate={() => this.checkIfCanAnimate("section-4")}
              Yoffset={-this.state.offset * 0.1}
              Xoffset={-this.state.offset * 0.1}
            />
            <ThirdText />
          </Section>
          <Section
            backgroundImg={backgroundImage_5}
            id="section-5"
            className="section"
          >
            <FourthText />
            <Sticker
              image={zigzag_sticker}
              alter="Zigzag sticker"
              position={{ bottom: -80, right: -20 }}
              size={320}
              checkIfCanAnimate={() => this.checkIfCanAnimate("section-5")}
              Yoffset={-this.state.offset * 0.1}
              Xoffset={this.state.offset * 0.1}
            />
          </Section>
          <Section
            backgroundImg={backgroundImage_6}
            id="section-6"
            className="section"
          >
            <FifthText />
            <Sticker
              image={loud_sticker}
              alter="Loud sticker"
              position={{ bottom: -90, right: 650 }}
              rotate={0}
              offset={{ x: 0, y: 0 }}
              size={100}
            />
            <Sticker
              image={palm_sticker}
              alter="Palm sticker"
              position={{ bottom: -90, right: 500 }}
              rotate={0}
              offset={{ x: 0, y: 0 }}
              size={130}
            />
            <Sticker
              image={umbrela_sticker}
              alter="Umbrela sticker"
              position={{ bottom: -90, right: 350 }}
              rotate={0}
              offset={{ x: 0, y: 0 }}
              size={130}
            />
          </Section>
          <Section
            backgroundImg={backgroundImage_7}
            id="section-7"
            className="section"
          >
            <SixthText offset={{ x: 0, y: 0 }} />
            <Sticker
              image={glasses_image}
              alter="Glasses image"
              position={{ top: 200, left: 54 }}
              positionUnits={{ left: "%" }}
              size={300}
              checkIfCanAnimate={() => this.checkIfCanAnimate("section-5")}
              Yoffset={this.state.offset * 0.1}
              Xoffset={this.state.offset * 0.2}
            />
          </Section>
        </Layout>
      </>
    )
  }
}

// handleSectionsChange = () => {
//   const currentSectionsIds = this._chooseSectionToHandling(
//     this.sectionsTopOffset,
//     window.pageYOffset
//   )
//   currentSectionsIds.forEach((item, index) => {
//     if (item === this.state.currentSectionsIds[index]) return
//     this.setState({ currentSectionsIds })
//   })
// }

// _getCoordinates = (x, y) => {
//   const centralSectionOffset = this._getCentralSectionOffset(
//     this.sectionsTopOffset,
//     window.pageYOffset
//   )

//   console.log(
//     Math.floor(
//       x * window.innerHeight - (centralSectionOffset - window.pageYOffset)
//     )
//   )
//   const coordinates = {
//     x: Math.floor(
//       x * window.innerHeight - (centralSectionOffset - window.pageYOffset)
//     ),
//     y: Math.floor(
//       y * window.innerHeight - (centralSectionOffset - window.pageYOffset)
//     ),
//   }

//   const coordinates = {
//     x: x * window.pageYOffset,
//     y: y * window.pageYOffset,
//   }

//   this.setState({ coordinates })
// }

// _getOffset(iterator) {
//   let generated = iterator["next"]()
//   if (!generated.done) return generated.value
// }

// *_getSetionPosition(selector) {
//   const sections = [...document.querySelectorAll(selector)]
//   let i = 0
//   while (i < sections.length) {
//     yield {
//       top: sections[i].offsetTop,
//       bottom: sections[i].offsetTop + sections[i].clientHeight,
//     }
//     i++
//   }
// }

// _chooseSectionToHandling = (offsets, scrollValue) => {
//   const currentSectionsIds = []
//   for (const offset of offsets) {
//     if (
//       offset.top <= scrollValue + window.innerHeight &&
//       offset.bottom >=
//         scrollValue - window.innerHeight + offset.bottom - offset.top
//     )
//       currentSectionsIds.push(offset.id)
//   }
//   return currentSectionsIds
// }

export default IndexPage

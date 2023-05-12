class Main {
    videoPlayer(){
        return cy.get('.play-block-center')
    }
    subtitlesButton(){
        return cy.get('.settings-block > :nth-child(1) > .icon')
    }
    subtitlesButton(){
        return cy.get('.settings-block > :nth-child(1) > .icon')
    }
    activeSubtitles(){
        return cy.get('div[class="video_subtitles active slide-down"]', {timeout:26000})
    }
    notActiveSubtitles(){
        return cy.get('div[class="video_subtitles"]')
    }
    gearControlButton(){
        return cy.get('.gear-control > .icon')
    }
    playbackSpeedButton(){
        return cy.get('.settings-popup > :nth-child(2)')
    }
    slowPlaybackSpeed(){
        return cy.get(':nth-child(2) > .settings-popup__link')
    }
    fastPlaybackSpeed(){
        return cy.get(':nth-child(8) > .settings-popup__link')
    }
    currntDuration(){
        return cy.get('.current-duration > p > time')
    }
}

export default Main
import Main from './PageObject/main';

describe('Subtitles', () => {
    
    const main = new Main()

    it('subtitles-functionality', () => {

        cy.visit('https://cine-books.com/');
        cy.viewport(1920, 1080);

        //Scroll to video banner
        cy.scrollTo(0, 1000);

        //Assertion that videoplayer is displayed on a screen
        main.videoPlayer().should('be.visible')

        //Click on video player. Turn on the video playback
        main.videoPlayer()
        .click();

        //Click on subtitles button to turn on  subtitles
        main.subtitlesButton()
        .click({force:true})
        main.subtitlesButton()
        .click({force:true})
        
        //Assertion that subtitles to are active and displayed(not empty)
        main.activeSubtitles()
        .should('not.to.match', ':empty')

        //Click on subtitles button to deactivate subtitles
        main.subtitlesButton()
        .click({force:true})

        //Assertion that subtitles to are NOT active and NOT displayed
        main.notActiveSubtitles()
        .should('to.match', ':empty')

    })
})

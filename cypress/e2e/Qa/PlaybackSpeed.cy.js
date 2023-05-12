import Main from './PageObject/Main';

describe('Subtitles', () => {

    const main = new Main()

    it('playbackSpeedDecrease', () => {

        cy.visit('https://cine-books.com/')
        cy.viewport(1920, 1080)

        //Scroll to video banner
        cy.scrollTo(0, 1000)

        //Assertion that videoplayer is displayed on a screen
        main.videoPlayer().should('be.visible')

        //Click on video player. Turn on the video playback
        main.videoPlayer()
        .click()

        //Click on gear control button
        main.gearControlButton()
        .click({force:true})

        //Click on playback speed option
        main.playbackSpeedButton()
        .click({force:true})

        //Click on 0.25 playback speed option
        main.slowPlaybackSpeed()
        .click({force:true})

        cy.wait(10000)

        //Assertion that current time displayed on a player is less then 10 seconds (that we forced to wait in the previous command)
        main.currntDuration()
        .then(($timer) => {

            const actualTime = new Date ('1970-01-01T' + $timer.text() + 'Z')
            const expectedTime = new Date ("January 1, 1970 03:00:10")
            expect (expectedTime).be.gt(actualTime)


        })
    })

    it('playbackSpeedIncrease', () => {

        cy.visit('https://cine-books.com/');
        cy.viewport(1920, 1080)

        //Scroll to video banner
        cy.scrollTo(0, 1000)

        //Assertion that videoplayer is displayed on a screen
        main.videoPlayer().should('be.visible')
 
        //Click on video player. Turn on the video playback
        main.videoPlayer()
        .click() 

        //Click on gear control button
        main.gearControlButton()
        .click({force:true})

        //Click on playback speed option
        main.playbackSpeedButton()
        .click({force:true})

        //Click on 2 playback speed option
        main.fastPlaybackSpeed()
        .click({force:true})

        cy.wait(10000);

        //Assertion that current time displayed on a player is more then 10 seconds (that we forced to wait in the previous command)
        main.currntDuration().then(($timer) => {

            const actualTime = new Date ('1970-01-01T' + $timer.text() + 'Z')
            const expectedTime = new Date ("January 1, 1970 03:00:10")
            expect (expectedTime).be.lt(actualTime)


        })
    })

})
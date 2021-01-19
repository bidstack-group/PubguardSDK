"use strict";

var CloseButtonClicker = class CloseButtonClicker {
    /**
     * Arrays with close button classes and ids
     * Ideally we should add all possible solutions from all ad networks
     */
    closeClasses = [
        '.close-button-wrapper',
        '.closeButtonContainer',
        '.close-button-countdown',
        '.close-button',
        '.close',
        '.sproutImageElement',
        '.btn-close-region'
    ];
    closeIDs = [
        '#ssaNavigatorCloseButton',
        '#close-button',
        '#close-icons',
        '#close_button',
        '#close-button-countdown',
        '#c4d-close-button',
        '#c4d-skip-button',
        '#c4d-close-button-click-area'
    ];
    imgAlt = 'img[alt="close"]';
    partialID = '[id*="close-button"], [id*="im_"]';

    /**
     * Join all classes and ids in one string. To use in querySelectorAll
     */
    querySelectorValues = `
    ${this.closeClasses.join(', ')},
    ${this.closeIDs.join(', ')},
    ${this.partialID},
    ${this.imgAlt}`;

    constructor() {
        /**
         * Click through close button on main document
         */
        this.clickOnAllCloseButtons(document);

        /**
         * Go through all iframes and click and close buttons
         */
        this.goThroughIframes();
    }

    goThroughIframes() {
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach(frameRef => {
            const frameBody = frameRef.contentDocument || frameRef.contentWindow.document;
            this.clickOnAllCloseButtons(frameBody);
        })
    }

    clickOnAllCloseButtons(elementRef) {
        const allDivs = elementRef.querySelectorAll(this.querySelectorValues);

        allDivs.forEach(element => {
            console.log('element', element);
            element.click();

            /**
             * Click on our found element last child node
             * As we are not sure what node actually listens for click event we go to the last node in nodelist
             * In javascript events bubble up
             * so we can be sure that if any of the nodes has a listener it will be triggered
             */
            console.log('getLastElement(element)', this.getLastElement(element))
            if (this.getLastElement(element).click) {
                this.getLastElement(element).click();
            }
            if (this.getLastElement(element).onClick) {
                this.getLastElement(element).onClick();
            }
        })
    }

    /**
     * Get the last node of the elementRef
     */
    getLastElement(element) {
        return element?.lastElementChild
            ? this.getLastElement(element.lastElementChild)
            : element
    }
}

new CloseButtonClicker();

"use strict";

//const MAX_RETRIES = 5
//const RETRY_INTERVAL = 1000

var AdMuter = class AdMuter {
    
    MAX_RETRIES = 5;
    RETRY_INTERVAL = 1000;
    
    interval;
    adMuted = false;

    constructor() {

        let tries = 0;
        this.interval = setInterval(() => {
            if (this.adMuted || tries === this.MAX_RETRIES) {
                clearInterval(this.interval);
                return;
            }

            tries++;
            if (globalThis && globalThis.AudioBufferSourceNode) {
                globalThis.AudioBufferSourceNode.prototype.start = (function() {return null})
            }
            this.muteAds();
        }, this.RETRY_INTERVAL);

    }

    muteAds() {
        /**
         * Mute videos that are in document
         */
        this.muteAllVideos(document)

        /**
         * Mute videos that are in frames
         */
        this.muteAllFrames(document);
    }

    iframeVideoMuter(frameRef) {
        const frameBody = frameRef.contentDocument || frameRef.contentWindow.document;

        /**
         * Check for deep frames
         */
        this.muteAllFrames(frameBody)

        /**
         * Mute videos in frame
         */
        this.muteAllVideos(frameBody);
    }

    muteAllFrames(elementRef) {
        const iframes = elementRef.querySelectorAll("iframe");
        if (iframes.length) {
            iframes.forEach(frameRef => this.iframeVideoMuter(frameRef))
        }
    }

    muteAllVideos(elementRef) {
        const videos = elementRef.querySelectorAll("video");
        this.muter(videos);

        const audio = elementRef.querySelectorAll("audio");
        this.muter(audio)
    }

    muter(elements) {
        elements.forEach(elementRef => {
            elementRef.muted = true;
            // this.adMuted = true;
        })
    }
}

/**
 * Mute audio in games
 * Should work with WEB AUDIO API
 * @type {function(): null}
 */


new AdMuter();





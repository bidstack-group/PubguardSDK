'use strict';
const MAX_RETRIES = 0x5, RETRY_INTERVAL = 0x3e8;
class AdMuter {
    constructor() {
        var _0x53846c, _0x4ff0f0 = ![];
        let _0x131708 = 0x0;
        this['interval'] = setInterval(() => {
            if (this['adMuted'] || _0x131708 === this['MAX_RETRIES']) {
                clearInterval(this['interval']);
                return;
            }
            _0x131708++, globalThis && globalThis['AudioBufferSourceNode'] && (globalThis['AudioBufferSourceNode']['prototype']['start'] = function () {
                return null;
            }), this['muteAds']();
        }, this['RETRY_INTERVAL']);
    }
    ['muteAds']() {
        this['muteAllVideos'](document), this['muteAllFrames'](document);
    }
    ['iframeVideoMuter'](_0x38abc0) {
        const _0x4e2fc1 = _0x38abc0['contentDocument'] || _0x38abc0['contentWindow']['document'];
        this['muteAllFrames'](_0x4e2fc1), this['muteAllVideos'](_0x4e2fc1);
    }
    ['muteAllFrames'](_0xd2318a) {
        const _0x177fb4 = _0xd2318a['querySelectorAll']('iframe');
        _0x177fb4['length'] && _0x177fb4['forEach'](_0x41c54e => this['iframeVideoMuter'](_0x41c54e));
    }
    ['muteAllVideos'](_0x49ac6e) {
        const _0x408449 = _0x49ac6e['querySelectorAll']('video');
        this['muter'](_0x408449);
        const _0x5a63f8 = _0x49ac6e['querySelectorAll']('audio');
        this['muter'](_0x5a63f8);
    }
    ['muter'](_0x3c230b) {
        _0x3c230b['forEach'](_0x1ff672 => {
            _0x1ff672['muted'] = !![];
        });
    }
}
new AdMuter();

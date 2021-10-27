function AdColonyExtractVideoUrl() {
    
    var videoUrl = "";
    
    if (ADC_DEVICE_INFO && ADC_DEVICE_INFO.native_data.video.variants.optimised.url) {
        
        videoUrl = ADC_DEVICE_INFO.native_data.video.variants.optimised.url;
    }
    
    return videoUrl;
}

AdColonyExtractVideoUrl();

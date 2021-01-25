Pod::Spec.new do |spec|
  spec.name             = 'PubguardSDK'
  spec.version          = '1.0.0'
  spec.license          = 'Apache License, Version 2.0'
  spec.homepage         = 'https://github.com/bidstack-group/pubguard-sdk-ios'
  spec.authors          = { "Pubguard" => "support@pubguard.com" }
  spec.summary          = 'Pubguard framework for iOS'
  spec.description      = <<-DESC
                            Pubguard framework for iOS.
                          DESC
  spec.social_media_url = 'https://pubguard.com'
  spec.source           = { :git => 'https://github.com/bidstack-group/pubguard-sdk-ios.git', :tag => spec.version.to_s }
  spec.requires_arc     = true
  spec.ios.deployment_target = '9.0'
  spec.vendored_frameworks = 'Pubguard.xcframework'
  spec.dependency 'SwiftProtobuf'

end

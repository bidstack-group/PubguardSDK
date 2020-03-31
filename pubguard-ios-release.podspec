Pod::Spec.new do |spec|
  spec.name             = 'pubguard-ios-release'
  spec.module_name      = 'pubguard'
  spec.version          = '1.0.0'
  spec.license          = { :type => 'New BSD', :file => 'LICENSE' }
  spec.homepage         = 'https://github.com/bidstack-group/pubguard-ios-release'
  spec.authors          = { 'Bidstack' => 'support-pubguard@bidstack.com' }
  spec.summary          = 'The Official Pubguard Client SDK allows developers to easily sequre their audience with fraud ads.'
  spec.description      = <<-DESC
                            Pubguard update description here! The Official Pubguard Client SDK allows developers to easily sequre their audience with fraud ads.\n
                          DESC
  spec.social_media_url = 'https://bidstack.pubguard.com'
  spec.source           = { :git => 'https://github.com/bidstack-group/pubguard-ios-release.git', :tag => spec.version.to_s }
  spec.requires_arc     = true
  spec.ios.deployment_target = '8.0'
  spec.vendored_framework  = 'Pubguard.framework/'
  spec.public_header_files = 'Pubguard.framework/Headers/*.h'
  spec.module_map       = 'Pubguard.framework/Modules/module.modulemap'
  #spec.source_files     = 'Pubguard.framework.{h,nib,ttf,sh,car}'

end

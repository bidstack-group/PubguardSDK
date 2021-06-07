Pod::Spec.new do |spec|

  spec.name         = "PubguardSDK"
  spec.version      = "0.0.9"
  spec.summary      = "PubguardSDK framework for iOS."

  spec.description  = <<-DESC
			  The Pubguard Library is solution that monitors the advertising content flowing through your mobile app,\n
			  protecting against unwanted content and optimising revenues.
		      DESC

  spec.homepage     = "https://pubguard.com"

  spec.license      = { :type => 'MIT', :file => 'LICENSE.TXT' }

  spec.author       = { "Alexey Volkov" => "aleksejs.volkovs@bidstack.com" }
  spec.platform     = :ios, "9.0"

  spec.source       = { :git => "https://github.com/bidstack-group/pubguard-sdk-ios/releases/download/v#{spec.version}/PubguardSDK.xcframework.zip" }

  spec.dependency "libffi-iOS", "3.3.5-iOS"
  spec.dependency "SwiftProtobuf", "1.15.0"

  spec.source_files  = "Classes", "Classes/**/*.{h,m}"
  spec.exclude_files = "Classes/Exclude"
  spec.vendored_frameworks  = "PubguardSDK.xcframework"
	
end

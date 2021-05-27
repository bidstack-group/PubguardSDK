Pod::Spec.new do |spec|

  spec.name         = "PubguardSDK"
  spec.version      = "0.0.9"
  spec.summary      = "A short description of PubguardSDK."

  spec.description  = <<-DESC
					   DESC

  spec.homepage     = "http://EXAMPLE/PubguardSDK"

  spec.license      = "MIT (example)"

  spec.author       = { "Alexey Volkov" => "aleksejs.volkovs@bidstack.com" }
  spec.platform     = :ios, "9.0"

  spec.source       = { :git => "https://github.com/bidstack-group/pubguard-sdk-ios.git", :tag => "#{spec.version}" }

  spec.dependency "libffi-iOS", "3.3.5-iOS"
  spec.dependency "SwiftProtobuf", "1.15.0"

  spec.source_files  = "Classes", "Classes/**/*.{h,m}"
  spec.exclude_files = "Classes/Exclude"

end

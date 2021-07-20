Pod::Spec.new do |spec|

  spec.name         = "PubguardSDK"
  spec.version      = "1.0.0"
  spec.summary      = "PubGuard — A leading ad quality platform that specialises in ad-quality monitoring and analysis of offensive ads for publishers."

  spec.description  = <<-DESC
			  Pubguard is a leading ad quality platform that specialises in monitoring and analysing offensive ads for publishers. We arm our clients with insights and tools that allow them to take control and prevent bad ads from being served to their audience. Through our proprietary technology we do the heavy lifting, so publishers don't have to. 
			  What we do:
			  Categorises every creative shown within apps through its proprietary technology
			  Automatically flags suspicious or potentially offensive ads, allowing publishers to review and decide how to handle them
			  Automatically reach out to ad-networks and take immediate actions to deal with critical ads
			  Access real time in-depth reporting to manage bad ads
			  High frequency, low latency tech offering 24/7 continuous protection through its lightweight SDK
			  Our easy-to-use platform helps to improve ad quality, increase campaign performance and ultimately generate greater yields. We build high frequency, low latency technology that scans and analyses billions of ads without disrupting the user experience. The business was founded in 2015 to address deficiencies in ad quality monitoring and in 2019, it was acquired by Bidstack Group PLC as an independent subsidiary.
		      DESC

  spec.homepage     = "https://pubguard.com"

  spec.license      = { :type => 'MIT', :file => 'LICENSE.TXT' }

  spec.author       = { "Alexey Volkov" => "aleksejs.volkovs@bidstack.com" }
  spec.platform     = :ios, "12.0"

  spec.source       = { :git => "ssh://github.com/bidstack-group/pubguard-sdk-ios/releases/download/v#{spec.version}/PubguardSDK.xcframework.zip" }

  spec.dependency "libffi-iOS", "3.3.5-iOS"
  spec.dependency "SwiftProtobuf", "1.15.0"

  spec.source_files  = "Classes", "Classes/**/*.{h,m}"
  spec.exclude_files = "Classes/Exclude"
  spec.vendored_frameworks  = "PubguardSDK.xcframework"
	
end

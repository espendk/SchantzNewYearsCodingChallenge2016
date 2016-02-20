require 'digest/sha1'
a=(`aspell dump master`).split("\n")
c=""
until "2b2b96cd68476c9559fd4374000b4314a2d73a7c"==Digest::SHA1.hexdigest(c)do c=(a+["1st","2nd","3rd"]+(4..12).map{|c|c.to_s+"th"}+Array.new(113,"\n")).shuffle[0..559].join(" ")end
puts c
val g = """12 Drummers Drumm 
Eleven Pipers Pip 
Ten Lords a Leap 
Nine Ladies Danc 
Eight Maids a Milk 
Seven Swans a Swimm 
Six Geese a Lay 
Five Golden R  s
Four Call   Birds
Three French Hens
Two Turtle Doves
and a Partridge in a Pear Tree""" replace("  ", "ing") split "\n"
 
def v(d: Int) = s"On the $d${if(d<4) Seq("st","nd","rd")(d-1) else "th"} day of Christmas \nmy true love sent to me: \n${if(d<2) "A " +
  g(11).drop(6) else g drop(12-d) mkString " \n"} \n\n"
 
print(1 to 12 map v _ mkString)

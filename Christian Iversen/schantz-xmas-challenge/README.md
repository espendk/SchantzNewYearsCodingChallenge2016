# xmas-challenge

Challenge: Write the smallest possible program (minus whitespace) that
outputs the lyrics to "12 Days of Christmas"

My friend Espen Højsgaard made a public challenge to write the
smallest such program, and these are my contributions to that.

The rules are:

  1. Can't read data files
  2. Must finish in reasonable time
  3. Whitespace characters do not count
  4. The output is case-sensitive

The file full-lyrics.txt contains the lyrics reference. The script
"size.py" takes the name of a file as the first argument, and prints
the number of non-whitespace characters in it.

There are 3 categories, and this is my attempt at winning each of those:

  1. Shortest program, not counting whitespace

  2. Shortest program, counting all characters including whitespace

  3. Shortest program that consists only of whitespace.

## xmas1

This is a pure-python implementation that originally wasn't very
small. This is what lead me to pursue the other implementations. Since
then, it has been much improved. I would be surprised if a
significantly smaller honest python solution exists.

## xmas2

This slightly bends the rules, since it reads its own source code, but
no external files are used. This is a rather trivial use of zlib
compression to try and minimize the size.

## xmas3

This is a smaller version of xmas2, written in shell code, but since
it uses HEREDOC format, it does NOT read its own code, thereby
avoiding the rule-bendiness. It only runs in zsh, since other shells
barf at the binary heredoc. The gzip blob was hand-optimized by
looking at all the possible outputs of -1 through -9. It turns out, -5
was the smallest output for this particular (small) input file. As an
added trick, heredocs do not need to be terminated, if they end at the
end-of-file. So we save another couple of bytes there.

## xmas4

For the "smallest program, not counting whitespace" category, the
trick is clearly to put as much information as possible into
whitespace, through whatever means necessary. This python script does
not use any file input tricks - instead, it encodes the lyrics into a
string constant consisting of whitespace and tab (\t), which is then
decoded and printed. Since whitespace does not count, only the
decoding logic counts toward the size.

## xmas5

Originally, the rules simply said "smallest program, not counting
whitespace", but since several contestants (including myself)
implemented a solution in the Whitespace language, this became
somewhat boring. For that reason, the "smallest program consisting
entirely of whitespace" category was added, and this is my
contribution to that.

The trivial implementation in whitespace will simply push each
character to the stack, then print it. However, this takes about 43kb,
which is clearly not ideal. So to be competitive, I implemented my own
whitespace assembler (since whitespace is really a machine language,
not a programming language). With it, I was able to create a
partially-generated solution which employs hand-optimized whitespace
assembler. That's not something you see every day, you have to admit.

To further bring the size down, I employ a number of tricks:

 - Create a callable write_buffer() routine, to output strings of
   characters. This saves many, many "write" operations.

 - Numbers in whitespace are implemented as arbitrary *bit*
   width. This means that instead of simply outputting 8 bits per
   character (which is entirely valid), leading zeroes can be
   discarded, leading to a saving of 1 byte per bit discarded this way.

 - Because storage size relates roughly to log_2(n), bringing down the
   average absolute size of the numbers (characters) will save
   space. Therefore, characters are offset-encoded at an ord('a')
   offset, meaning that most lower-case letters become very small numbers.

 - A custom routine is implemented to print the "On the nth day of
   Christmas" line efficiently.

 - A main routine is implemented, using a hand-written loop over the
   various parts, meaning redundancy is kept to an absolute minimum.

## xmas6

The xmas4 solution was clearly a step in the right direction. I'm
quite proud to have gotten the python solution down to the size I
managed, but python tends to have verbose labels, so I reimplemented
the same basic idea in zsh, which approaches line noise as you move
into the more advanced features. Using short-form loops, default
variable values, and a ton of parameter expansion tricks, I was able
to save a number of bytes over the python solution.

## xmas7

This is an iteration on xmas3, which competes in the "smallest total
size" category. Since we are dealing with a shell script that decodes
gzip data, I was wondering if maybe there wasn't some padding data at
the end of the gzip data stream. It turns out there is! And luckily,
this particular stream is still decompressible if you shave a few
bytes off. So xmas7 is just xmas3 without the last few bytes at the end.

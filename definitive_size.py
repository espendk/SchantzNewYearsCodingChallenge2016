#!/usr/local/bin/python3
import sys
filename = sys.argv[1]
text = open(filename, errors='surrogateescape').read()
text2 = text \
       .replace(" ", "") \
       .replace("\t", "") \
       .replace("\n", "") \
       .replace("\r", "") \
       .replace("\f", "") \
       .replace("\v", "")
print("%s: %6d total, %6d whitespace, %6d non-whitespace" % (filename, len(text), len(text)-len(text2), len(text2)))

#!/usr/bin/python

import sys
import xmas5py

def code(arg):
    print "  ; \"%s\"" % arg.replace("\n", "\\n")
    offset = xmas5py.best_offset(arg)
    orig = xmas5py.total_bit_width(arg, 0)
    best = xmas5py.total_bit_width(arg, offset)
    # print "  ; size: %d/%d (%d%% reduction)" % (orig, best, (orig-best)/float(orig)*100.0)
    if len(arg) > 3:
        for x in reversed(arg):
            print "  push %d" % (ord(x) - offset)
        print ""
        print "  push %d" % len(arg)
        print "  push %d" % (offset - xmas5py.BASE_OFFSET)
        print "  call write_buffer"
    else:
        for x in arg:
            print "  push %d" % ord(x)
            print "  write"

code(sys.argv[1].replace("\\n", "\n"))

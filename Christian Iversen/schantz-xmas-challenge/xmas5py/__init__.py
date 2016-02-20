BASE_OFFSET = 104

def number_bit_length(number):
    return len(bin(abs(number))[2:].lstrip("0"))

def total_bit_width(string, offset):
    bits = 0
    for c in string:
        bits += number_bit_length(ord(c) - offset)
    bits += number_bit_length(offset)
    return bits

def best_offset(string):
    best = 0xFFFFFFFF
    index = None
    for x in range(0, 256):
        new = total_bit_width(string, x)
        if new < best:
            best = new
            index = x
    return index

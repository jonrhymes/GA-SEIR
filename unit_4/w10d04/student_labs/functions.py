## SUM TO - WRITE FUNCTION THAT ACCEPTS A SINGLE INTEGER
# AND RETURNS THE SUM OF THE INTEGERS FROM 1 TO N

def sum_to(n):
    total = 0
    while n > 0:
        total = total + n
        n = n - 1
    return total

print(sum_to(6)) # returns 21
print(sum_to(10)) # returns 55


## LARGEST - TAKES A LIST OF NUMBERS AS AN ARGUMENT
# AND RETURNS THE LARGEST NUMBER IN THAT LIST

def largest(array):
    return max(array)

print(largest([1, 2, 3, 4, 0]))  # returns 4
print(largest([10, 4, 2, 231, 91, 54])) # returns 231


## OCCURRENCES - TAKES TWO STRING ARGUMENTS AS INPUT
# AND COUNTS THE NUMBER OF OCCURRENCES OF THE SECOND
# STRING INSIDE THE FIRST STRING

# "fleep floop".count('e')
# character = "e"

def occurrences(phrase, character):
    return phrase.count(character)

print(occurrences('fleep floop', 'f'))

## PRODUCT - TAKES ARBITRARY NUMBER OF NUMBERS,
# MULTIPLIES THEM ALL TOGETHER AND RETURNS THE
# PRODUCT

def product(*args):
    base = 1
    for num in args:
        base *= num
    return base

print(product(-1, 4))
print(product(2, 5, 5))
print(product(4, 0.5, 5))



def phraseRepeater(sentence, howMany):
    counter = 1
    while counter <= howMany:
        print(f"{counter} {sentence}")
        counter += 1

whatPhrase = input("Input your phrase: ")
times = input("How many times? ")

phraseRepeater(whatPhrase, int(times))

def fizzBuzz(num):
    counter = 1
    while counter <= num:
        if counter % 3 == 0 and counter % 5 == 0:
            print("FizzBuzz")
        elif counter % 3 == 0:
            print("Fizz")
        elif counter % 5 == 0:
            print("Buzz")
        else:
            print(counter)
        counter += 1

fizzBuzz(100)


def EthereumConvert(amount):
    conversionrate = 1/234
    return amount * conversionrate

toconvert = input("How much USD would you like to convert? ")

print(EthereumConvert(int(toconvert)))
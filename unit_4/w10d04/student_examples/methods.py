#//////////////////////////////
# USEFUL METHODS
#//////////////////////////////
# Useful methods for working with different data types

#//////////////////////////////
# String Methods
#//////////////////////////////
#.upper() - makes string uppercase
#.title() - First letter of each word uppercase
#.split() - splits string based on separator and returns list
#.casefold() - makes lowercase
# MORE STRING METHODS -> https://www.w3schools.com/python/python_ref_string.asp

# myString = "hello world"
# myEnv = "PORT=3000"
#
# print(myString.upper())
# print(myString.title())
# print(myEnv.split("="))
# print(myString.upper().casefold()) ## casefold makes everything lowercase


#//////////////////////////////
# List Methods
#//////////////////////////////
# .append() add element to end of the list
# .clear() remove all from the list
# .copy() returns copy of the list
# .remove() remove the first item of a list
# .pop() remove last item from a list
# .reverse() reverse the list
# MORE LIST METHODS -> https://www.w3schools.com/python/python_ref_list.asp

# myList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
#
# myList.append(10) # adds 10 to the list
# print(myList)
#
# myList2 = myList.copy() # makes a copy NOT BY REFERENCE of the list
#
# myList.clear() # removes all items from the list
# print(myList)
#
# myList2.pop() # removes the LAST item from the list
# myList2.remove(1) # removes the specified value from the list
#
# print(myList2)
# myList2.reverse() # Reverses list
# print(myList2)


#//////////////////////////////
# Dictionary Methods
#//////////////////////////////
# .items() returns list with a tuple for each key value pair
# .clear() remove all from the dictionary
# .copy() returns copy of the dictionary
# .pop() remove specified key from dictionary
# .keys() returns list of keys
# .values() returns list of values
# MORE DICTIONARY METHODS -> https://www.w3schools.com/py

myself = {"Name": "Jon", "Age": 35, "Email":"jonrhymes@gmail.com"}

print(myself.items())
myself2 = myself.copy()
myself.clear()
myself2.pop("Email")
print(myself, myself2)
print(myself2.keys(), myself2.values())
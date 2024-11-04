# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.


# number = int(input("Number:\t"))
# length = int(input("Length:\t"))

# multiples=[]

# for index in range(length):
#     multiples.append((index + 1) * number) 

# print(multiples)
# ______________________________________________________________________________________________________________

# Challenge 2

user_str = input("Enter String:\t")
new_str = ""


for index in range(len(user_str)):
    if index ==0 or user_str[index] != user_str[index - 1]:

        new_str += user_str[index]

print(new_str)

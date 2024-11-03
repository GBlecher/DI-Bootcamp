The_string = input("Please input a  10 character string:\n")

if len(The_string) < 10 :
    print("string is not long enough\n")

elif len(The_string) > 10 :
    print("string is too long\n")

else:
    print("perfect string\n")


    print(The_string[0])
    print(The_string[-1])


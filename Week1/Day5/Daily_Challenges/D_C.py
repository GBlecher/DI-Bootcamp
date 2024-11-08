# Challenge 1 : Sorting
# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world



user_string= input("Input,string,seperate,each,word,with,a,comma,as,seen:\t")

split_string = user_string.split(',')

print(split_string)

# j =1
# i = 0

for i in range(len(split_string)):
    for j in range(i+1 , len(split_string)):
        if len(split_string[j]) < len(split_string[i]):
            split_string[i], split_string[j] = split_string[j], split_string[i]

Joined_string = ','.join(split_string)
print(split_string)
print(Joined_string)



# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

user_string= input("Input a sentence:\t")

split_string = user_string.split(' ')


def find_longest_word(split_string):
    if len(split_string) > 1:
        max = split_string[0]
        for i in range(len(split_string)):
            for j in range(i+1 , len(split_string)):
                
                if len(split_string[j]) > len(max):
                    max = split_string[j]
    return max                
             
longest_word =  find_longest_word(split_string)
print(longest_word)    
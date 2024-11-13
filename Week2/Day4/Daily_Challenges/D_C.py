
# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.


class Text:

    def __init__(self, string):
        self.string = string
        self.dict_of_words = {}

    @classmethod
    def import_text(cls, file_name):
        with open(file_name, "r", encoding="utf-8") as file:
            content = file.read()
            return cls(content)

    def check_frequency(self):
        short_list = []

        str_list = self.string.split()

        for word in str_list:
            if word not in short_list:
                short_list.append(word)
        self.dict_of_words = {word: 0 for word in short_list}
        for word in str_list:
            word_count = str_list.count(word)
            for key in self.dict_of_words.keys():
                if word == key:
                    self.dict_of_words[key] += 1
        return self.dict_of_words

    def most_frequent(self):
        max = 0
        most_frequent_list = []
        for value in self.dict_of_words.values():
            if value > max:
                max = value
        for key in self.dict_of_words.keys():
            if self.dict_of_words[key] == max:
                most_frequent_list.append(key)
            else:
                continue

        print(f"Highest frequency - {max}:{most_frequent_list}")

    def unique_words(self):
        unique_list = []
        for key in self.dict_of_words.keys():
            if self.dict_of_words[key] == 1:
                unique_list.append(key)
            else:
                continue

        print(f"unique words-{unique_list}")


file_name = "the_stranger.txt"
sentence = Text.import_text(file_name)
sentence.check_frequency()

# sentence.most_frequent()
# sentence.unique_words()
